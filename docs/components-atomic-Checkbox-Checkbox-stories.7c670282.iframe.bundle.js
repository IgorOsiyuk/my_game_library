"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[642],{"./src/components/atomic/Checkbox/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,Default:()=>Default,Disabled:()=>Disabled,DisabledChecked:()=>DisabledChecked,WithError:()=>WithError,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Checkbox_stories});var _path,jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Box=__webpack_require__("./src/components/atomic/Box/index.tsx"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const check=function SvgCheck(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},props),_path||(_path=react.createElement("path",{fill:"#000",d:"M17.916 4.534c.258.23.28.625.05.882-.884.99-3.263 3.5-5.411 5.75a1734 1734 0 0 1-4.514 4.711q-1.127-1.05-2.241-2.114c-.945-.904-2.032-1.963-2.516-2.504a.625.625 0 0 1 .932-.833c.444.497 1.49 1.518 2.448 2.433.516.494.999.95 1.331 1.263.687-.715 2.115-2.204 3.655-3.818 2.156-2.259 4.517-4.75 5.384-5.72a.625.625 0 0 1 .882-.05"})))};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");let t;const atomic_SvgImage=styled_components_browser_esm.ZP.div(t||(t=(t=>t)`
  display: flex;
  align-items: center;
  svg {
    width: ${0};
    height: ${0};
    path {
      fill: ${0};
    }
  }
`),(({$width})=>$width),(({$height})=>$height),(({theme,$fill})=>$fill?theme.colors[$fill]:theme.colors.white));let style_t,t1,style_=t=>t;const Text=styled_components_browser_esm.ZP.span(t1||(t1=style_`
  ${0}
`),(({theme,$color,$size,$weight})=>(0,styled_components_browser_esm.iv)(style_t||(style_t=style_`
      font-size: ${0};
      color: ${0};
      font-weight: ${0};
    `),theme.fontSizes[$size],theme.colors[$color],theme.fontWeights[$weight]))),Text_Text=({color="black",size="body_S",fontWeight="regular",children})=>(0,jsx_runtime.jsx)(Text,{$color:color,$size:size,$weight:fontWeight,children}),atomic_Text=Text_Text;Text_Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  black: string;\n  white: string;\n  dark: string;\n  darkSecondary: string;\n  grey: string;\n  greySecondary: string;\n  accent: string;\n  accentSecondary: string;\n  accent2: string;\n  blue: string;\n  blueSecondary: string;\n  red: string;\n  redSecondary: string;\n  yellow: string;\n  yellowSecondary: string;\n  green: string;\n  greenSecondary: string;\n}",signature:{properties:[{key:"black",value:{name:"string",required:!0}},{key:"white",value:{name:"string",required:!0}},{key:"dark",value:{name:"string",required:!0}},{key:"darkSecondary",value:{name:"string",required:!0}},{key:"grey",value:{name:"string",required:!0}},{key:"greySecondary",value:{name:"string",required:!0}},{key:"accent",value:{name:"string",required:!0}},{key:"accentSecondary",value:{name:"string",required:!0}},{key:"accent2",value:{name:"string",required:!0}},{key:"blue",value:{name:"string",required:!0}},{key:"blueSecondary",value:{name:"string",required:!0}},{key:"red",value:{name:"string",required:!0}},{key:"redSecondary",value:{name:"string",required:!0}},{key:"yellow",value:{name:"string",required:!0}},{key:"yellowSecondary",value:{name:"string",required:!0}},{key:"green",value:{name:"string",required:!0}},{key:"greenSecondary",value:{name:"string",required:!0}}]}},description:"",defaultValue:{value:"'black'",computed:!1}},size:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  title_L: string;\n  title_M: string;\n  big_numbers: string;\n  small_titles: string;\n  button: string;\n  body_M: string;\n  body_S: string;\n  body_XS: string;\n  tech: string;\n}",signature:{properties:[{key:"title_L",value:{name:"string",required:!0}},{key:"title_M",value:{name:"string",required:!0}},{key:"big_numbers",value:{name:"string",required:!0}},{key:"small_titles",value:{name:"string",required:!0}},{key:"button",value:{name:"string",required:!0}},{key:"body_M",value:{name:"string",required:!0}},{key:"body_S",value:{name:"string",required:!0}},{key:"body_XS",value:{name:"string",required:!0}},{key:"tech",value:{name:"string",required:!0}}]}},description:"",defaultValue:{value:"'body_S'",computed:!1}},fontWeight:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  light: number;\n  regular: number;\n  medium: number;\n  semiBold: number;\n  bold: number;\n}",signature:{properties:[{key:"light",value:{name:"number",required:!0}},{key:"regular",value:{name:"number",required:!0}},{key:"medium",value:{name:"number",required:!0}},{key:"semiBold",value:{name:"number",required:!0}},{key:"bold",value:{name:"number",required:!0}}]}},description:"",defaultValue:{value:"'regular'",computed:!1}},children:{required:!0,tsType:{name:"string"},description:""}}};let Checkbox_style_t,style_t1,t2,t3,t4,t5,t6,Checkbox_style_=t=>t;const CheckboxContainer=styled_components_browser_esm.ZP.div(Checkbox_style_t||(Checkbox_style_t=Checkbox_style_`
  display: flex;
  gap: ${0};
  align-items: center;
  cursor: pointer;
