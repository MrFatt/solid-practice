import Person from './Person';
import Email from './Email';

const person: Person = new Person('Will', 'Smith', new Email('will@smith.com'));

person.greet();
