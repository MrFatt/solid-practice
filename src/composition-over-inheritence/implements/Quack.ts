import Quackable from "../interfaces/Quackable";

export default class Quack implements Quackable {
  quack() {
    return 'Quack!'
  }
}