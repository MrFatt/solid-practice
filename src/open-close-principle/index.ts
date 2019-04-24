import Circle from './Circle';
import Square from './Square';
import Calculator from './Calculator';

const circle = new Circle(2);
const square = new Square(2);

const shapes = [circle, square];

const calculator = new Calculator(shapes);
calculator.calculateAreas();
calculator.outputAreas();
