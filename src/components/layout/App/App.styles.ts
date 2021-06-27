import { css } from '@emotion/react'

const styles = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  html {
    font-size: 14px;

    --fs-primary: 1rem;
    --fs-accent: 1.1rem;
    --fs-h1: 3rem;
    --fs-h2: 1.65rem;
    --fs-h3: 1.25rem;

    --space-primary: 1.5rem;
    --space-secondary: 1.15rem;

    --color-primary: 64, 64, 64;
    --color-secondary: 118, 118, 118;
    --color-accent: 63, 81, 181;
    --color-accent-light: 208, 214, 231;
    --color-bg0: 230, 230, 230;
    --color-bg1: 118, 118, 118;
    --color-bg2: 245, 245, 245;
    --color-bg3: 255, 255, 255;
    --color-border: 190, 190, 190;
    --color-border-light: 235, 235, 235;
    --color-error: 198, 40, 40;
    --color-error-light: 246, 213, 213;

    --rgb-primary: rgb(var(--color-primary));
    --rgb-secondary: rgb(var(--color-secondary));
    --rgb-accent: rgb(var(--color-accent));
    --rgb-accent-light: rgba(var(--color-accent-light));
    --rgb-bg0: rgb(var(--color-bg0));
    --rgb-bg1: rgb(var(--color-bg1));
    --rgb-bg2: rgb(var(--color-bg2));
    --rgb-bg3: rgb(var(--color-bg3));
    --rgb-border: rgb(var(--color-border));
    --rgb-border-light: rgb(var(--color-border-light));
  }

  @media (prefers-color-scheme: dark) {
    html {
      --color-primary: 224, 224, 224;
      --color-secondary: 64, 64, 64;
      --color-accent: 92, 107, 192;
      --color-accent-light: 39, 43, 59;
      --color-bg0: 17, 17, 17;
      --color-bg1: 176, 176, 177;
      --color-bg2: 26, 26, 26;
      --color-bg3: 33, 33, 33;
      --color-border: 12, 12, 12;
      --color-border-light: 20, 20, 20;
    }
  }

  body,
  html {
    height: 100%;
  }

  body {
    background: var(--rgb-bg0);
    color: var(--rgb-primary);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :focus {
    outline: 0;
  }

  #root {
    min-height: 100%;
  }

  input:-webkit-autofill {
    animation-name: autofill;
    animation-fill-mode: both;
  }

  @keyframes autofill {
    to {
      color: inherit;
      background: var(--rgb-bg2);
    }
  }
`

export default styles
