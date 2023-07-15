"use strict";(self.webpackChunksb_lib_test=self.webpackChunksb_lib_test||[]).push([[463],{"./src/components/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=({color,backgroundColor,label,...props})=>(0,jsx_runtime.jsx)(DefaultButton,{$color:color,$backgroundColor:backgroundColor,...props,children:label});Button.displayName="Button";const DefaultButton=styled_components_browser_esm.ZP.button`
  color: ${props=>props.$color?props.$color:"#000"};
  background-color: ${props=>props.$backgroundColor?props.$backgroundColor:"#BF4F74"};
  font-family: Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-flex;
  line-height: 1;
`;Button.propTypes={color:prop_types_default().string,backgroundColor:prop_types_default().string,label:prop_types_default().string.isRequired,onClick:prop_types_default().func},Button.defaultProps={backgroundColor:null,color:null,onClick:void 0},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},color:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},label:{description:"",type:{name:"string"},required:!0}}};const Button_stories={title:"Example/Button",component:Button,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},color:{control:"color"}}},Default={args:{label:"Button!"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Button!'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);
//# sourceMappingURL=Button-stories.e5bad5bc.iframe.bundle.js.map