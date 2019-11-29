/* eslint-disable no-unused-vars */
console.log(123);

const auth = {
  username: 'Bozo Beak',
  login() {
    console.log('Logged You In Bozo');
  },
  logout() {
    console.log(`You logged out ${this.username}`);
  }
};

function sayHi() {
  console.log('Hi');
  console.log(this);
}

const person = {
  first: 'Brian',
  last: 'Beak',
  nickname: 'Bozo',
  fullname() {
    const { first, last, nickname } = this;
    console.log(`${first} ${last} AKA - ${nickname}`);
  },
  printBio() {
    this.fullname();
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickname}`);
  }
};
