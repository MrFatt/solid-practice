import IShape from './IShape';

export default class Calculator {
  public shapes: IShape[];
  constructor(shapes) {
    this.shapes = shapes;
  }

  calculateAreas() {
    return this.shapes.reduce((acc, cur) => {
      acc += cur.area();
      return acc;
    }, 0);
  }
}
