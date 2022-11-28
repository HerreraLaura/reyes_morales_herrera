// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the animals
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

// Assigning the variables with values used in the story
const firstSueño = cleanAndCap(words.get('sueño'));
const secondNovios = cleanAndCap(words.get('novios'));

const pais = words.get('pais');
// The string containing HTML and text which will populate the story.html page

const story = `<p> Estamos en el año 2040, tú tienes 56 años y yo tengo 53 años. Nuestras 2 hijas preciosas están viviendo felices su vida ya de manera independiente. No nos han dado niet@s así que todavía no nos invitan a café más que una vez al mes cuando nos presentamos y nos enfadamos con ellas por no cogernos el teléfono…en fín, ley de vida…Como seguimos siendo unos jovenzuelos (con cuerpazo)y además llevamos un par de años retirados de la estresante vida de socio y de programadora junior, hemos decidido por fín cumplir uno de nuestros sueños: "<span class="word" title="id: sueño">${firstSueño}</span>".Y qué alegría! Eso sí que es un sueño cumplido, tantos años deseandolo y por fín se ha convertido en realidad. Y por si fuera poco, nos ha ido tan bien todo hemos decidido tirarnos a la piscina y ya hemos cogido los billetes para volar a <span class="word" title="id: pais">${pais}</span> y pasar allí los próximos 6 meses de nuestras vidas. Ya le hemos dicho a las niñas, que videoconferencias todos los días y que una vez al mes las invitamos a nuestro mini-paraíso pero que al <span class="word" title="id: novios">${ secondNovios}</span> los dejen en su casa.</p>`

// Grabbing the title element
const title = document.getElementById('title');

title.innerHTML = "La historia continúa"

// Grabbing the story element
const storyEl = document.getElementById('story');
// Populating the story element with the value of the story variable
storyEl.innerHTML = story;
