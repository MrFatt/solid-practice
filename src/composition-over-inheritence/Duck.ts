export default class Duck {
  quack = () => {
    return 'quack';
  };
  swim: () => void;
  fly = () => {
    return 'I can fly';
  };
  display: () => string;
}
