import IShape from './IShape';

export default class Square implements IShape {
  area(): number {
    return Math.pow(this.edge, 2);
  }
  constructor(public edge: number) {
    this.edge = edge;
  }
}
