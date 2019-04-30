import Flyable from '../interfaces/Flyable';

export default class FlyNoWay implements Flyable {
  fly() {
    return 'I can fly';
  }
}
