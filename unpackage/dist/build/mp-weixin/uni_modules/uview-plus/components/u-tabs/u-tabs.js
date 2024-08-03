"use strict";const e=require("./props.js"),t=require("../../libs/mixin/mpMixin.js"),i=require("../../libs/mixin/mixin.js"),s=require("../../libs/config/props.js"),r=require("../../libs/function/index.js"),a=require("../../../../common/vendor.js"),n={name:"u-tabs",mixins:[t.mpMixin,i.mixin,e.props],data:()=>({firstTime:!0,scrollLeft:0,scrollViewWidth:0,lineOffsetLeft:0,tabsRect:{left:0},innerCurrent:0,moving:!1}),watch:{current:{immediate:!0,handler(e,t){e!==this.innerCurrent&&(this.innerCurrent=e,this.$nextTick((()=>{this.resize()})))}},list(){this.$nextTick((()=>{this.resize()}))}},computed:{textStyle(){return e=>{const t={},i=e===this.innerCurrent?r.addStyle(this.activeStyle):r.addStyle(this.inactiveStyle);return this.list[e].disabled&&(t.color="#c8c9cc"),r.deepMerge(i,t)}},propsBadge:()=>s.defProps.badge},async mounted(){this.init()},emits:["click","change"],methods:{addStyle:r.addStyle,addUnit:r.addUnit,setLineLeft(){const e=this.list[this.innerCurrent];if(!e)return;let t=this.list.slice(0,this.innerCurrent).reduce(((e,t)=>e+t.rect.width),0);const i=r.getPx(this.lineWidth);this.lineOffsetLeft=t+(e.rect.width-i)/2,this.firstTime&&setTimeout((()=>{this.firstTime=!1}),10)},animation(e,t=0){},clickHandler(e,t){this.$emit("click",{...e,index:t},t),e.disabled||(this.innerCurrent=t,this.resize(),this.$emit("change",{...e,index:t},t))},init(){r.sleep().then((()=>{this.resize()}))},setScrollLeft(){const e=this.list[this.innerCurrent],t=this.list.slice(0,this.innerCurrent).reduce(((e,t)=>e+t.rect.width),0),i=r.sys().windowWidth;let s=t-(this.tabsRect.width-e.rect.width)/2-(i-this.tabsRect.right)/2+this.tabsRect.left/2;s=Math.min(s,this.scrollViewWidth-this.tabsRect.width),this.scrollLeft=Math.max(0,s)},resize(){0!==this.list.length&&Promise.all([this.getTabsRect(),this.getAllItemRect()]).then((([e,t=[]])=>{this.tabsRect=e,this.scrollViewWidth=0,t.map(((e,t)=>{this.scrollViewWidth+=e.width,this.list[t].rect=e})),this.setLineLeft(),this.setScrollLeft()}))},getTabsRect(){return new Promise((e=>{this.queryRect("u-tabs__wrapper__scroll-view").then((t=>e(t)))}))},getAllItemRect(){return new Promise((e=>{const t=this.list.map(((e,t)=>this.queryRect(`u-tabs__wrapper__nav__item-${t}`,!0)));Promise.all(t).then((t=>e(t)))}))},queryRect(e,t){return new Promise((t=>{this.$uGetRect(`.${e}`).then((e=>{t(e)}))}))}}};if(!Array){a.resolveComponent("u-badge")()}Math;const d=a._export_sfc(n,[["render",function(e,t,i,s,r,n){return{a:a.f(e.list,((t,i,s)=>({a:a.t(t[e.keyName]),b:a.n(t.disabled&&"u-tabs__wrapper__nav__item__text--disabled"),c:a.s(n.textStyle(i)),d:"c69fc53c-0-"+s,e:a.p({show:!(!t.badge||!(t.badge.show||t.badge.isDot||t.badge.value)),isDot:t.badge&&t.badge.isDot||n.propsBadge.isDot,value:t.badge&&t.badge.value||n.propsBadge.value,max:t.badge&&t.badge.max||n.propsBadge.max,type:t.badge&&t.badge.type||n.propsBadge.type,showZero:t.badge&&t.badge.showZero||n.propsBadge.showZero,bgColor:t.badge&&t.badge.bgColor||n.propsBadge.bgColor,color:t.badge&&t.badge.color||n.propsBadge.color,shape:t.badge&&t.badge.shape||n.propsBadge.shape,numberType:t.badge&&t.badge.numberType||n.propsBadge.numberType,inverted:t.badge&&t.badge.inverted||n.propsBadge.inverted,customStyle:"margin-left: 4px;"}),f:i,g:a.o((e=>n.clickHandler(t,i)),i),h:`u-tabs__wrapper__nav__item-${i}`,i:a.n(`u-tabs__wrapper__nav__item-${i}`),j:a.n(t.disabled&&"u-tabs__wrapper__nav__item--disabled")}))),b:a.s(n.addStyle(e.itemStyle)),c:a.s({flex:e.scrollable?"":1}),d:a.s({width:n.addUnit(e.lineWidth),transform:`translate(${r.lineOffsetLeft}px)`,transitionDuration:`${r.firstTime?0:e.duration}ms`,height:n.addUnit(e.lineHeight),background:e.lineColor,backgroundSize:e.lineBgSize}),e:e.scrollable,f:r.scrollLeft,g:a.n(e.customClass)}}],["__scopeId","data-v-c69fc53c"]]);wx.createComponent(d);
