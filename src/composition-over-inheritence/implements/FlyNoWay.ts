import Flyable from '../interfaces/Flyable';

export default class FlyWithWings implements Flyable {
  fly() {
    return 'I can not fly';
  }
}
