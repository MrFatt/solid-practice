import Duck from './Duck';
import Quackable from './Quackable';
import Flyable from './Flyable';

export default class RedHeadDuck extends Duck implements Quackable, Flyable{
  display = () => {
    return 'Red head';
  }
  quack = () => {
    return 'quack';
  };
  fly = () => {
    return 'I can fly';
  };
}