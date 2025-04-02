"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[731],{"./src/components/atomic/Input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithError:()=>WithError,WithIcon:()=>WithIcon,WithValue:()=>WithValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var _path,jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const search=function SvgSearch(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},props),_path||(_path=react.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M1.875 8.563a7.187 7.187 0 1 1 12.686 4.628l3.38 3.366a.625.625 0 0 1-.882.886l-3.383-3.369a7.187 7.187 0 0 1-11.8-5.512m7.187-5.938a5.937 5.937 0 1 0 0 11.875 5.937 5.937 0 0 0 0-11.875m-.625 2.188c0-.346.28-.625.625-.625a4.375 4.375 0 0 1 4.375 4.375.625.625 0 1 1-1.25 0c0-1.726-1.399-3.126-3.125-3.126a.625.625 0 0 1-.625-.625",clipRule:"evenodd"})))};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");let t,t1,t2,t3,t4,t5,t6,t7,t8,t9,_=t=>t;const InputWrapper=styled_components_browser_esm.ZP.div(t1||(t1=_`
  ${0}
`),(({theme,$isError})=>(0,styled_components_browser_esm.iv)(t||(t=_`
      width: 100%;
      background-color: ${0};
      padding: ${0} ${0};
      border-radius: ${0};
      border-width: 1px;
      border-style: solid;
      border-color: ${0};
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
    `),theme.colors.darkSecondary,theme.spacing.s_12,theme.spacing.s_18,theme.radius.rounded_small,$isError?theme.colors.red:theme.colors.grey))),Input=styled_components_browser_esm.ZP.input(t3||(t3=_`
  ${0}
`),(({theme})=>(0,styled_components_browser_esm.iv)(t2||(t2=_`
      font-size: ${0};
      font-weight: ${0};
      color: ${0};
      width: 100%;
    `),theme.fontSizes.body_M,theme.fontWeights.light,theme.colors.white))),Label=styled_components_browser_esm.ZP.label(t5||(t5=_`
  ${0}
`),(({theme})=>(0,styled_components_browser_esm.iv)(t4||(t4=_`
      font-size: ${0};
      font-weight: ${0};
      color: ${0};
      width: 100%;
      visibility: hidden;
      display: none;
    `),theme.fontSizes.body_M,theme.fontWeights.light,theme.colors.white))),Error=(styled_components_browser_esm.ZP.div(t7||(t7=_`
  ${0}
`),(({theme})=>(0,styled_components_browser_esm.iv)(t6||(t6=_`
      width: ${0};
      height: ${0};
      svg {
        path {
          fill: ${0};
        }
      }
    `),theme.spacing.s_16,theme.spacing.s_16,theme.colors.white))),styled_components_browser_esm.ZP.div(t9||(t9=_`
  ${0}
`),(({theme})=>(0,styled_components_browser_esm.iv)(t8||(t8=_`
      padding: ${0} ${0};
      font-size: ${0};
      font-weight: ${0};
      color: ${0};
      width: 100%;
    `),theme.spacing.s_8,theme.spacing.s_12,theme.fontSizes.tech,theme.fontWeights.medium,theme.colors.red))));function Input_Input({label,name,onChange,value,placeholder,icon,isError,error}){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(InputWrapper,{$isError:isError,children:[(0,jsx_runtime.jsx)(Label,{children:label}),(0,jsx_runtime.jsx)(Input,{name,value,placeholder,onChange}),icon]}),isError&&(0,jsx_runtime.jsx)(Error,{children:error})]})}const atomic_Input=Input_Input;Input_Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},isError:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"string"},description:""}}};var console=__webpack_require__("./node_modules/console-browserify/index.js");const Input_stories={title:"Atomic/Input",component:atomic_Input,parameters:{layout:"centered"},tags:["autodocs"]},Default={args:{name:"default",placeholder:"Введите текст",value:"",onChange:e=>console.log("Input value:",e.target.value)}},WithIcon={args:{name:"withIcon",placeholder:"Поиск...",value:"",icon:(0,jsx_runtime.jsx)(search,{}),onChange:e=>console.log("Input value:",e.target.value)}},WithValue={args:{name:"withValue",label:"Email",placeholder:"Введите email",value:"example@email.com",onChange:e=>console.log("Input value:",e.target.value)}},WithError={args:{name:"withError",label:"Пароль",placeholder:"Введите пароль",value:"123",isError:!0,error:"Пароль должен содержать минимум 8 символов",onChange:e=>console.log("Input value:",e.target.value)}},__namedExportsOrder=["Default","WithIcon","WithValue","WithError"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'default',\n    placeholder: 'Введите текст',\n    value: '',\n    onChange: e => console.log('Input value:', e.target.value)\n  }\n}",...Default.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'withIcon',\n    placeholder: 'Поиск...',\n    value: '',\n    icon: <SearchIcon />,\n    onChange: e => console.log('Input value:', e.target.value)\n  }\n}",...WithIcon.parameters?.docs?.source}}},WithValue.parameters={...WithValue.parameters,docs:{...WithValue.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'withValue',\n    label: 'Email',\n    placeholder: 'Введите email',\n    value: 'example@email.com',\n    onChange: e => console.log('Input value:', e.target.value)\n  }\n}",...WithValue.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'withError',\n    label: 'Пароль',\n    placeholder: 'Введите пароль',\n    value: '123',\n    isError: true,\n    error: 'Пароль должен содержать минимум 8 символов',\n    onChange: e => console.log('Input value:', e.target.value)\n  }\n}",...WithError.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-atomic-Input-Input-stories.d8ff5f00.iframe.bundle.js.map