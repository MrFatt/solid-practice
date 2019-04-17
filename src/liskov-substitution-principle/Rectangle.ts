export default class Rectangle {
  _height: number;
  _width: number;

  set height(newHeight: number){
    this._height = newHeight;
  }

  set width(newWidth: number){
    this._width = newWidth;
  }

  area() {
    return this._height * this._width;
  }
}
