import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

button,
textarea {
  font: inherit;
  color: inherit;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  background: none;
  border: none;
  outline: none;
  box-shadow: none;

  padding: 0;
  margin: 0;

  font: inherit;
  color: inherit;

  box-sizing: border-box;
}

input {
  background: none;
  border: none;
  outline: none;
  box-shadow: none;

  font: inherit;
  color: inherit;

  padding: 0;
  margin: 0;

  box-sizing: border-box;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
}

ul,
ol {
  list-style: none;
}
`;
