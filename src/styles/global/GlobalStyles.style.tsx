import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Normalización de estilos */

/* Establecer márgenes y relleno en elementos */
html, body, div, h1, h2, h3, p, blockquote, pre,
a, abbr, code, em, img, small, strong, sub, sup,
b, i, dl, dt, dd, ol, ul, li, fieldset, form, label,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, figure, footer, header, hgroup, nav, section {
  margin: 0;
  padding: 0;
  border: 0;
}

/* Fuentes con un tamaño más uniforme en todos los navegadores */
body, button, input, select, textarea {
  font-family: sans-serif;
  font-size: 100%;
}

/* Retirar los estilos heredados para listas */
ol, ul {
  list-style: none;
}

/* Elementos en línea con display:inline */
a {
  text-decoration: none;
}

/* Elementos en línea con display:block */
abbr, acronym {
  border: 0;
}

/* Retirar decoración de hipervínculos */
a:hover {
  text-decoration: underline;
}

/* Cambios en la apariencia de algunos elementos en HTML5 */
article, aside, figure, footer, header, hgroup, nav, section {
  display: block;
}

/* Elementos de audio y video para mostrar como elementos en línea */
audio, video {
  display: inline;
}

/* Eliminar la marca predeterminada de audio sin controles */
audio:not([controls]) {
  display: none;
  height: 0;
}

/* Eliminar los controles de audio personalizados en iOS */
audio::-webkit-media-controls {
  display: none;
}

/* Ocultar elementos con el atributo 'hidden' */
[hidden] {
  display: none;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: blue;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

::-webkit-scrollbar-track {
  background: lightblue;
}
`;

export default GlobalStyles