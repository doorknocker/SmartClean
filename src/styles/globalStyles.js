import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html, 
body {
    height: 100%;
}
* {
  font-family: 'Lato', sans-serif;
}
body {
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--textNormal);
  font-size: 10px;

  --textNormal: rgba(0, 0, 0, 0.7);
  --textTitle: #262625;
  --link: #542c85;
  --bgBrand: #262625;
  --primary: #357114;
  --secondary: #688B9A;
  --lightPrimary: #e8f5f7;
  --alert: #e47870;
  --lightAlert: #ffe0de;
  --black: #000 ;
  a{
    text-decoration: none ;
  }
  h1,
  h2,
  h3,
  h4 {
    color: var(--textTitle);
  }
  input,
  button,
  a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  a {
  color: var(--link);
  }
  input:focus,
  button:focus,
  a:focus {
      outline: none;
  }
  img {
    padding: 0;
    margin: 0;
    user-select: none;
  }
  #root {
      height: 100%;
  }
}`;
