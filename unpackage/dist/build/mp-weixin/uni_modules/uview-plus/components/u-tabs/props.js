"use strict";const e=require("../../libs/vue.js"),t=require("../../libs/config/props.js"),r=e.defineMixin({props:{duration:{type:Number,default:()=>t.defProps.tabs.duration},list:{type:Array,default:()=>t.defProps.tabs.list},lineColor:{type:String,default:()=>t.defProps.tabs.lineColor},activeStyle:{type:[String,Object],default:()=>t.defProps.tabs.activeStyle},inactiveStyle:{type:[String,Object],default:()=>t.defProps.tabs.inactiveStyle},lineWidth:{type:[String,Number],default:()=>t.defProps.tabs.lineWidth},lineHeight:{type:[String,Number],default:()=>t.defProps.tabs.lineHeight},lineBgSize:{type:String,default:()=>t.defProps.tabs.lineBgSize},itemStyle:{type:[String,Object],default:()=>t.defProps.tabs.itemStyle},scrollable:{type:Boolean,default:()=>t.defProps.tabs.scrollable},current:{type:[Number,String],default:()=>t.defProps.tabs.current},keyName:{type:String,default:()=>t.defProps.tabs.keyName}}});exports.props=r;