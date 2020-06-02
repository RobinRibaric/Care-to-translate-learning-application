export const getCategory = (categories, categoryName) => {
  const selectedCategory = categories.find(
    (item) => item.name === categoryName
  );
  return selectedCategory;
};

export const getPhraseId = (category, numOfQuestions) => {
  let arr = [];

  while (numOfQuestions--) {
    let randomNum = Math.floor(Math.random() * category.categoryLabels.length);

    const id = category.categoryLabels[randomNum];
    arr.push(id);
    category.categoryLabels.splice(randomNum, 1);
  }

  return arr;
};

export const getPhrases = (data, questionsId) => {
  let phrases = [];

  questionsId.forEach((id) => {
    const phrase = data.find((item) => item.id === id);

    if (phrase !== undefined) {
      if (phrase.variants[0] !== undefined) {
        if (phrase.variants[0].text.length > 2) {
          phrases.push(phrase);
        }
      }
    }
  });

  return phrases;
};

export const wordPickerQuiz = (phrases) => {
  // console.log('phrases--------------------------------', phrases);
  const data = phrases.map((phrase) => {
    const splittedText = phrase?.variants[0]?.text.split(' ');
    splittedText?.sort((a, b) => a.length - b.length);

    return {
      pickedWord: splittedText[splittedText.length - 1],
      phrase: phrase?.variants[0]?.text,
      missingWordIndex: 0,
    };
  });

  data.forEach((item) => {
    const splittedWord = item.phrase.split(' ');
    splittedWord.forEach((word, index) => {
      splittedWord[index] = word + ' ';
      if (word === item.pickedWord) {
        splittedWord[index] = '_'.repeat(item.pickedWord.length);
        item.missingWordIndex = index;
      }
    });
    const trimmedPhrase = splittedWord.join('');
    item.pickedWord = item.pickedWord.replace(/[,?]/g, ''); //only keeps these [^0-9a-zA-Z]
    item.phrase = trimmedPhrase;
  });
  // console.log('data----------------------------------', data);
  //console.log(data)
  return data;
};

export const getWordPickerQuizQuestions = (
  categories,
  categoryName,
  phrasesToLearn
) => {
  const selectedCategory = getCategory(categories, categoryName);
  const phraseIDs = getPhraseId(selectedCategory, 6);

  const phrases = getPhrases(phrasesToLearn, phraseIDs);

  const quizQuestions = wordPickerQuiz(phrases);

  const quizObject = {
    phrase: '',
    rightAnswer: '',
    wrongAnswers: [],
    shuffledAnswers: [],
  };

  const answerIndex = Math.floor(Math.random() * 4);
  if (quizQuestions[answerIndex] !== undefined) {
    quizObject.phrase = quizQuestions[answerIndex].phrase;
    quizObject.rightAnswer = quizQuestions[answerIndex].pickedWord;

    quizQuestions.splice(answerIndex, 1);

    let i = 2;
    while (i--) {
      let randomNumber = Math.floor(Math.random() * quizQuestions.length);
      quizObject.wrongAnswers.push(quizQuestions[randomNumber].pickedWord);
      quizQuestions.splice(randomNumber, 1);
    }

    quizObject.shuffledAnswers = shuffle([
      quizObject.rightAnswer,
      quizObject.wrongAnswers[0],
      quizObject.wrongAnswers[1],
    ]);
  }

  return quizObject;
};

export const shuffle = (array) => {
  //let arr2 = ['fever', 'particularly', 'contaminated']
  array.sort(() => Math.random() - 0.5);
  return array;
};
