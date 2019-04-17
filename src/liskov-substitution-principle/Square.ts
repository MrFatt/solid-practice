import Rectangle from './Rectangle';

export default class Square extends Rectangle {
  set height(newHeight: number) {
    this._height = newHeight;
    this._width = newHeight;
  }
  set width(newWidth: number) {
    this._height = newWidth;
    this._width = newWidth;
  }
}
