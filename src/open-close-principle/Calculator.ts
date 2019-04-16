import Circle from './Circle';
import Square from './Square';

export default class Calculator<T> {
  public shapes: T[];
  constructor(shapes) {
    this.shapes = shapes;
  }

  calculateAreas() {
    return this.shapes.reduce((acc, cur) => {
      if (cur instanceof Square) {
        acc += Math.pow(cur.edge, 2);
      } else if (cur instanceof Circle) {
        acc += Math.PI * Math.pow(cur.radius, 2);
      }
      return acc;
    }, 0);
  }
}
