import Duck from './Duck';
import Quackable from './Quackable';
import Flyable from './Flyable';

export default class MallardDuck extends Duck implements Quackable, Flyable {
  quack = () => {
    return 'quack';
  };
  fly = () => {
    return 'I can fly';
  };
  display = () => {
    return 'green head';
  };
}
