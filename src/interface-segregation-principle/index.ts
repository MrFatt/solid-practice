import RadioInterface from "./IRadio";

const radio: RadioInterface = {
  startRadio: () => {
    console.log('start radio')
  },
  stopRadio: () => {
    console.log('stop radio');
  },
  playCd: () => {
    console.log('playing radio');
  }
};

radio.startRadio();
radio.stopRadio();
