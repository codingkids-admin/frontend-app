(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9373:function(e,a,n){Promise.resolve().then(n.t.bind(n,1749,23)),Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.t.bind(n,2343,23)),Promise.resolve().then(n.t.bind(n,5826,23)),Promise.resolve().then(n.bind(n,5615)),Promise.resolve().then(n.t.bind(n,6600,23)),Promise.resolve().then(n.t.bind(n,1733,23)),Promise.resolve().then(n.t.bind(n,2912,23)),Promise.resolve().then(n.t.bind(n,3568,23)),Promise.resolve().then(n.t.bind(n,4536,23)),Promise.resolve().then(n.t.bind(n,1597,23)),Promise.resolve().then(n.t.bind(n,3187,23)),Promise.resolve().then(n.t.bind(n,8535,23))},5615:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return s}});var t=n(3827),r=n(4090),o=n(2856),c=n.n(o),i=n(2221),s=()=>{let[e,a]=(0,r.useState)({kidsFullName:"",parentFullName:"",relationship:"mommy",whatsapp:""});return(0,t.jsx)("div",{className:"".concat(c().card_container," p-4"),children:(0,t.jsxs)("form",{className:"d-flex flex-column gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"d-block",htmlFor:"kids_name",children:"Kids full name"}),(0,t.jsx)("input",{onChange:n=>a({...e,kidsFullName:n.target.value}),className:"".concat(c().card_input),type:"text",name:"kids_name",id:"kids_name",placeholder:"Your kids full name",value:e.kidsFullName,required:!0})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"d-block",htmlFor:"parent_name",children:"Parent full name"}),(0,t.jsx)("input",{onChange:n=>a({...e,parentFullName:n.target.value}),className:"".concat(c().card_input),type:"text",name:"parent_name",id:"parent_name",placeholder:"Parent full name",value:e.parentFullName})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"d-block",htmlFor:"relationship",children:"Relationship with kid"}),(0,t.jsxs)("div",{className:"d-flex gap-3",children:[(0,t.jsxs)("span",{className:"".concat(c().card_relationship),children:[(0,t.jsx)("input",{onChange:n=>a({...e,relationship:"mommy"}),type:"radio",id:"relationship_mommy",name:"relationship",value:"mommy",className:"me-1",defaultChecked:!0}),(0,t.jsx)("label",{htmlFor:"relationship_mommy",children:"Mommy"})]}),(0,t.jsxs)("span",{className:"".concat(c().card_relationship),children:[(0,t.jsx)("input",{onChange:n=>a({...e,relationship:"daddy"}),type:"radio",id:"relationship_daddy",name:"relationship",value:"daddy",className:"me-1"}),(0,t.jsx)("label",{htmlFor:"relationship_daddy",children:"Daddy"})]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"d-block",htmlFor:"whatsapp",children:"Whatsapp"}),(0,t.jsx)("input",{required:!0,onChange:n=>{a({...e,whatsapp:n.target.value})},className:"".concat(e.whatsapp.length>15?c().card_input_error:c().card_input),type:"number",name:"whatsapp",id:"whatsapp",placeholder:"Whatsapp number",value:e.whatsapp}),e.whatsapp.length>15&&(0,t.jsx)("p",{className:"".concat(c().error_message," mt-1"),children:"Phone number can't be greater that 15"})]}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{style:{opacity:!(e.whatsapp.length>15)&&e.whatsapp&&e.kidsFullName&&e.parentFullName?"1":"0.5"},onClick:n=>{n.preventDefault(),e.whatsapp.length<=15&&e.whatsapp&&e.kidsFullName&&e.parentFullName&&(fetch("http://localhost:3000/api/mail",{method:"POST",headers:{Authorization:"Basic YWRtaW5AY29kaW5na2lkcy5pZDpOd0dbVl9ReDRVMGk=","Content-Type":"application/json"},body:JSON.stringify({message:"<div>\n                  <h3>Submitted at ".concat(new Date,"</h3>\n                  <h4>Kids full name: [ ").concat(e.kidsFullName," ]</h4> \n                  <h4>Parent full name: [ ").concat(e.parentFullName," ]</h4> \n                  <h4>Relationship: [ ").concat(e.relationship," ]</h4>\n                  <h4>Whatsapp : [ ").concat(e.whatsapp," ]</h4>\n                  </div>")})}).then(e=>e.json()).then(n=>{a({...e,kidsFullName:"",parentFullName:"",whatsapp:""})}),window.open((0,i.Z)("Hi Mr, saya ingin consultasi untuk les coding anak saya\nNama Anak: ".concat(e.kidsFullName,"\nHubungan dengan anak: ").concat(e.relationship)),"_blank"))},className:"btn-primary ".concat(c().btn_form),children:"Start consulting!"})})]})})}},2221:function(e,a){"use strict";a.Z=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+6285161774568";return"https://wa.me/".concat(a,"?text=").concat(encodeURI(e))}},8535:function(e){e.exports={collaborators_container:"aboutus_collaborators_container__Q_ktS",section_img_container:"aboutus_section_img_container__IiXZR"}},2343:function(e){e.exports={section_card:"classes_section_card__4gV0a"}},5826:function(e){e.exports={item:"accordion_item__9xnhm",header_button:"accordion_header_button__Hd80K",collapsed:"accordion_collapsed__J4ETw",body:"accordion_body__nRk3U"}},1733:function(e){e.exports={card_container:"card_card_container__vJQNT",card_img_container:"card_card_img_container__9xDG4",card_desc:"card_card_desc__1dclX",card_title:"card_card_title__NO1mR",card_before_price:"card_card_before_price__bQsTD",card_after_price:"card_card_after_price__Wc5Kv"}},1597:function(e){e.exports={carousel_control_prev_container:"carousel_carousel_control_prev_container__lZdcW",carousel_control_prev:"carousel_carousel_control_prev__hki30",carousel_control_next_container:"carousel_carousel_control_next_container___7s5q",carousel_control_next:"carousel_carousel_control_next__ZPaLs",carousel_container:"carousel_carousel_container__HxNzB",carouse_item:"carousel_carouse_item__BzJ0H"}},2856:function(e){e.exports={card_container:"card_card_container__OuMwc",card_input:"card_card_input__UjJT9",card_input_error:"card_card_input_error__DwAK5",error_message:"card_error_message__7B90n",card_relationship:"card_card_relationship__PKUj1",btn_form:"card_btn_form__CW2Hx"}},6600:function(e){e.exports={container:"contactus_container__ZZ3RT",contact_container:"contactus_contact_container__SMYbj"}},2912:function(e){e.exports={container:"faq_container__bMv_q"}},3568:function(e){e.exports={container:"header_container__xofsz",header_title:"header_header_title__YPWAE",header_tag:"header_header_tag__gX8u_",header_img_container:"header_header_img_container__E5bB_",move:"header_move__jOKtC"}},4536:function(e){e.exports={secion_title:"information_secion_title__wO1GD",section_body:"information_section_body__F5NHo"}},3187:function(e){e.exports={section_card:"value_section_card__bn7Xx",section_img_container:"value_section_img_container__K5sJQ",section_desc:"value_section_desc__kyPng"}}},function(e){e.O(0,[647,971,69,744],function(){return e(e.s=9373)}),_N_E=e.O()}]);