import Rectangle from './Rectangle';
import Square from './Square';

const rectangle = new Rectangle();

rectangle.height = 3;
rectangle.width = 4;

console.log(rectangle.area());

const square = new Square();

square.height = 3;
square.width = 4;

console.log(rectangle.area());
