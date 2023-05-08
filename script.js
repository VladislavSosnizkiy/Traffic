const trafficLight = document.querySelector('.traffic-light');
const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');
const changeLightButton = document.querySelector('#change-light-button');

let currentLight = 'red';

changeLightButton.addEventListener('click', () => {
  switch (currentLight) {
    case 'red':
      redLight.style.boxShadow = 'none';
      greenLight.style.boxShadow = '0px 0px 30px #2ECC40';
      currentLight = 'green';
      break;
    case 'yellow':
      redLight.style.boxShadow = '0px 0px 30px #FF4136';
      yellowLight.style.boxShadow = 'none';
      currentLight = 'red';
      break;
    case 'green':
      yellowLight.style.boxShadow = '0px 0px 30px #FFDC00';
      greenLight.style.boxShadow = 'none';
      currentLight = 'yellow';
      break;
  }
});
