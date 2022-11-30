"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[680],{9680:function(e,n,o){o.r(n),o.d(n,{default:function(){return B}});var r=o(9439),a=o(2791),t=o(9434),i=o(6916),l=function(e){return e.contacts.items},s=function(e){return e.contacts.isLoading},d=(0,i.P1)([l,function(e){return e.filter}],(function(e,n){return n?e.filter((function(e){return e.name.toLowerCase().includes(n)})):e})),c=o(3634),u=o(6015),h=o(5924),m=o(1225),p=o(4346),x=o(5579),f=o(5705),b=o(8320),g=o(2812),j=o(1724);j.kM(j.Z_,"numeric",(function(){return this.matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\\./0-9]*$/g,"The field should have digits only")}));var C=j.Ry({name:j.Z_().required(),phone:j.Z_().numeric().required()}),v=function(){return C},Z=o(1833),y=o(3329),k={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"secondary.light",border:"2px solid #000",boxShadow:24,p:4},S=function(e){var n=e.onClose,o=e.isModalOpen,r=e.contact,a=(0,t.I0)(),i=(0,f.TA)({initialValues:{name:null===r||void 0===r?void 0:r.name,phone:null===r||void 0===r?void 0:r.number},onSubmit:function(e,t){a((0,c.Tk)({id:r.id,name:e.name,number:e.phone})),t.setSubmitting(!1),t.resetForm(),a((0,c.yF)()),o&&n()},validationSchema:v});return(0,y.jsx)(Z.Z,{open:o,onClose:n,"aria-labelledby":"modal","aria-describedby":"modal",children:(0,y.jsx)(u.Z,{sx:k,children:(0,y.jsxs)(u.Z,{sx:{backgroundColor:"primary.light",padding:2,borderRadius:2,maxWidth:400,flexDirection:"column",alignItems:"center"},children:[(0,y.jsx)(g.Z,{component:"h2",variant:"h5",children:"Update contact"}),(0,y.jsxs)("form",{onSubmit:i.handleSubmit,sx:{mt:1},children:[(0,y.jsx)(b.Z,{size:"small",margin:"normal",required:!0,fullWidth:!0,id:"name",name:"name",label:"Name",autoComplete:"name",value:i.values.name,onChange:i.handleChange,error:i.touched.name&&Boolean(i.errors.name),helperText:i.touched.name&&i.errors.name}),(0,y.jsx)(b.Z,{size:"small",margin:"normal",required:!0,fullWidth:!0,id:"phone",name:"phone",label:"Phone",type:"phone",autoComplete:"phone",value:i.values.phone,onChange:i.handleChange,error:i.touched.phone&&Boolean(i.errors.phone),helperText:i.touched.phone&&i.errors.phone}),(0,y.jsx)(x.Z,{type:"submit",variant:"contained",sx:{mt:2},children:"Update contact"})]})]})})})},w=function(){var e=(0,a.useState)(!1),n=(0,r.Z)(e,2),o=n[0],i=n[1],l=(0,a.useState)(null),s=(0,r.Z)(l,2),f=s[0],b=s[1],g=(0,t.I0)(),j=(0,t.v9)(d),C=function(e){g((0,c.GK)(e.target.id))},v=function(e){var n=j.find((function(n){return n.id===e.target.id}));b(n),i(!0)};return(0,y.jsxs)(u.Z,{sx:{backgroundColor:"primary.light",padding:2,borderRadius:2},children:[(0,y.jsx)(h.Z,{sx:{display:"grid",gap:1},children:j.map((function(e){var n=e.id,o=e.name,r=e.number;return(0,y.jsxs)(m.ZP,{dense:!0,sx:{backgroundColor:"secondary.light",boxShadow:2,borderColor:"primary.dark",borderRadius:2},children:[(0,y.jsxs)(p.Z,{children:[o," ",r]}),(0,y.jsx)(x.Z,{sx:{ml:1,color:"secondary.dark",borderColor:"secondary.dark"},variant:"outlined",type:"button",id:n,onClick:v,children:"update"}),(0,y.jsx)(x.Z,{sx:{ml:1,color:"secondary.dark",borderColor:"secondary.dark"},variant:"outlined",type:"button",id:n,onClick:C,children:"Delete"})]},n)}))}),o&&(0,y.jsx)(S,{onClose:function(){return i(!1)},isModalOpen:o,contact:f})]})},_=o(4270),T=function(e){var n=e.onClose,o=e.isModalOpen,r=(0,t.I0)(),a=(0,t.v9)(l),i=(0,f.TA)({initialValues:{name:"",phone:""},onSubmit:function(e,t){if(a.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()})))return alert("".concat(e.name," is already in contacts")),void t.setSubmitting(!1);r((0,c.uK)({name:e.name,number:e.phone})),t.setSubmitting(!1),t.resetForm(),o&&n()},validationSchema:v});return(0,y.jsxs)(u.Z,{sx:{backgroundColor:"primary.light",padding:2,borderRadius:2,maxWidth:400,flexDirection:"column",alignItems:"center"},children:[(0,y.jsx)(g.Z,{component:"h2",variant:"h5",children:"Add new contact"}),(0,y.jsxs)("form",{onSubmit:i.handleSubmit,sx:{mt:1},children:[(0,y.jsx)(b.Z,{size:"small",margin:"normal",required:!0,fullWidth:!0,id:"name",name:"name",label:"Name",autoComplete:"name",value:i.values.name,onChange:i.handleChange,error:i.touched.name&&Boolean(i.errors.name),helperText:i.touched.name&&i.errors.name}),(0,y.jsx)(b.Z,{size:"small",margin:"normal",required:!0,fullWidth:!0,id:"phone",name:"phone",label:"Phone",type:"phone",autoComplete:"phone",value:i.values.phone,onChange:i.handleChange,error:i.touched.phone&&Boolean(i.errors.phone),helperText:i.touched.phone&&i.errors.phone}),(0,y.jsx)(x.Z,{type:"submit",variant:"contained",sx:{mt:2},children:"Add contact"})]})]})},q=o(1273),I=function(){var e=(0,t.I0)();return(0,y.jsx)(u.Z,{component:"form",noValidate:!0,autoComplete:"off",name:"filter",onChange:function(n){e((0,q.P)(n.target.value))},children:(0,y.jsx)(b.Z,{size:"small",id:"filter contacts",label:"filter contacts",variant:"outlined"})})},z=o(476),O=o(3793),P=o(4217),W=o(5196),M=o(7750),R={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"secondary.light",border:"2px solid #000",boxShadow:24,p:4},A=function(e){var n=e.isOpen,o=e.onClose;return(0,y.jsx)(Z.Z,{open:n,onClose:o,"aria-labelledby":"modal","aria-describedby":"modal",children:(0,y.jsx)(u.Z,{sx:R,children:(0,y.jsx)(T,{onClose:o,isModalOpen:n})})})};function B(){var e=(0,a.useState)(!1),n=(0,r.Z)(e,2),o=n[0],i=n[1],l=(0,t.I0)(),d=(0,t.v9)(s),h=(0,t.v9)(P.Qb);return(0,a.useEffect)((function(){h&&l((0,c.yF)())}),[l,h]),(0,y.jsxs)(z.Z,{component:"main",children:[(0,y.jsx)(O.ZP,{}),(0,y.jsx)(_.q,{children:(0,y.jsx)("title",{children:"Your contacts"})}),d&&(0,y.jsx)("p",{children:" Contacts loading........"}),h&&(0,y.jsxs)(u.Z,{sx:{display:"flex",gap:2},children:[(0,y.jsxs)(u.Z,{m:1,flexGrow:2,children:[(0,y.jsxs)(u.Z,{display:"flex",justifyContent:"space-between",children:[(0,y.jsx)(I,{}),(0,y.jsx)(W.Z,{sx:{display:{xs:"flex",md:"none"}},size:"large",onClick:function(){return i(!0)},color:"inherit",children:(0,y.jsx)(M.Z,{})})]}),(0,y.jsx)(w,{})]}),(0,y.jsx)(u.Z,{sx:{display:{xs:"none",md:"block"},marginTop:6},children:(0,y.jsx)(T,{})})]}),(0,y.jsx)(A,{isOpen:o,onClose:function(){return i(!1)}})]})}}}]);
//# sourceMappingURL=680.a7e0240f.chunk.js.map