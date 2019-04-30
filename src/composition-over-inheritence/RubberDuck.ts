import Duck from './Duck';

export default class RubberDuck extends Duck {
  quack = () => {
    return 'Squeak';
  };
  display = () => {
    return 'rubber duck';
  };
}
