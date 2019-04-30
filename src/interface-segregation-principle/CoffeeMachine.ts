export type CoffeeDrink = {type: string}
export type GroundCoffee = {}

export interface CoffeeMachine {
  brewFilterCoffee: () => CoffeeDrink;
  addGroundCoffee: (newCoffee: GroundCoffee) => void
}
