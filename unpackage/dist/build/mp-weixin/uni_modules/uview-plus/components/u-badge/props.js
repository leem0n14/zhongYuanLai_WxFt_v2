"use strict";const e=require("../../libs/vue.js"),o=require("../../libs/config/props.js"),t=e.defineMixin({props:{isDot:{type:Boolean,default:()=>o.defProps.badge.isDot},value:{type:[Number,String],default:()=>o.defProps.badge.value},modelValue:{type:[Number,String],default:()=>o.defProps.badge.modelValue},show:{type:Boolean,default:()=>o.defProps.badge.show},max:{type:[Number,String],default:()=>o.defProps.badge.max},type:{type:String,default:()=>o.defProps.badge.type},showZero:{type:Boolean,default:()=>o.defProps.badge.showZero},bgColor:{type:[String,null],default:()=>o.defProps.badge.bgColor},color:{type:[String,null],default:()=>o.defProps.badge.color},shape:{type:String,default:()=>o.defProps.badge.shape},numberType:{type:String,default:()=>o.defProps.badge.numberType},offset:{type:Array,default:()=>o.defProps.badge.offset},inverted:{type:Boolean,default:()=>o.defProps.badge.inverted},absolute:{type:Boolean,default:()=>o.defProps.badge.absolute}}});exports.props=t;