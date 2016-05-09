var html = '';
var rgbColor;

/****Función que devuelve un random number entre 0 y 256 para RGB****/
function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

/****Genera el código RGB a partir de la función randomRGB - Devuelve rgb(x,x,x) - ****/
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ','; // Red
  color += randomRGB() + ','; // Green
  color += randomRGB() + ')'; // Blue
  return color;
}

for ( var i = 1; i <= 100; i += 1 ){
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);
