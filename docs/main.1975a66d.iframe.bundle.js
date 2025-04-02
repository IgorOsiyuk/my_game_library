(self.webpackChunkweb=self.webpackChunkweb||[]).push([[179],{"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var dist=__webpack_require__("./node_modules/@storybook/addon-themes/dist/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");let t;const styles_GlobalStyles=(0,styled_components_browser_esm.vJ)(t||(t=(t=>t)`
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
  menu,
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
  main,
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
    box-shadow: none;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  menu,
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    /* scrollbar-gutter: stable; */
  }

  html,
  body,
  * {
    padding: 0;
    margin: 0;
  }

  body {
    -webkit-overflow-scrolling: touch;
    font-family: ${0};
    background-color: ${0};
    color: ${0};
    min-height: 100vh;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
  }

  img {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  svg {
    vertical-align: top;
  }

  @supports (font: -apple-system-body) and (-webkit-appearance: none) {
    img[loading='lazy'] {
      clip-path: inset(0px);
    }
  }

  button,
  input,
  optgroup,
  select,
  textarea,
  input:focus, 
  input:focus-visible, 
  input:active {
    border: none;
    font-family: inherit;
    background: none;
    outline: none;
  }
`),(props=>props.theme.fonts.main),(props=>props.theme.colors.black),(props=>props.theme.colors.white));var theme=__webpack_require__("./src/styles/theme.ts");const _storybook_preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{default:"light",values:[{name:"light",value:"#FFFFFF"}]}},decorators:[(0,dist.RX)({Provider:styled_components_browser_esm.f6,GlobalStyles:styles_GlobalStyles,themes:{light:theme.r}})]}},"./src/styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={black:"#000000",white:"#FFFFFF",dark:"#141316",darkSecondary:"#262529",grey:"#3E3C42",greySecondary:"#A8A8A9",accent:"#4F46E5",accentSecondary:"#6A61FD",accent2:"#FFE786",blue:"#1D4ED8",blueSecondary:"#DBEAFE",red:"#B91C1C",redSecondary:"#FEE2E2",yellow:"#A16207",yellowSecondary:"#FEF9C3",green:"#15803D",greenSecondary:"#DCFCE7"}},"./src/styles/fontSizes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title_L:"56px",title_M:"48px",big_numbers:"32px",small_titles:"30px",button:"20px",body_M:"16px",body_S:"14px",body_XS:"12px",tech:"10px"}},"./src/styles/radius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={rounded_large:"24px",rounded_medium:"12px",rounded_small:"8px",rounded_circle:"50%",rounded_xsmall:"4px"}},"./src/styles/spacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={s_0:"0px",s_2:"2px",s_4:"4px",s_6:"6px",s_8:"8px",s_12:"12px",s_14:"14px",s_16:"16px",s_18:"18px",s_20:"20px",s_24:"24px",s_32:"32px",s_36:"36px",s_40:"40px",s_44:"44px",s_48:"48px",s_56:"56px"}},"./src/styles/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>theme});var target_path_apps_web_src_styles_theme_ts_import_Inter_arguments_weight_300_400_500_600_700_subsets_latin_cyrillic_variableName_inter_=__webpack_require__('./node_modules/next/font/google/target.css?{"path":"apps\\\\web\\\\src\\\\styles\\\\theme.ts","import":"Inter","arguments":[{"weight":["300","400","500","600","700"],"subsets":["latin","cyrillic"]}],"variableName":"inter"}'),target_path_apps_web_src_styles_theme_ts_import_Inter_arguments_weight_300_400_500_600_700_subsets_latin_cyrillic_variableName_inter_default=__webpack_require__.n(target_path_apps_web_src_styles_theme_ts_import_Inter_arguments_weight_300_400_500_600_700_subsets_latin_cyrillic_variableName_inter_),colors=__webpack_require__("./src/styles/colors.ts"),fontSizes=__webpack_require__("./src/styles/fontSizes.ts");const fontWeight={light:300,regular:400,medium:500,semiBold:600,bold:700};var radius=__webpack_require__("./src/styles/radius.ts"),spacing=__webpack_require__("./src/styles/spacing.ts");const theme={fonts:{main:target_path_apps_web_src_styles_theme_ts_import_Inter_arguments_weight_300_400_500_600_700_subsets_latin_cyrillic_variableName_inter_default().style.fontFamily},fontSizes:fontSizes.Z,fontWeights:fontWeight,colors:colors.Z,spacing:spacing.Z,radius:radius.Z}},"./node_modules/@storybook/nextjs/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/nextjs/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("storybook/internal/channels"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global");const importers=[async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/nextjs/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-themes/dist/preview.mjs"),__webpack_require__("./.storybook/preview.ts")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/Colors.mdx":["./src/stories/Colors.mdx",47,101],"./stories/Radius.mdx":["./src/stories/Radius.mdx",47,425],"./stories/Spacing.mdx":["./src/stories/Spacing.mdx",47,464],"./stories/Typography.mdx":["./src/stories/Typography.mdx",47,489]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/atomic/Button/Button.stories":["./src/components/atomic/Button/Button.stories.ts",401],"./components/atomic/Button/Button.stories.ts":["./src/components/atomic/Button/Button.stories.ts",401],"./components/atomic/Checkbox/Checkbox.stories":["./src/components/atomic/Checkbox/Checkbox.stories.tsx",642],"./components/atomic/Checkbox/Checkbox.stories.tsx":["./src/components/atomic/Checkbox/Checkbox.stories.tsx",642],"./components/atomic/Input/Input.stories":["./src/components/atomic/Input/Input.stories.tsx",731],"./components/atomic/Input/Input.stories.tsx":["./src/components/atomic/Input/Input.stories.tsx",731],"./components/atomic/Select/Select.stories":["./src/components/atomic/Select/Select.stories.tsx",989,438],"./components/atomic/Select/Select.stories.tsx":["./src/components/atomic/Select/Select.stories.tsx",989,438],"./components/atomic/TextArea/TextArea.stories":["./src/components/atomic/TextArea/TextArea.stories.tsx",844],"./components/atomic/TextArea/TextArea.stories.tsx":["./src/components/atomic/TextArea/TextArea.stories.tsx",844],"./components/ui/StatusLabel/StatusLabel.stories":["./src/components/ui/StatusLabel/StatusLabel.stories.ts",409],"./components/ui/StatusLabel/StatusLabel.stories.ts":["./src/components/ui/StatusLabel/StatusLabel.stories.ts",409]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"storybook/internal/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"storybook/internal/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"storybook/internal/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"storybook/internal/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"storybook/internal/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__},"?c969":()=>{},"?3e83":()=>{},"?19e6":()=>{}},__webpack_require__=>{__webpack_require__.O(0,[557],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);
//# sourceMappingURL=main.1975a66d.iframe.bundle.js.map