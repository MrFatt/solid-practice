import Quackable from './interfaces/Quackable';
import Flyable from './interfaces/Flyable';

export default class Duck {
  quackBehaviour: Quackable;
  flyBehaviour: Flyable;

  swim: () => void;
  display: () => string;
  
  performQuack = () => {
    this.quackBehaviour.quack();
  };
  fly = () => {
    this.flyBehaviour.fly();
  };
}
