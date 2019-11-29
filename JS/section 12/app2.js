/* eslint-disable no-unused-vars */
console.log(1234);

const annoyer = {
  phrases: [
    'literally',
    'cray cray',
    'I can"t even',
    'Tote"s',
    'YOLO',
    'Can"t stop, Won"t stop'
  ],
  pickPhrase() {
    const { phrases } = this;
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  },
  start() {
    setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000);
  }
};
