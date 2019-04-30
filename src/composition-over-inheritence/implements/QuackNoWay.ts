import Quackable from "../interfaces/Quackable";

export default class QuackNoWay implements Quackable {
  quack() {
    return 'silence'
  }
}