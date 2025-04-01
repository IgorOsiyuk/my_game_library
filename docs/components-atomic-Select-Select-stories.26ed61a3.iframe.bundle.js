"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[438],{"./src/components/atomic/Select/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Multi:()=>Multi,Single:()=>Single,WithMultiValue:()=>WithMultiValue,WithValue:()=>WithValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Select_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react_select_esm=__webpack_require__("./node_modules/react-select/dist/react-select.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Box=__webpack_require__("./src/components/atomic/Box/index.tsx");let t;const StyledSelect=(0,styled_components_browser_esm.ZP)(react_select_esm.ZP)(t||(t=(t=>t)`
  .select__control {
    background-color: ${0};
    border: 1px solid ${0};
    border-radius: ${0};
    /* min-height: 55px; */
    padding: ${0} ${0};
    box-shadow: none;
    cursor: pointer;

    &:hover {
      border-color: ${0};
    }
  }

  .select__placeholder {
    padding-right: ${0};
  }
  .select__menu {
    background-color: ${0};
    border: 1px solid ${0};
    border-radius: ${0};
    padding: ${0};
  }

  .select__option {
    padding: ${0} ${0};
    cursor: pointer;
    border-radius: ${0};
    margin-top: ${0};
    &:active {
      background-color: ${0};
    }
    &--is-focused {
      background-color: ${0};
    }

    &--is-selected {
      background-color: ${0};
      color: white;

      &:hover {
        background-color: ${0};
      }
    }
  }
  .select__value-container {
    padding: 0;
    .select__multi-value {
      gap: ${0};
      background-color: ${0};
      border-radius: ${0};
      padding: ${0} ${0};
      margin: 0;
      margin-right: ${0};
    }
  }
  .select__indicator-separator {
    background-color: ${0};
  }
  .select__value-container--is-multi {
    gap: ${0};
  }
  .select__multi-value__remove {
    padding-left: ${0};
    padding-right: ${0};
    &:hover {
      background-color: ${0};
      color: ${0};
    }
  }
  .select__single-value,
  .select__multi-value__label {
    font-size: ${0};
    color: ${0};
    margin: 0;
  }

  .select__placeholder {
    color: ${0};
  }
`),(({theme})=>theme.colors.darkSecondary),(({theme})=>theme.colors.grey),(({theme})=>theme.radius.rounded_small),(({theme})=>theme.spacing.s_8),(({theme})=>theme.spacing.s_12),(({theme})=>theme.colors.greySecondary),(({theme})=>theme.spacing.s_12),(({theme})=>theme.colors.darkSecondary),(({theme})=>theme.colors.grey),(({theme})=>theme.radius.rounded_small),(({theme})=>theme.spacing.s_4),(({theme})=>theme.spacing.s_8),(({theme})=>theme.spacing.s_6),(({theme})=>theme.radius.rounded_small),(({theme})=>theme.spacing.s_4),(({theme})=>theme.colors.grey),(({theme})=>theme.colors.grey),(({theme})=>theme.colors.grey),(({theme})=>theme.colors.grey),(({theme})=>theme.spacing.s_4),(({theme})=>theme.colors.grey),(({theme})=>theme.radius.rounded_small),(({theme})=>theme.spacing.s_4),(({theme})=>theme.spacing.s_6),(({theme})=>theme.spacing.s_4),(({theme})=>theme.colors.grey),(({theme})=>theme.spacing.s_4),(({theme})=>theme.spacing.s_2),(({theme})=>theme.spacing.s_2),(({theme})=>theme.colors.redSecondary),(({theme})=>theme.colors.red),(({theme})=>theme.fontSizes.body_M),(({theme})=>theme.colors.white),(({theme})=>theme.colors.greySecondary)),CustomSelect=({options,value,onChange,placeholder="Выберите опцию",className,sx,isMulti=!1})=>(0,jsx_runtime.jsx)(Box.Z,{$sx:sx,children:(0,jsx_runtime.jsx)(StyledSelect,{closeMenuOnSelect:!1,className,classNamePrefix:"select",options,value,onChange,placeholder,isSearchable:!1,isClearable:!0,isMulti})});CustomSelect.__docgenInfo={description:"",methods:[],displayName:"CustomSelect",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"SelectOption | SelectOption[]",elements:[{name:"SelectOption"},{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n  option: SingleValue<SelectOption> | MultiValue<SelectOption>,\n  actionMeta: ActionMeta<SelectOption>,\n) => void",signature:{arguments:[{type:{name:"union",raw:"SingleValue<SelectOption> | MultiValue<SelectOption>",elements:[{name:"SingleValue",elements:[{name:"SelectOption"}],raw:"SingleValue<SelectOption>"},{name:"MultiValue",elements:[{name:"SelectOption"}],raw:"MultiValue<SelectOption>"}]},name:"option"},{type:{name:"ActionMeta",elements:[{name:"SelectOption"}],raw:"ActionMeta<SelectOption>"},name:"actionMeta"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Выберите опцию'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},sx:{required:!1,tsType:{name:"union",raw:"((context: ExecutionContext) => ReturnType<typeof css>) | ReturnType<typeof css>",elements:[{name:"unknown"},{name:"ReturnType",elements:[{name:"css"}],raw:"ReturnType<typeof css>"}]},description:""},isMulti:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};var console=__webpack_require__("./node_modules/console-browserify/index.js");const Select_stories={title:"Atomic/Select",component:CustomSelect,parameters:{layout:"centered"},tags:["autodocs"]},options=[{value:"action",label:"Экшен"},{value:"rpg",label:"РПГ"},{value:"strategy",label:"Стратегия"},{value:"adventure",label:"Приключение"},{value:"simulator",label:"Симулятор"}],Single={args:{options,placeholder:"Выберите жанр",isMulti:!1,onChange:option=>console.log("Selected:",option)}},Multi={args:{options,placeholder:"Выберите жанры",isMulti:!0,onChange:option=>console.log("Selected:",option)}},WithValue={args:{options,value:options[0],placeholder:"Выберите жанр",isMulti:!1,onChange:option=>console.log("Selected:",option)}},WithMultiValue={args:{options,value:[options[0],options[1]],placeholder:"Выберите жанры",isMulti:!0,onChange:option=>console.log("Selected:",option)}},__namedExportsOrder=["Single","Multi","WithValue","WithMultiValue"];Single.parameters={...Single.parameters,docs:{...Single.parameters?.docs,source:{originalSource:"{\n  args: {\n    options,\n    placeholder: 'Выберите жанр',\n    isMulti: false,\n    onChange: option => console.log('Selected:', option)\n  }\n}",...Single.parameters?.docs?.source}}},Multi.parameters={...Multi.parameters,docs:{...Multi.parameters?.docs,source:{originalSource:"{\n  args: {\n    options,\n    placeholder: 'Выберите жанры',\n    isMulti: true,\n    onChange: option => console.log('Selected:', option)\n  }\n}",...Multi.parameters?.docs?.source}}},WithValue.parameters={...WithValue.parameters,docs:{...WithValue.parameters?.docs,source:{originalSource:"{\n  args: {\n    options,\n    value: options[0],\n    placeholder: 'Выберите жанр',\n    isMulti: false,\n    onChange: option => console.log('Selected:', option)\n  }\n}",...WithValue.parameters?.docs?.source}}},WithMultiValue.parameters={...WithMultiValue.parameters,docs:{...WithMultiValue.parameters?.docs,source:{originalSource:"{\n  args: {\n    options,\n    value: [options[0], options[1]],\n    placeholder: 'Выберите жанры',\n    isMulti: true,\n    onChange: option => console.log('Selected:', option)\n  }\n}",...WithMultiValue.parameters?.docs?.source}}}},"./src/components/atomic/Box/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let t;const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div(t||(t=(t=>t)`
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
//# sourceMappingURL=components-atomic-Select-Select-stories.26ed61a3.iframe.bundle.js.map