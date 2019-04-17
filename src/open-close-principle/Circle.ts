import IShape from './IShape';

export default class Circle implements IShape {
  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
  constructor(public radius: number) {
    this.radius = radius;
  }
}
