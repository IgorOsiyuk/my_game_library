"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[464],{"./src/components/atomic/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Button=__webpack_require__("./src/components/atomic/Button/index.tsx"),Text=__webpack_require__("./src/components/atomic/Text/index.tsx"),icons_close=__webpack_require__("./public/icons/close.svg"),SvgImage=__webpack_require__("./src/components/atomic/SvgImage/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");let t,t1,t2,t3,t4,t5,_=t=>t;const modalFadeIn=(0,styled_components_browser_esm.iv)(t||(t=_`
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`)),ModalOverlay=styled_components_browser_esm.zo.div(t1||(t1=_`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${0};
  padding: 0 ${0};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`),(({$isOpen})=>$isOpen?"flex":"none"),(({theme})=>theme.spacing.s_188)),ModalContent=styled_components_browser_esm.zo.div(t2||(t2=_`
  display: flex;
  flex-direction: column;
  gap: ${0};
  background-color: ${0};
  border-radius: ${0};
  padding: ${0};
  width: 100%;
  /* min-width: 400px; */
  /* max-width: 90vw; */
  /* max-height: 90vh; */
  overflow-y: auto;
  animation: ${0} 0.3s ease-out;
`),(({theme})=>theme.spacing.s_32),(({theme})=>theme.colors.darkSecondary),(({theme})=>theme.radius.rounded_large),(({theme})=>theme.spacing.s_32),modalFadeIn),ModalHeader=styled_components_browser_esm.zo.div(t3||(t3=_`
  position: relative;
`)),ModalBody=styled_components_browser_esm.zo.div(t4||(t4=_`
  /* padding: ${0}; */
`),(({theme})=>theme.spacing.s_16)),CloseButton=styled_components_browser_esm.zo.div(t5||(t5=_`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transition: background-color 0.2s;
  border-radius: ${0};

  &:hover {
    background-color: ${0};
  }
`),(({theme})=>theme.radius.rounded_xsmall),(({theme})=>theme.colors.grey)),Modal=({isOpen,onClose,children,className})=>((0,react.useEffect)((()=>{const handleEscape=event=>{"Escape"===event.key&&onClose()};return isOpen&&(document.addEventListener("keydown",handleEscape),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",handleEscape),document.body.style.overflow="unset"}}),[isOpen,onClose]),isOpen?(0,jsx_runtime.jsx)(ModalOverlay,{$isOpen:isOpen,onClick:onClose,children:(0,jsx_runtime.jsxs)(ModalContent,{className,onClick:e=>e.stopPropagation(),children:[(0,jsx_runtime.jsx)(ModalHeader,{children:(0,jsx_runtime.jsx)(CloseButton,{onClick:onClose,children:(0,jsx_runtime.jsx)(SvgImage.Z,{$height:"24px",$width:"24px",$fill:"white",children:(0,jsx_runtime.jsx)(icons_close.Z,{})})})}),(0,jsx_runtime.jsx)(ModalBody,{children})]})}):null);Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Modal_stories={title:"Atomic/Modal",component:Modal,parameters:{layout:"centered"},tags:["autodocs"]},ModalExample=()=>{const[isOpen,setIsOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>setIsOpen(!0),children:"Открыть модальное окно"}),(0,jsx_runtime.jsx)(Modal,{isOpen,onClose:()=>setIsOpen(!1),children:(0,jsx_runtime.jsx)(Text.Z,{color:"white",size:"body_M",children:"Это пример содержимого модального окна. Здесь может быть любой контент."})})]})},Default={args:{isOpen:!0,onClose:()=>{},children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})},render:()=>(0,jsx_runtime.jsx)(ModalExample,{})},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    onClose: () => {},\n    children: <></>\n  },\n  render: () => <ModalExample />\n}",...Default.parameters?.docs?.source}}}},"./src/components/atomic/SvgImage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let t;const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(t||(t=(t=>t)`
  display: flex;
  align-items: center;
  svg {
    width: ${0};
    height: ${0};
    path {
      fill: ${0};
    }
  }
`),(({$width})=>$width),(({$height})=>$height),(({theme,$fill})=>$fill?theme.colors[$fill]:theme.colors.white))},"./src/components/atomic/Text/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>atomic_Text});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");let t,t1,_=t=>t;const Text=styled_components_browser_esm.ZP.span(t1||(t1=_`
  ${0}
`),(({theme,$color,$size,$weight})=>(0,styled_components_browser_esm.iv)(t||(t=_`
      font-size: ${0};
      color: ${0};
      font-weight: ${0};
    `),theme.fontSizes[$size],theme.colors[$color],theme.fontWeights[$weight]))),Text_Text=({color="black",size="body_S",fontWeight="regular",children})=>(0,jsx_runtime.jsx)(Text,{$color:color,$size:size,$weight:fontWeight,children}),atomic_Text=Text_Text;Text_Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  black: string;\n  white: string;\n  dark: string;\n  darkSecondary: string;\n  grey: string;\n  greySecondary: string;\n  accent: string;\n  accentSecondary: string;\n  accent2: string;\n  blue: string;\n  blueSecondary: string;\n  red: string;\n  redSecondary: string;\n  yellow: string;\n  yellowSecondary: string;\n  green: string;\n  greenSecondary: string;\n}",signature:{properties:[{key:"black",value:{name:"string",required:!0}},{key:"white",value:{name:"string",required:!0}},{key:"dark",value:{name:"string",required:!0}},{key:"darkSecondary",value:{name:"string",required:!0}},{key:"grey",value:{name:"string",required:!0}},{key:"greySecondary",value:{name:"string",required:!0}},{key:"accent",value:{name:"string",required:!0}},{key:"accentSecondary",value:{name:"string",required:!0}},{key:"accent2",value:{name:"string",required:!0}},{key:"blue",value:{name:"string",required:!0}},{key:"blueSecondary",value:{name:"string",required:!0}},{key:"red",value:{name:"string",required:!0}},{key:"redSecondary",value:{name:"string",required:!0}},{key:"yellow",value:{name:"string",required:!0}},{key:"yellowSecondary",value:{name:"string",required:!0}},{key:"green",value:{name:"string",required:!0}},{key:"greenSecondary",value:{name:"string",required:!0}}]}},description:"",defaultValue:{value:"'black'",computed:!1}},size:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  title_L: string;\n  title_M: string;\n  big_numbers: string;\n  small_titles: string;\n  button: string;\n  body_M: string;\n  body_S: string;\n  body_XS: string;\n  tech: string;\n}",signature:{properties:[{key:"title_L",value:{name:"string",required:!0}},{key:"title_M",value:{name:"string",required:!0}},{key:"big_numbers",value:{name:"string",required:!0}},{key:"small_titles",value:{name:"string",required:!0}},{key:"button",value:{name:"string",required:!0}},{key:"body_M",value:{name:"string",required:!0}},{key:"body_S",value:{name:"string",required:!0}},{key:"body_XS",value:{name:"string",required:!0}},{key:"tech",value:{name:"string",required:!0}}]}},description:"",defaultValue:{value:"'body_S'",computed:!1}},fontWeight:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  light: number;\n  regular: number;\n  medium: number;\n  semiBold: number;\n  bold: number;\n}",signature:{properties:[{key:"light",value:{name:"number",required:!0}},{key:"regular",value:{name:"number",required:!0}},{key:"medium",value:{name:"number",required:!0}},{key:"semiBold",value:{name:"number",required:!0}},{key:"bold",value:{name:"number",required:!0}}]}},description:"",defaultValue:{value:"'regular'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"./public/icons/close.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function SvgClose(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M3.558 3.558a.625.625 0 0 1 .884 0L10 9.116l5.558-5.558a.625.625 0 1 1 .884.884L10.884 10l5.558 5.558a.625.625 0 1 1-.884.884L10 10.884l-5.558 5.558a.625.625 0 1 1-.884-.884L9.116 10 3.558 4.442a.625.625 0 0 1 0-.884",clipRule:"evenodd"})))}}}]);
//# sourceMappingURL=components-atomic-Modal-Modal-stories.f0226597.iframe.bundle.js.map