import{_ as m,r as f,a as w,c as l,b as t,w as n,v as d,d as v,e as b,F as h,o as i,u as _}from"./index-ALwSTG7Y.js";import{a as y}from"./ordersService-DiDm_E6a.js";const k={class:"container addingOrder-container rounded"},x={class:"person-field-wrapper"},O={class:"item-field-wrapper"},g={key:0,class:"wrapper"},z={__name:"AddOrderView",setup(V){const r=f({name:"",person:"",size:"",status:"Zamówione"}),a=w(!1),c=_();function p(){c.push("/home")}async function u(){try{const s=await y({...r});console.log("Order added with ID:",s),a.value=!0,setTimeout(()=>{a.value=!1},3e3),Object.keys(r).forEach(e=>{e!=="status"&&(r[e]="")})}catch(s){console.error("Failed to add order:",s),alert("Failed to add order. Please try again.")}}return(s,e)=>(i(),l(h,null,[t("form",{onSubmit:v(u,["prevent"])},[e[4]||(e[4]=t("h1",{class:"lato-light"},"Wprowadź nazwę:",-1)),t("div",k,[t("div",x,[n(t("input",{type:"text",class:"form-control el1",placeholder:"Osoba","onUpdate:modelValue":e[0]||(e[0]=o=>r.person=o),required:""},null,512),[[d,r.person]])]),t("div",O,[n(t("input",{type:"text",class:"form-control el2",placeholder:"Nazwa","onUpdate:modelValue":e[1]||(e[1]=o=>r.name=o),required:""},null,512),[[d,r.name]]),n(t("input",{type:"text",class:"form-control el3",id:"inputSize",placeholder:"Rozmiar","onUpdate:modelValue":e[2]||(e[2]=o=>r.size=o)},null,512),[[d,r.size]])]),t("div",{class:"button-wrapper"},[e[3]||(e[3]=t("button",{type:"submit",class:"btn btn-secondary btn-first"},"Dodaj",-1)),t("button",{type:"button",class:"btn btn-secondary btn-second",onClick:p}," Wróć ")])])],32),a.value?(i(),l("div",g,e[5]||(e[5]=[t("svg",{class:"checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},[t("circle",{class:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),t("path",{class:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})],-1)]))):b("",!0)],64))}},A=m(z,[["__scopeId","data-v-a95561fc"]]);export{A as default};
