import IPerson from './IPerson';

export default class Person implements IPerson {
  public name: string;
  public surname: string;
  public email: string;
  constructor(name: string, surname: string, email: string) {
    this.name = name;
    this.surname = surname;
    if (this.validateEmail(email)) {
      this.email = email;
    } else {
      throw new Error('Invalid email!');
    }
  }

  validateEmail(email) {
    var re = /\w+@\w+.\w+/;
    return re.test(email);
  }

  greet() {
    console.log('Hi!');
  }
}
