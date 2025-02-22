"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[845],{"./src/components/StatusLabel/StatusLabel.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StatusLabel:()=>StatusLabel_stories_StatusLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>StatusLabel_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");let t,t1,t2,t3,t4,_=t=>t;const StatusBox=styled_components_browser_esm.ZP.div(t4||(t4=_`
  padding: ${0};
  border-radius: ${0};
  font-size: ${0};
  ${0}
`),(({theme})=>theme.spacing.s_8),(({theme})=>theme.radius.rounded_small),(({theme})=>theme.fontSizes.body_S),(({variant,theme})=>{switch(variant){case StatusEnum.SUCCESS:return(0,styled_components_browser_esm.iv)(t||(t=_`
          background-color: ${0};
          color: ${0};
        `),theme.colors.green.light,theme.colors.green.dark);case StatusEnum.INFO:return(0,styled_components_browser_esm.iv)(t1||(t1=_`
          background-color: ${0};
          color: ${0};
        `),theme.colors.blue.light,theme.colors.blue.dark);case StatusEnum.ERROR:return(0,styled_components_browser_esm.iv)(t2||(t2=_`
          background-color: ${0};
          color: ${0};
        `),theme.colors.red.light,theme.colors.red.dark);case StatusEnum.WARNING:return(0,styled_components_browser_esm.iv)(t3||(t3=_`
          background-color: ${0};
          color: ${0};
        `),theme.colors.yellow.light,theme.colors.yellow.dark)}}));var StatusEnum;!function(StatusEnum){StatusEnum.SUCCESS="success",StatusEnum.INFO="info",StatusEnum.ERROR="error",StatusEnum.WARNING="warning"}(StatusEnum||(StatusEnum={}));const StatusLabel=({variant,label})=>(0,jsx_runtime.jsx)(StatusBox,{variant,children:label}),components_StatusLabel=StatusLabel;StatusLabel.__docgenInfo={description:"",methods:[],displayName:"StatusLabel",props:{variant:{required:!0,tsType:{name:"StatusEnum"},description:""},label:{required:!0,tsType:{name:"string"},description:""}}};const StatusLabel_stories={title:"Example/StatusLabel",component:components_StatusLabel,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{options:[StatusEnum.ERROR,StatusEnum.INFO,StatusEnum.SUCCESS,StatusEnum.WARNING]}},args:{label:"Try Me!",variant:StatusEnum.ERROR}},StatusLabel_stories_StatusLabel={},__namedExportsOrder=["StatusLabel"];StatusLabel_stories_StatusLabel.parameters={...StatusLabel_stories_StatusLabel.parameters,docs:{...StatusLabel_stories_StatusLabel.parameters?.docs,source:{originalSource:"{}",...StatusLabel_stories_StatusLabel.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-StatusLabel-StatusLabel-stories.7223a15b.iframe.bundle.js.map