import Duck from './Duck';
import FlyNoWay from './implements/FlyWithWings';
import Squeak from './implements/Squeak';

export default class RubberDuck extends Duck {

  constructor() {
    super();
    this.flyBehaviour = new FlyNoWay();
    this.quackBehaviour = new Squeak();
  }

  display = () => {
    return 'rubber duck';
  };
}
