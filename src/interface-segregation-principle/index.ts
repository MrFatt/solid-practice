import VehicleInterface from "./IVehicle";

const vehicle: VehicleInterface = {
  getSpeed: () => 0,
  getVehicleType: () => '',
  isTaxPayed: () => true,
  isLightsOn: () => true,
  isLightsOff: () => true,
  startEngine: () => {},
  accelerate: () => 0,
  stopEngine: () => {},
  startRadio: () => {
    console.log('start radio')
    console.log('playing radio')
  },
  stopRadio: () => {
    console.log('stop radio');
  },
  playCd: () => {
    console.log('playing');
  }
};

vehicle.startRadio();
vehicle.stopRadio();
