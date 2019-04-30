import Duck from './Duck';
import FlyWithWings from './implements/FlyNoWay';
import Quack from './implements/Quack';

export default class RedHeadDuck extends Duck {

  constructor() {
    super();
    this.flyBehaviour = new FlyWithWings();
    this.quackBehaviour = new Quack();
  }

  display = () => {
    return 'Red head';
  }
}