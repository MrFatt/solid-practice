import IPerson from './IPerson';

export default class Person implements IPerson {
  public name: string;
  public surname: string;
  public email: string;
  constructor(name: string, surname: string, email: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
  }

  greet() {
    console.log('Hi!');
  }
}
