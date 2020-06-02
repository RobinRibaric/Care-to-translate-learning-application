import { useSelector } from 'react-redux';

const spokenLanguage = 'English';

export const getQA = (
  category,
  defaultCategory,
  selectedLanguage,
  selectedLangPhrases,
  defaultLangPhrases
) => {
  /* const defaultCategory = useSelector(
        (state) => state.DataReducer.Categories[spokenLanguage]
    );

    const selectedLanguage = useSelector(
        (state) => state.LanguageReducer.selectedLanguage
    );

    const selectedLangPhrases = useSelector(
        (state) => state.DataReducer.Phrases[selectedLanguage]
    );

    const defaultLangPhrases = useSelector(
        (state) => state.DataReducer.Phrases['English']
    ); */
  // console.log(selectedLangPhrases)
  const selectedCategory = defaultCategory.find(
    (item) => item.name === category
  );

  let numOfQuestions = 5;
  let questionsId = getPhraseId(selectedCategory, numOfQuestions);

  let rightPhrases = getPhrases(defaultLangPhrases, questionsId);
  let defaultPhrases = getPhrases(selectedLangPhrases, questionsId);
  let wrongPhrasesId = getPhraseId(selectedCategory, numOfQuestions);
  let wrongPhrases = getPhrases(selectedLangPhrases, wrongPhrasesId);

  const wordPickerData = wordPicker(rightPhrases);

  //console.log(wordPickerData);

  return {
    defaultGame: { rightPhrases, defaultPhrases, wrongPhrases },
    wordPickerGame: wordPickerData,
  };
};

const getPhrases = (data, questionsId) => {
  let arr = [];

  questionsId.forEach((id) => {
    const phrase = data.find((item) => item.id === id);
    if (phrase.variants[0]) {
      arr.push({
        text: phrase.variants[0].text,
        soundId: phrase.variants[0].soundChecksum,
      });
    }
  });

  return arr;
};

const getPhraseId = (selectedCategory, numOfQuestions) => {
  let arr = [];

  while (numOfQuestions--) {
    let randomNum = Math.floor(
      Math.random() * selectedCategory.categoryLabels.length
    );

    const id = selectedCategory.categoryLabels[randomNum];
    arr.push(id);
    selectedCategory.categoryLabels.splice(randomNum, 1);
  }

  return arr;
};

/* export const wordPicker = (phrases) => {

    const wordPickerData = phrases.map(phrase => {
        const words = phrase.split(' ');

        const randomNum = Math.floor(Math.random() * words.length);
        return { randomWord: words[randomNum], phrase };
    })
    console.log(phrases[0].split(" ").length)

    return wordPickerData;
} */
export const wordPicker = (phrases) => {
  const data = phrases.map((phrase) => {
    const arr = phrase.text.split(' ');
    arr.sort((a, b) => a.length - b.length);

    return {
      pickedWord: arr[arr.length - 1],
      phrase: phrase.text,
      missingWordIndex: 0,
      soundId: phrase.soundId,
    };
  });

  data.forEach((item) => {
    let arr = item.phrase.split(' ');
    arr.forEach((word, index) => {
      arr[index] = word + ' ';
      if (word === item.pickedWord) {
        arr[index] = '_'.repeat(item.pickedWord.length);
        item.missingWordIndex = index;
      }
    });
    arr = arr.join('');
    item.phrase = arr;
  });

  return data;
};

const getRandomNumber = (range) => {
  return Math.floor(Math.random() * range);
};

export const setupSoundQuiz = (quizData) => {
  const words = [];

  for (let i = 0; i < 3; i++) {
    let randomNumber = getRandomNumber(quizData.length);

    words.push(quizData[randomNumber].pickedWord);
    quizData.splice(randomNumber, 1);
  }

  const answerId = getRandomNumber(3);

  return { answerId, words };
};

// SOROUSH SOROUSH SOROUSH SOROUSH SOROUSH SOROUSH SOROUSH SOROUSH SOROUSH

// export const fillTheBlank = (category) => {

//   const defaultCategory = useSelector(
//     (state) => state.DataReducer.Categories[spokenLanguage]
//   );

//   const selectedLanguage = useSelector(
//     (state) => state.LanguageReducer.selectedLanguage
//   );

//   const selectedLangPhrases = useSelector(
//     (state) => state.DataReducer.Phrases[selectedLanguage]
//   );

//   const defaultLangPhrases = useSelector(
//     (state) => state.DataReducer.Phrases['English']
//   );
//     let phraseId = 0;
//     let categoryId = 0;
//     let questionPhrase = '';
//     let answerPhrase = '';
//   const selectedCategory = defaultCategory.find(item => {
//     if (item.name === category) {
//       const newArr = item.categoryLabels
//       let randomNumber = Math.floor(Math.random() * newArr.length)
//       phraseId = newArr[randomNumber]
//     }
//     const selectedPhrase = selectedLangPhrases.find( item => {
//       if(item.id === phraseId ) {
//         answerPhrase = item.variants[0].text;
//       }
//     })
//     const defaultPhrase = defaultLangPhrases.find( item => {
//       if(item.id === phraseId) {
//         questionPhrase = item.variants[0].text;
//       }
//     })
//   });
//   const sentenceOne = answerPhrase.split(' ');
//   const sentenceTwo = answerPhrase.split(' ');
//   const lastWord = sentenceOne [sentenceOne.length -1];
//   sentenceOne.pop(lastWord);
//   sentenceTwo.pop(lastWord);
//   sentenceOne.unshift(lastWord);
//   sentenceTwo.splice(1, 0, ${lastWord});

//   return [ questionPhrase, sentenceOne.join(' '), sentenceTwo.join(' '), answerPhrase, phraseId ]
// }
