import { CoffeeMachine, GroundCoffee } from './CoffeeMachine';

export default class BasicCoffeeMachine implements CoffeeMachine {
  groundCoffee: GroundCoffee;

  brewFilterCoffee = () => {
    return {type: 'filter coffee'}
  };
  
  addGroundCoffee = (newCoffee: GroundCoffee) =>{
    this.groundCoffee = newCoffee;
  }
}
