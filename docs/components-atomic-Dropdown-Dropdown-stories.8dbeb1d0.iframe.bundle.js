"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[48],{"./src/components/atomic/Dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dropdown_stories});var _path,jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Text=__webpack_require__("./src/components/atomic/Text/index.tsx"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const arrow=function SvgArrow(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},props),_path||(_path=react.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M3.558 7.183a.625.625 0 0 1 .884 0L10 11.625l5.558-4.442a.625.625 0 1 1 .884.884L10 13.393 3.558 8.067a.625.625 0 0 1 0-.884",clipRule:"evenodd"})))};var SvgImage=__webpack_require__("./src/components/atomic/SvgImage/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");let t,t1,t2,t3,t4,_=t=>t;const DropdownTitle=styled_components_browser_esm.zo.div(t||(t=_`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${0};
  padding: ${0} ${0};
  cursor: pointer;
  border-radius: ${0};
  background-color: ${0};

  border: 1px solid ${0};
  transition: background-color 0.2s;
  div {
    transition: transform 0.2s;
  }
`),(({theme})=>theme.spacing.s_20),(({theme})=>theme.spacing.s_12),(({theme})=>theme.spacing.s_18),(({theme})=>theme.radius.rounded_small),(({theme})=>theme.colors.darkSecondary),(({theme})=>theme.colors.grey)),DropdownContent=styled_components_browser_esm.zo.div(t1||(t1=_`
  /* margin-top: ${0}; */
  background-color: ${0};
  border: 1px solid ${0};
  border-radius: ${0};
  padding: ${0};
`),(({theme})=>theme.spacing.s_4),(({theme})=>theme.colors.darkSecondary),(({theme})=>theme.colors.grey),(({theme})=>theme.radius.rounded_small),(({theme})=>theme.spacing.s_4)),DropdownContentWrapper=styled_components_browser_esm.zo.div(t2||(t2=_`
  padding-top: ${0};
  max-height: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: -1;
  overflow: hidden;
`),(({theme})=>theme.spacing.s_4)),DropdownContainer=styled_components_browser_esm.zo.div(t3||(t3=_`
  position: relative;
  display: inline-block;
  &:hover {
    ${0} {
      background-color: ${0};
      ${0} {
        transform: rotate(180deg);
      }
    }
    ${0} {
      max-height: 800px;
      z-index: 1;
      transition: max-height 0.75s ease-in-out;
    }
  }
`),DropdownTitle,(({theme})=>theme.colors.grey),SvgImage.Z,DropdownContentWrapper),DropdownItem=styled_components_browser_esm.zo.div(t4||(t4=_`
  padding: ${0} ${0};
  cursor: pointer;
  border-radius: ${0};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${0};
  }
`),(({theme})=>theme.spacing.s_6),(({theme})=>theme.spacing.s_8),(({theme})=>theme.radius.rounded_small),(({theme})=>theme.colors.grey)),Dropdown=({title,options})=>(0,jsx_runtime.jsxs)(DropdownContainer,{children:[(0,jsx_runtime.jsxs)(DropdownTitle,{children:[(0,jsx_runtime.jsx)(Text.Z,{color:"white",size:"body_M",children:title}),(0,jsx_runtime.jsx)(SvgImage.Z,{$width:"16px",$height:"16px",children:(0,jsx_runtime.jsx)(arrow,{})})]}),(0,jsx_runtime.jsx)(DropdownContentWrapper,{children:(0,jsx_runtime.jsx)(DropdownContent,{children:options.map(((option,index)=>(0,jsx_runtime.jsx)(DropdownItem,{children:option},`${index}-dropdown-item`)))})})]});Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{title:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""}}};const Dropdown_stories={title:"Atomic/Dropdown",component:Dropdown,parameters:{layout:"centered"},tags:["autodocs"]},Default={args:{title:"Меню",options:[(0,jsx_runtime.jsx)(Text.Z,{color:"white",size:"body_M",children:"Профиль"},"profile"),(0,jsx_runtime.jsx)(Text.Z,{color:"white",size:"body_M",children:"Настройки"},"settings"),(0,jsx_runtime.jsx)(Text.Z,{color:"white",size:"body_M",children:"Выйти"},"logout")]}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Меню',\n    options: dropdownOptions\n  }\n}",...Default.parameters?.docs?.source}}}},"./src/components/atomic/SvgImage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let t;const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(t||(t=(t=>t)`
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
    `),theme.fontSizes[$size],theme.colors[$color],theme.fontWeights[$weight]))),Text_Text=({color="black",size="body_S",fontWeight="regular",children})=>(0,jsx_runtime.jsx)(Text,{$color:color,$size:size,$weight:fontWeight,children}),atomic_Text=Text_Text;Text_Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  black: string;\n  white: string;\n  dark: string;\n  darkSecondary: string;\n  grey: string;\n  greySecondary: string;\n  accent: string;\n  accentSecondary: string;\n  accent2: string;\n  blue: string;\n  blueSecondary: string;\n  red: string;\n  redSecondary: string;\n  yellow: string;\n  yellowSecondary: string;\n  green: string;\n  greenSecondary: string;\n}",signature:{properties:[{key:"black",value:{name:"string",required:!0}},{key:"white",value:{name:"string",required:!0}},{key:"dark",value:{name:"string",required:!0}},{key:"darkSecondary",value:{name:"string",required:!0}},{key:"grey",value:{name:"string",required:!0}},{key:"greySecondary",value:{name:"string",required:!0}},{key:"accent",value:{name:"string",required:!0}},{key:"accentSecondary",value:{name:"string",required:!0}},{key:"accent2",value:{name:"string",required:!0}},{key:"blue",value:{name:"string",required:!0}},{key:"blueSecondary",value:{name:"string",required:!0}},{key:"red",value:{name:"string",required:!0}},{key:"redSecondary",value:{name:"string",required:!0}},{key:"yellow",value:{name:"string",required:!0}},{key:"yellowSecondary",value:{name:"string",required:!0}},{key:"green",value:{name:"string",required:!0}},{key:"greenSecondary",value:{name:"string",required:!0}}]}},description:"",defaultValue:{value:"'black'",computed:!1}},size:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  title_L: string;\n  title_M: string;\n  big_numbers: string;\n  small_titles: string;\n  button: string;\n  body_M: string;\n  body_S: string;\n  body_XS: string;\n  tech: string;\n}",signature:{properties:[{key:"title_L",value:{name:"string",required:!0}},{key:"title_M",value:{name:"string",required:!0}},{key:"big_numbers",value:{name:"string",required:!0}},{key:"small_titles",value:{name:"string",required:!0}},{key:"button",value:{name:"string",required:!0}},{key:"body_M",value:{name:"string",required:!0}},{key:"body_S",value:{name:"string",required:!0}},{key:"body_XS",value:{name:"string",required:!0}},{key:"tech",value:{name:"string",required:!0}}]}},description:"",defaultValue:{value:"'body_S'",computed:!1}},fontWeight:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  light: number;\n  regular: number;\n  medium: number;\n  semiBold: number;\n  bold: number;\n}",signature:{properties:[{key:"light",value:{name:"number",required:!0}},{key:"regular",value:{name:"number",required:!0}},{key:"medium",value:{name:"number",required:!0}},{key:"semiBold",value:{name:"number",required:!0}},{key:"bold",value:{name:"number",required:!0}}]}},description:"",defaultValue:{value:"'regular'",computed:!1}},children:{required:!0,tsType:{name:"string"},description:""}}}}}]);
//# sourceMappingURL=components-atomic-Dropdown-Dropdown-stories.8dbeb1d0.iframe.bundle.js.map