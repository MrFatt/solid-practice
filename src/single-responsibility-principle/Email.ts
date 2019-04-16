export default class Email {
  public email: string;
  constructor(email: string) {
    if (this.validateEmail(email)) {
      this.email = email;
    } else {
      throw new Error('Invalid email!');
    }
  }
  validateEmail(email: string) {
    var re = /\w+@\w+.\w+/;
    return re.test(email);
  }
}
