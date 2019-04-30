import { CoffeeMachine, GroundCoffee } from './CoffeeMachine';

export default class BasicCoffeeMachine implements CoffeeMachine {
  groundCoffee: GroundCoffee;

  brewFilterCoffee = () => {
    return {type: 'filter coffee'}
  };
  

  brewEspressoCoffee = () => {
    throw new Error();
  };
  
  addGroundCoffee = (newCoffee: GroundCoffee) =>{
    this.groundCoffee = newCoffee;
  }
}