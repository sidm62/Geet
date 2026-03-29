const targetElement = document.querySelector('#target');

const browserName = `Google Chrome`;

const browserVersion = 114;

const os = navigator.platform;

const screenW = screen.width;
const screenH = screen.height;

const aivailW = screen.availWidth;
const aivailH = screen.availHeight;

const date = new Date();

const day = {day: `numeric`, month: `numeric`, year: `numeric`};
const finday = date.toLocaleDateString(`fi-FI`, day);

const kello = {hour: 'numeric', minute: 'numeric', second: 'numeric'};
const clock = date.toLocaleTimeString(`fi-FI`, kello);

targetElement.innerHTML = `
  <p>Selain: ${browserName}, ${browserVersion}</p>
  <p>Käyttöjärjestelmä: ${os}</p>
  <p>Ruudun koko: ${screenW} x ${screenH}</p>
  <p>Käytettävissä oleva tila: ${aivailW} x ${aivailH}</p>
  <p>Päivämäärä: ${finday}</p>
  <p>Kellonaika: ${clock}</p>
`;
