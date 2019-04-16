import Circle from './Circle';
import Square from './Square';
import Calculator from './Calculator';

const circle = new Circle(2);
const square = new Square(2);

const shapes = [circle, square];

console.log(new Calculator(shapes).calculateAreas());
