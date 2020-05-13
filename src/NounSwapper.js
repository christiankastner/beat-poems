export default class NounSwapper {
   constructor() {
   
   }
   replace(string, posArr) {
      let input = new RiString(string);
      const words = input.words();
      const speech = input.pos();
      const regexArr = posArr.map(pos => {
         return new RegExp(pos);
      });

      for (let i = 0; i < speech.length; i++) {
         for (let j = 0; j < regexArr.length; j++) {
            if (regexArr[j].test(speech[i])) {

               let newWord = this.generate(speech[i])

               if (NounSwapper.isTitleized(words[i])) {
                  newWord = NounSwapper.titleize(newWord);
               }

               input.replaceWord(i, newWord);
            }
         }
      }
      return input.text();
   }

   //Pos stands for part of speech generated by RiTa
   generate(pos) {
      if (pos === "nnp") {
         return NounSwapper.titleize(RiTa.randomWord("nn"))
      } else if (pos === 'nnps') {
         return NounSwapper.titleize(RiTa.randomWord("nns"))
      } else {
         return RiTa.randomWord(pos);
      }
      }

   static isTitleized(word) {
      return word[0] === word[0].toUpperCase();
   }

   static titleize(word) {
      return word[0].toUpperCase() + word.slice(1);
   }

   static isSingular(word) {
      return RiTa.singularize(word) === word;
   }
}
