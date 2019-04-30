import { CoffeeMachine, GroundCoffee } from './CoffeeMachine';

export default class BasicCoffeeMachine implements CoffeeMachine {
  groundCoffee: GroundCoffee;

  brewFilterCoffee = () => {
    throw new Error();
  };
  
  brewEspressoCoffee = () => {
    return {type: 'espresso coffee'}
  };
  
  addGroundCoffee = (newCoffee: GroundCoffee) =>{
    this.groundCoffee = newCoffee;
  }
}
