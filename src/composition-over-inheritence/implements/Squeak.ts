import Quackable from "../interfaces/Quackable";

export default class Squeak implements Quackable {
  quack() {
    return 'Squeak!'
  }
}