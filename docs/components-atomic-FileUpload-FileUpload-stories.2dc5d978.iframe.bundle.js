"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[84],{"./src/components/atomic/FileUpload/FileUpload.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FileUpload_stories});var _path,jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Box=__webpack_require__("./src/components/atomic/Box/index.tsx"),icons_close=__webpack_require__("./public/icons/close.svg"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const plus=function SvgPlus(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},props),_path||(_path=react.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M10 2.375c.345 0 .625.28.625.625v6.375H17a.625.625 0 1 1 0 1.25h-6.375V17a.625.625 0 1 1-1.25 0v-6.375H3a.625.625 0 1 1 0-1.25h6.375V3c0-.345.28-.625.625-.625",clipRule:"evenodd"})))};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");let t;const atomic_FlexBox=styled_components_browser_esm.ZP.div(t||(t=(t=>t)`
  display: flex;
  flex-direction: ${0};
  justify-content: ${0};
  align-items: ${0};
  gap: ${0};
  flex-wrap: ${0};

  padding: ${0};
  padding-left: ${0};
  padding-right: ${0};
  padding-top: ${0};
  padding-bottom: ${0};

  margin: ${0};
  margin-left: ${0};
  margin-right: ${0};
  margin-top: ${0};
  margin-bottom: ${0};

  width: ${0};
  height: ${0};
  background-color: ${0};
  ${0};
`),(({$direction})=>$direction),(({$justify})=>$justify||"flex-start"),(({$align})=>$align),(({theme,$gap})=>$gap?theme.spacing[$gap]:"0"),(({$wrap})=>$wrap||"nowrap"),(({theme,$padding,$px,$py})=>$padding?theme.spacing[$padding]:`${$py?theme.spacing[$py]:"0"} ${$px?theme.spacing[$px]:"0"}`),(({theme,$pl})=>$pl&&theme.spacing[$pl]),(({theme,$pr})=>$pr&&theme.spacing[$pr]),(({theme,$pt})=>$pt&&theme.spacing[$pt]),(({theme,$pb})=>$pb&&theme.spacing[$pb]),(({theme,$margin,$mx,$my})=>$margin?theme.spacing[$margin]:`${$my?theme.spacing[$my]:"0"} ${$mx?theme.spacing[$mx]:"0"}`),(({theme,$ml})=>$ml&&theme.spacing[$ml]),(({theme,$mr})=>$mr&&theme.spacing[$mr]),(({theme,$mt})=>$mt&&theme.spacing[$mt]),(({theme,$mb})=>$mb&&theme.spacing[$mb]),(({$width})=>$width),(({$height})=>$height),(({theme,$backgroundColor})=>$backgroundColor?theme.colors[$backgroundColor]:"transparent"),(({$sx})=>$sx));var SvgImage=__webpack_require__("./src/components/atomic/SvgImage/index.tsx"),Text=__webpack_require__("./src/components/atomic/Text/index.tsx");let style_t,t1,t2,t3,t4,style_=t=>t;const UploadContainer=styled_components_browser_esm.ZP.div(t1||(t1=style_`
  width: 100%;
  height: 100%;
  border: 1px solid ${0};
  border-radius: ${0};
  background-color: ${0};
  transition: all 0.2s;

  ${0}

  &:hover {
    background-color: ${0};
  }
`),(({theme})=>theme.colors.grey),(({theme})=>theme.radius.rounded_xmedium),(({theme})=>theme.colors.darkSecondary),(({$isDragging})=>$isDragging&&(0,styled_components_browser_esm.iv)(style_t||(style_t=style_`
      background-color: ${0};
    `),(({theme})=>theme.colors.dark))),(({theme})=>theme.colors.dark)),HiddenInput=styled_components_browser_esm.ZP.input(t2||(t2=style_`
  display: none;
`)),PreviewImage=styled_components_browser_esm.ZP.img(t3||(t3=style_`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${0};
  margin-bottom: ${0};
`),(({theme})=>theme.radius.rounded_small),(({theme})=>theme.spacing.s_16)),RemoveButton=styled_components_browser_esm.ZP.div(t4||(t4=style_`
  position: absolute;
  top: ${0};
  right: ${0};
  background: ${0};
  border-radius: ${0};

  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${0};
  }
`),(({theme})=>theme.spacing.s_8),(({theme})=>theme.spacing.s_8),(({theme})=>theme.colors.accent),(({theme})=>theme.radius.rounded_circle),(({theme})=>theme.colors.accentSecondary));let FileUpload_t,FileUpload_t1,FileUpload_=t=>t;const FileUpload=({onFileSelect,accept="image/*",maxSize=5})=>{const[isDragging,setIsDragging]=(0,react.useState)(!1),[previewUrl,setPreviewUrl]=(0,react.useState)(null),fileInputRef=(0,react.useRef)(null),handleFile=file=>{const reader=new FileReader;reader.onloadend=()=>{setPreviewUrl(reader.result)},reader.readAsDataURL(file),onFileSelect(file)},validateFile=file=>file.size>1024*maxSize*1024?(alert(`Файл слишком большой. Максимальный размер: ${maxSize}MB`),!1):!(accept&&!file.type.match(accept.replace("*",".*")))||(alert("Неподдерживаемый формат файла"),!1);return(0,jsx_runtime.jsxs)(UploadContainer,{$isDragging:isDragging,children:[(0,jsx_runtime.jsx)(atomic_FlexBox,{$direction:"column",$align:"center",$gap:"s_8",$width:"100%",$height:"100%",children:previewUrl?(0,jsx_runtime.jsxs)(Box.Z,{$sx:(0,styled_components_browser_esm.iv)(FileUpload_t||(FileUpload_t=FileUpload_`
              position: relative;
            `)),$width:"100%",$height:"100%",children:[(0,jsx_runtime.jsx)(PreviewImage,{src:previewUrl,alt:"Preview"}),(0,jsx_runtime.jsx)(RemoveButton,{onClick:()=>{setPreviewUrl(null),fileInputRef.current&&(fileInputRef.current.value="")},children:(0,jsx_runtime.jsx)(SvgImage.Z,{$height:"14px",$width:"14px",$fill:"white",children:(0,jsx_runtime.jsx)(icons_close.Z,{})})})]}):(0,jsx_runtime.jsxs)(atomic_FlexBox,{$direction:"column",$align:"center",$justify:"center",$gap:"s_12",$width:"100%",$height:"100%",$padding:"s_24",onClick:()=>{var _fileInputRef_current;null===(_fileInputRef_current=fileInputRef.current)||void 0===_fileInputRef_current||_fileInputRef_current.click()},onDragOver:e=>{e.preventDefault(),setIsDragging(!0)},onDragLeave:e=>{e.preventDefault(),setIsDragging(!1)},onDrop:e=>{e.preventDefault(),setIsDragging(!1);const file=e.dataTransfer.files[0];file&&validateFile(file)&&handleFile(file)},$sx:(0,styled_components_browser_esm.iv)(FileUpload_t1||(FileUpload_t1=FileUpload_`
              cursor: pointer;
            `)),children:[(0,jsx_runtime.jsx)(SvgImage.Z,{$height:"20px",$width:"20px",$fill:"white",children:(0,jsx_runtime.jsx)(plus,{})}),(0,jsx_runtime.jsx)(Text.Z,{color:"white",size:"body_M",children:"Добавить обложку"})]})}),(0,jsx_runtime.jsx)(HiddenInput,{ref:fileInputRef,type:"file",accept,onChange:e=>{var _e_target_files;const file=null===(_e_target_files=e.target.files)||void 0===_e_target_files?void 0:_e_target_files[0];file&&validateFile(file)&&handleFile(file)}})]})};FileUpload.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{onFileSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"void"}}},description:""},accept:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'image/*'",computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}}}};var console=__webpack_require__("./node_modules/console-browserify/index.js");const FileUpload_stories={title:"Atomic/FileUpload",component:FileUpload,parameters:{layout:"centered"},tags:["autodocs"]},Default={args:{onFileSelect:file=>console.log("Selected file:",file),maxSize:5,accept:"image/*"},decorators:[Story=>(0,jsx_runtime.jsx)(Box.Z,{$padding:"s_36",$backgroundColor:"darkSecondary",children:(0,jsx_runtime.jsx)(Box.Z,{$width:"448px",$height:"448px",children:(0,jsx_runtime.jsx)(Story,{})})})]},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    onFileSelect: file => console.log(\'Selected file:\', file),\n    maxSize: 5,\n    accept: \'image/*\'\n  },\n  decorators: [Story => <Box $padding="s_36" $backgroundColor="darkSecondary">\r\n        <Box $width="448px" $height="448px">\r\n          <Story />\r\n        </Box>\r\n      </Box>]\n}',...Default.parameters?.docs?.source}}}},"./src/components/atomic/Box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let t;const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(t||(t=(t=>t)`
  width: ${0};
  height: ${0};
  background-color: ${0};

  padding: ${0};
  padding-left: ${0};
  padding-right: ${0};
  padding-top: ${0};
  padding-bottom: ${0};

  margin: ${0};
  margin-left: ${0};
  margin-right: ${0};
  margin-top: ${0};
  margin-bottom: ${0};

  border-radius: ${0};
  ${0};
`),(({$width})=>$width),(({$height})=>$height),(({theme,$backgroundColor})=>$backgroundColor?theme.colors[$backgroundColor]:"transparent"),(({theme,$padding,$px,$py})=>$padding?theme.spacing[$padding]:`${$py?theme.spacing[$py]:"0"} ${$px?theme.spacing[$px]:"0"}`),(({theme,$pl})=>$pl&&theme.spacing[$pl]),(({theme,$pr})=>$pr&&theme.spacing[$pr]),(({theme,$pt})=>$pt&&theme.spacing[$pt]),(({theme,$pb})=>$pb&&theme.spacing[$pb]),(({theme,$margin,$mx,$my})=>$margin?theme.spacing[$margin]:`${$my?theme.spacing[$my]:"0"} ${$mx?theme.spacing[$mx]:"0"}`),(({theme,$ml})=>$ml&&theme.spacing[$ml]),(({theme,$mr})=>$mr&&theme.spacing[$mr]),(({theme,$mt})=>$mt&&theme.spacing[$mt]),(({theme,$mb})=>$mb&&theme.spacing[$mb]),(({theme,$radius})=>$radius&&theme.radius[$radius]),(({$sx})=>$sx&&$sx))},"./src/components/atomic/SvgImage/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let t;const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(t||(t=(t=>t)`
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
//# sourceMappingURL=components-atomic-FileUpload-FileUpload-stories.2dc5d978.iframe.bundle.js.map