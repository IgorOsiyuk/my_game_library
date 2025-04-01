"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[844],{"./src/components/atomic/TextArea/TextArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithError:()=>WithError,WithValue:()=>WithValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextArea_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Box=__webpack_require__("./src/components/atomic/Box/index.tsx");let t,t1,t2,t3,_=t=>t;const TextArea=styled_components_browser_esm.ZP.textarea(t1||(t1=_`
  ${0}
`),(({theme,$isError})=>(0,styled_components_browser_esm.iv)(t||(t=_`
      display: block;
      background-color: ${0};
      padding: ${0} ${0};
      padding-bottom: ${0};
      padding-right: ${0};
      border-radius: ${0};
      border-width: 1px;
      border-style: solid;
      border-color: ${0};
      font-size: ${0};
      font-weight: ${0};
      color: ${0};
      width: 100%;
      height: 100%;
    `),theme.colors.darkSecondary,theme.spacing.s_12,theme.spacing.s_18,theme.spacing.s_4,theme.spacing.s_4,theme.radius.rounded_small,$isError?theme.colors.red:theme.colors.grey,theme.fontSizes.body_M,theme.fontWeights.light,theme.colors.white))),Error=styled_components_browser_esm.ZP.div(t3||(t3=_`
  ${0}
`),(({theme})=>(0,styled_components_browser_esm.iv)(t2||(t2=_`
      padding: ${0} ${0};
      font-size: ${0};
      font-weight: ${0};
      color: ${0};
      width: 100%;
    `),theme.spacing.s_8,theme.spacing.s_12,theme.fontSizes.tech,theme.fontWeights.medium,theme.colors.red)));let TextArea_t,TextArea_=t=>t;function TextArea_TextArea({name,onChange,value,placeholder,isError,error}){return(0,jsx_runtime.jsxs)(Box.Z,{$sx:(0,styled_components_browser_esm.iv)(TextArea_t||(TextArea_t=TextArea_`
        width: 100%;
        height: 100%;
      `)),children:[(0,jsx_runtime.jsx)(TextArea,{$isError:isError,name,value,placeholder,onChange}),isError&&(0,jsx_runtime.jsx)(Error,{children:error})]})}const atomic_TextArea=TextArea_TextArea;TextArea_TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{name:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},isError:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"string"},description:""}}};var console=__webpack_require__("./node_modules/console-browserify/index.js");let TextArea_stories_t,TextArea_stories_=t=>t;const TextArea_stories={title:"Atomic/TextArea",component:atomic_TextArea,parameters:{layout:"centered"},tags:["autodocs"],decorators:[Story=>(0,jsx_runtime.jsx)(Box.Z,{$sx:(0,styled_components_browser_esm.iv)(TextArea_stories_t||(TextArea_stories_t=TextArea_stories_`
          height: 300px;
          width: 300px;
        `)),children:(0,jsx_runtime.jsx)(Story,{})})]},Default={args:{name:"default",placeholder:"Введите текст"}},WithValue={args:{name:"withValue",placeholder:"Описание",value:"Это пример текста в TextArea. Здесь может быть длинный текст, который занимает несколько строк.",onChange:e=>console.log("TextArea value:",e.target.value)}},WithError={args:{name:"withError",placeholder:"Комментарий",value:"",isError:!0,error:"Это поле обязательно для заполнения",onChange:e=>console.log("TextArea value:",e.target.value)}},__namedExportsOrder=["Default","WithValue","WithError"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'default',\n    placeholder: 'Введите текст'\n  }\n}",...Default.parameters?.docs?.source}}},WithValue.parameters={...WithValue.parameters,docs:{...WithValue.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'withValue',\n    placeholder: 'Описание',\n    value: 'Это пример текста в TextArea. Здесь может быть длинный текст, который занимает несколько строк.',\n    onChange: e => console.log('TextArea value:', e.target.value)\n  }\n}",...WithValue.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'withError',\n    placeholder: 'Комментарий',\n    value: '',\n    isError: true,\n    error: 'Это поле обязательно для заполнения',\n    onChange: e => console.log('TextArea value:', e.target.value)\n  }\n}",...WithError.parameters?.docs?.source}}}},"./src/components/atomic/Box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let t;const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(t||(t=(t=>t)`
  width: ${0};
  height: ${0};
  background-color: ${0};

  padding: ${0};
  padding-left: ${0};
  padding-right: ${0};
  padding-top: ${0};
  padding-bottom: ${0};

  margin: ${0};
  border-radius: ${0};
  ${0};
`),(({$width})=>$width),(({$height})=>$height),(({theme,$backgroundColor})=>$backgroundColor?theme.colors[$backgroundColor]:"transparent"),(({theme,$padding,$px,$py})=>$padding?theme.spacing[$padding]:`${$py?theme.spacing[$py]:"0"} ${$px?theme.spacing[$px]:"0"}`),(({theme,$pl})=>$pl&&theme.spacing[$pl]),(({theme,$pr})=>$pr&&theme.spacing[$pr]),(({theme,$pt})=>$pt&&theme.spacing[$pt]),(({theme,$pb})=>$pb&&theme.spacing[$pb]),(({theme,$margin})=>$margin&&theme.spacing[$margin]),(({theme,$radius})=>$radius&&theme.radius[$radius]),(({$sx})=>$sx&&$sx))}}]);
//# sourceMappingURL=components-atomic-TextArea-TextArea-stories.a94fe498.iframe.bundle.js.map