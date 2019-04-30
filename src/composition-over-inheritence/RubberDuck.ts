import Duck from './Duck';
import Quackable from './Quackable';

export default class RubberDuck extends Duck implements Quackable {
  quack = () => {
    return 'Squeak';
  };
  display = () => {
    return 'rubber duck';
  };
}
