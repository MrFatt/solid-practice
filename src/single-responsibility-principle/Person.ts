import IPerson from './IPerson';
import Email from './Email';
export default class Person implements IPerson {
  public name: string;
  public surname: string;
  public email: Email;
  constructor(name: string, surname: string, email: Email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
  }

  greet() {
    console.log('Hi!');
  }
}