`),(({theme})=>theme.spacing.s_8)),HiddenCheckbox=styled_components_browser_esm.ZP.input(style_t1||(style_t1=Checkbox_style_`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`)),CheckboxIcon=styled_components_browser_esm.ZP.div(t3||(t3=Checkbox_style_`
  width: 20px;
  height: 20px;
  background-color: ${0};
  border: 2px solid ${0};
  border-radius: ${0};
  transition: all 0.2s ease-in-out;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  &:hover {
    opacity: 0.7;
  }
  svg {
    display: none;
  }
  ${0}
`),(({theme})=>theme.colors.white),(({theme,$isError})=>$isError?theme.colors.red:theme.colors.white),(({theme})=>theme.radius.rounded_xsmall),(({$isChecked})=>$isChecked&&(0,styled_components_browser_esm.iv)(t2||(t2=Checkbox_style_`
      opacity: 0.9;
      &:hover {
        opacity: 0.9;
      }
      svg {
        display: block;
      }
    `)))),Label=(0,styled_components_browser_esm.ZP)(atomic_Text)(t4||(t4=Checkbox_style_`
  cursor: pointer;
  user-select: none;
`)),Error=styled_components_browser_esm.ZP.div(t6||(t6=Checkbox_style_`
  ${0}
`),(({theme})=>(0,styled_components_browser_esm.iv)(t5||(t5=Checkbox_style_`
      padding: ${0} ${0};
      font-size: ${0};
      font-weight: ${0};
      color: ${0};
      width: 100%;
    `),theme.spacing.s_8,theme.spacing.s_12,theme.fontSizes.tech,theme.fontWeights.medium,theme.colors.red))),Checkbox=({label,checked,onChange,error,isError,disabled,name})=>(0,jsx_runtime.jsxs)(Box.Z,{children:[(0,jsx_runtime.jsxs)(CheckboxContainer,{as:"label",children:[(0,jsx_runtime.jsx)(HiddenCheckbox,{type:"checkbox",checked,onChange,disabled,name}),(0,jsx_runtime.jsx)(CheckboxIcon,{$isChecked:checked,$isError:isError,children:(0,jsx_runtime.jsx)(atomic_SvgImage,{$height:"100%",$width:"100%",$fill:"dark",children:(0,jsx_runtime.jsx)(check,{})})}),label&&(0,jsx_runtime.jsx)(Label,{color:disabled?"greySecondary":"white",size:"body_S",children:label})]}),error&&(0,jsx_runtime.jsx)(Error,{children:error})]}),atomic_Checkbox=Checkbox;Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},isError:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};var console=__webpack_require__("./node_modules/console-browserify/index.js");const Checkbox_stories={title:"Atomic/Checkbox",component:atomic_Checkbox,parameters:{layout:"centered"},tags:["autodocs"],decorators:[Story=>(0,jsx_runtime.jsx)(Box.Z,{$backgroundColor:"darkSecondary",$padding:"s_16",$radius:"rounded_medium",children:(0,jsx_runtime.jsx)(Story,{})})]},Default={args:{name:"default",onChange:e=>console.log("Checkbox changed:",e.target.checked)}},WithLabel={args:{name:"with-label",label:"Я согласен с условиями",onChange:e=>console.log("Checkbox changed:",e.target.checked)}},Checked={args:{name:"checked",label:"Отмеченный чекбокс",checked:!0,onChange:e=>console.log("Checkbox changed:",e.target.checked)}},WithError={args:{name:"with-error",label:"Чекбокс с ошибкой",isError:!0,error:"Это поле обязательно для заполнения",onChange:e=>console.log("Checkbox changed:",e.target.checked)}},Disabled={args:{name:"disabled",label:"Отключенный чекбокс",disabled:!0,onChange:e=>console.log("Checkbox changed:",e.target.checked)}},DisabledChecked={args:{name:"disabled-checked",label:"Отключенный отмеченный чекбокс",disabled:!0,checked:!0,onChange:e=>console.log("Checkbox changed:",e.target.checked)}},__namedExportsOrder=["Default","WithLabel","Checked","WithError","Disabled","DisabledChecked"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'default',\n    onChange: e => console.log('Checkbox changed:', e.target.checked)\n  }\n}",...Default.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'with-label',\n    label: 'Я согласен с условиями',\n    onChange: e => console.log('Checkbox changed:', e.target.checked)\n  }\n}",...WithLabel.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'checked',\n    label: 'Отмеченный чекбокс',\n    checked: true,\n    onChange: e => console.log('Checkbox changed:', e.target.checked)\n  }\n}",...Checked.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'with-error',\n    label: 'Чекбокс с ошибкой',\n    isError: true,\n    error: 'Это поле обязательно для заполнения',\n    onChange: e => console.log('Checkbox changed:', e.target.checked)\n  }\n}",...WithError.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'disabled',\n    label: 'Отключенный чекбокс',\n    disabled: true,\n    onChange: e => console.log('Checkbox changed:', e.target.checked)\n  }\n}",...Disabled.parameters?.docs?.source}}},DisabledChecked.parameters={...DisabledChecked.parameters,docs:{...DisabledChecked.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'disabled-checked',\n    label: 'Отключенный отмеченный чекбокс',\n    disabled: true,\n    checked: true,\n    onChange: e => console.log('Checkbox changed:', e.target.checked)\n  }\n}",...DisabledChecked.parameters?.docs?.source}}}},"./src/components/atomic/Box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let t;const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(t||(t=(t=>t)`
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
//# sourceMappingURL=components-atomic-Checkbox-Checkbox-stories.7c670282.iframe.bundle.js.map