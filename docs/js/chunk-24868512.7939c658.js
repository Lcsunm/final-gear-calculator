(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24868512"],{8315:function(t,e,a){"use strict";var l=a("9f50"),n=a.n(l);n.a},"8e22":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"CalculatorIndex"}},[a("div",{staticClass:"top-layout"},[a("ValueGroup",{attrs:{title:"机甲基础数值",values:t.mMechaBase}}),a("ValueGroup",{attrs:{title:"技能增幅数值",values:t.mSkillIncrease}}),a("ValueGroup",{attrs:{title:"一体机部件增幅数值",values:t.mIntegratedMechaIncrease}}),a("ValueGroup",{attrs:{title:"武器属性",values:t.mWeapon,lineSize:2}}),a("ValueGroup",{attrs:{title:"座舱属性",values:t.mCockpit,lineSize:2}}),a("ValueGroup",{attrs:{title:"腿部属性",values:t.mLeg,lineSize:2}}),a("ValueGroup",{attrs:{title:"挂载属性",values:t.mMount,lineSize:2}}),a("ValueGroup",{attrs:{title:"芯片A属性",values:t.mChipA,lineSize:2}}),a("ValueGroup",{attrs:{title:"芯片B属性",values:t.mChipB,lineSize:2}}),a("ValueGroup",{attrs:{title:"暴击爆伤数值",values:t.mEqedBlastInjury,lineSize:1}}),a("WeaponSelector",{ref:"WeaponSelector"})],1),a("div",{staticClass:"bottom-layout"},[a("span",{staticClass:"critical-magnification"},[t._v("暴击伤害倍率："+t._s(t.criticalMagnification))]),a("div",{staticClass:"left-layout"},[a("div",{staticClass:"not-master"},[a("span",{staticClass:"title"},[t._v("非专精")]),a("span",[t._v("攻击面板："+t._s(t.notMaster.attack))]),a("span",[t._v("理想秒伤："+t._s(t.notMaster.damage))])]),a("div",{staticClass:"master"},[a("span",{staticClass:"title"},[t._v("专精")]),a("span",[t._v("攻击面板："+t._s(t.master.attack))]),a("span",[t._v("理想秒伤："+t._s(t.master.damage))])])]),a("div",{staticClass:"right-layout"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],on:{click:t.startCalc}},[t._v("计算")]),a("button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticStyle:{"margin-top":"10px"}},[t._v("清空")])])])])},n=[],i=a("50fb"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"ValueGroup"}},[a("span",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"items"},t._l(t.values1,(function(e,l){return a("div",{key:l,staticClass:"item",style:t.itemStyle},[a("span",{staticClass:"label"},[t._v(t._s(e.label))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],staticClass:"value",attrs:{type:"number"},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}})])})),0),a("div",{staticClass:"button-layout"},[a("button",{on:{click:t.save}},[t._v("保存")]),a("button",{on:{click:t.load}},[t._v("读取")]),a("button",{on:{click:t.clear}},[t._v("清理")])])])},r=[],s=function(){var t=function(e,a){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])},t(e,a)};return function(e,a){function l(){this.constructor=e}t(e,a),e.prototype=null===a?Object.create(a):(l.prototype=a.prototype,new l)}}(),u=function(t,e,a,l){var n,i=arguments.length,c=i<3?e:null===l?l=Object.getOwnPropertyDescriptor(e,a):l;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,a,l);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(c=(i<3?n(c):i>3?n(e,a,c):n(e,a))||c);return i>3&&c&&Object.defineProperty(e,a,c),c},o=function(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}var a;return s(e,t),Object.defineProperty(e.prototype,"itemStyle",{get:function(){return{width:"calc(100% / "+(this.lineSize>0?this.lineSize:this.values1.length)+" - 5px)"}},enumerable:!0,configurable:!0}),e.prototype.save=function(){window.localStorage.setItem(this.title,JSON.stringify(this.values1))},e.prototype.load=function(){var t=window.localStorage.getItem(this.title);if(t){var e=JSON.parse(t);if(e)for(var a=0;a<this.values1.length;a++)for(var l=this.values1[a],n=0;n<e.length;n++){var i=e[n];if(i.label==l.label){l.value=i.value;break}}}},e.prototype.clear=function(){this.values1.forEach((function(t){t.value=null}))},u([Object(i["b"])({default:"标题"}),o("design:type",String)],e.prototype,"title",void 0),u([Object(i["b"])({default:0}),o("design:type",Number)],e.prototype,"lineSize",void 0),u([Object(i["c"])("values",{type:Array}),o("design:type","function"===typeof(a="undefined"!==typeof Array&&Array)?a:Object)],e.prototype,"values1",void 0),e=u([i["a"]],e),e}(i["d"]),v=p,m=v,h=(a("cc18"),a("6691")),_=Object(h["a"])(m,c,r,!1,null,null,null),f=_.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"WeaponSelector"}},[a("span",{staticClass:"title"},[t._v("装备武器选择")]),a("div",{staticClass:"items"},[a("div",{staticClass:"item-type"},[a("span",{staticClass:"name"},[t._v("武器类型")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.mItems2,expression:"mItems2"}],staticClass:"value",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.mItems2=e.target.multiple?a:a[0]}}},t._l(t.mItems,(function(t,e){return a("option",{key:e,attrs:{label:t.name},domProps:{value:t.items}})})),0)]),a("div",{staticClass:"item-name"},[a("span",{staticClass:"name"},[t._v("武器名称")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.mSelectedItem,expression:"mSelectedItem"}],staticClass:"value",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.mSelectedItem=e.target.multiple?a:a[0]}}},t._l(t.mItems2,(function(t,e){return a("option",{key:e,attrs:{label:t.name},domProps:{value:t.value}})})),0)])])])},M=[],d=function(){var t=function(e,a){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])},t(e,a)};return function(e,a){function l(){this.constructor=e}t(e,a),e.prototype=null===a?Object.create(a):(l.prototype=a.prototype,new l)}}(),k=function(t,e,a,l){var n,i=arguments.length,c=i<3?e:null===l?l=Object.getOwnPropertyDescriptor(e,a):l;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,a,l);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(c=(i<3?n(c):i>3?n(e,a,c):n(e,a))||c);return i>3&&c&&Object.defineProperty(e,a,c),c},b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mItems=[],e.mItems2=[],e.mSelectedItem=null,e}return d(e,t),e.prototype.mounted=function(){var t=this;this.$http.get("/weapon.json").then((function(e){t.mItems=e.data}))},e.prototype.selectedItem=function(){return this.mSelectedItem},e=k([i["a"]],e),e}(i["d"]),I=b,P=I,A=(a("f48c"),Object(h["a"])(P,y,M,!1,null,null,null)),j=A.exports,C=function(){var t=function(e,a){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])},t(e,a)};return function(e,a){function l(){this.constructor=e}t(e,a),e.prototype=null===a?Object.create(a):(l.prototype=a.prototype,new l)}}(),g=function(t,e,a,l){var n,i=arguments.length,c=i<3?e:null===l?l=Object.getOwnPropertyDescriptor(e,a):l;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,a,l);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(c=(i<3?n(c):i>3?n(e,a,c):n(e,a))||c);return i>3&&c&&Object.defineProperty(e,a,c),c},B=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mMap={MechaBase_Attack:{label:"攻击",value:null},MechaBase_SkillBlastInjuryPct:{label:"技能爆伤(%)",value:null},SkillIncrease_AttackPct:{label:"攻击增加(%)",value:null},SkillIncrease_InjuryPct:{label:"伤害增加(%)",value:null},IntegratedMechaIncrease_AttackPct:{label:"攻击增加(%)",value:null},IntegratedMechaIncrease_InjuryPct:{label:"伤害增加(%)",value:null},Weapon_BaseAttack:{label:"基础攻击",value:null},Weapon_Attack:{label:"主词条攻击",value:null},Weapon_AttackPct:{label:"攻击加成(%)",value:null},Weapon_InjuryPct:{label:"伤害加成(%)",value:null},Weapon_BlastInjuryPct:{label:"爆伤加成(%)",value:null},Cockpit_Attack:{label:"主词条攻击",value:null},Cockpit_AttackPct:{label:"攻击加成(%)",value:null},Cockpit_InjuryPct:{label:"伤害加成(%)",value:null},Cockpit_BlastInjuryPct:{label:"爆伤加成(%)",value:null},Leg_Attack:{label:"主词条攻击",value:null},Leg_AttackPct:{label:"攻击加成(%)",value:null},Leg_InjuryPct:{label:"伤害加成(%)",value:null},Leg_BlastInjuryPct:{label:"爆伤加成(%)",value:null},Mount_BaseAttack:{label:"基础攻击",value:null},Mount_Attack:{label:"主词条攻击",value:null},Mount_AttackPct:{label:"攻击加成(%)",value:null},Mount_InjuryPct:{label:"伤害加成(%)",value:null},Mount_BlastInjuryPct:{label:"爆伤加成(%)",value:null},ChipA_BaseAttack:{label:"基础攻击",value:null},ChipA_Attack:{label:"主词条攻击",value:null},ChipA_AttackPct:{label:"攻击加成(%)",value:null},ChipA_InjuryPct:{label:"伤害加成(%)",value:null},ChipA_BlastInjuryPct:{label:"爆伤加成(%)",value:null},ChipB_BaseAttack:{label:"基础攻击",value:null},ChipB_Attack:{label:"主词条攻击",value:null},ChipB_AttackPct:{label:"攻击加成(%)",value:null},ChipB_InjuryPct:{label:"伤害加成(%)",value:null},ChipB_BlastInjuryPct:{label:"爆伤加成(%)",value:null},EqedBlastRate:{label:"装备后暴击率",value:null}},e.mMechaBase=[e.mMap.MechaBase_Attack,e.mMap.MechaBase_SkillBlastInjuryPct],e.mSkillIncrease=[e.mMap.SkillIncrease_AttackPct,e.mMap.SkillIncrease_InjuryPct],e.mIntegratedMechaIncrease=[e.mMap.IntegratedMechaIncrease_AttackPct,e.mMap.IntegratedMechaIncrease_InjuryPct],e.mWeapon=[e.mMap.Weapon_Attack,e.mMap.Weapon_AttackPct,e.mMap.Weapon_InjuryPct,e.mMap.Weapon_BlastInjuryPct,e.mMap.Weapon_BaseAttack],e.mCockpit=[e.mMap.Cockpit_Attack,e.mMap.Cockpit_AttackPct,e.mMap.Cockpit_InjuryPct,e.mMap.Cockpit_BlastInjuryPct],e.mLeg=[e.mMap.Leg_Attack,e.mMap.Leg_AttackPct,e.mMap.Leg_InjuryPct,e.mMap.Leg_BlastInjuryPct],e.mMount=[e.mMap.Mount_Attack,e.mMap.Mount_AttackPct,e.mMap.Mount_InjuryPct,e.mMap.Mount_BlastInjuryPct,e.mMap.Mount_BaseAttack],e.mChipA=[e.mMap.ChipA_Attack,e.mMap.ChipA_AttackPct,e.mMap.ChipA_InjuryPct,e.mMap.ChipA_BlastInjuryPct,e.mMap.ChipA_BaseAttack],e.mChipB=[e.mMap.ChipB_Attack,e.mMap.ChipB_AttackPct,e.mMap.ChipB_InjuryPct,e.mMap.ChipB_BlastInjuryPct,e.mMap.ChipB_BaseAttack],e.mEqedBlastInjury=[e.mMap.EqedBlastRate],e}return C(e,t),Object.defineProperty(e.prototype,"notMaster",{get:function(){var t=this.$refs.WeaponSelector?this.$refs.WeaponSelector.selectedItem():null,e=t||1,a=this.v(this.mMap.MechaBase_Attack)/(1+this.v(this.mMap.SkillIncrease_AttackPct)/100),l=a+this.v(this.mMap.Weapon_BaseAttack)+this.v(this.mMap.Mount_BaseAttack)+this.v(this.mMap.ChipA_BaseAttack)+this.v(this.mMap.ChipB_BaseAttack),n=this.v(this.mMap.Weapon_Attack)+this.v(this.mMap.Cockpit_Attack)+this.v(this.mMap.Leg_Attack)+this.v(this.mMap.Mount_Attack)+this.v(this.mMap.ChipA_Attack)+this.v(this.mMap.ChipB_Attack),i=this.v(this.mMap.Weapon_AttackPct)/100+this.v(this.mMap.Cockpit_AttackPct)/100+this.v(this.mMap.Leg_AttackPct)/100+this.v(this.mMap.Mount_AttackPct)/100+this.v(this.mMap.ChipA_AttackPct)/100+this.v(this.mMap.ChipB_AttackPct)/100+this.v(this.mMap.SkillIncrease_AttackPct)/100,c=l+l*i+n+l*(this.v(this.mMap.IntegratedMechaIncrease_AttackPct)/100),r=this.v(this.mMap.IntegratedMechaIncrease_InjuryPct)/100+this.v(this.mMap.SkillIncrease_InjuryPct)/100+this.v(this.mMap.Weapon_InjuryPct)/100+this.v(this.mMap.Cockpit_InjuryPct)/100+this.v(this.mMap.Leg_InjuryPct)/100+this.v(this.mMap.Mount_InjuryPct)/100+this.v(this.mMap.ChipA_InjuryPct)/100+this.v(this.mMap.ChipB_InjuryPct)/100,s=this.criticalMagnification,u=this.v(this.mMap.EqedBlastRate)/100,o=u>1?1:u<0?0:u,p=.857*c*e*(r>0?1+r:1),v=.857*c*e*((r>0?1+r:1)+s-1),m=p+(v-p)*o;return{attack:Number(c.toFixed(2)),damage:Number(m.toFixed(2))}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"master",{get:function(){return{attack:Number((this.notMaster.attack?1*this.notMaster.attack:0).toFixed(2)),damage:null}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"criticalMagnification",{get:function(){var t=this.v(this.mMap.MechaBase_SkillBlastInjuryPct)+this.v(this.mMap.Weapon_BlastInjuryPct)+this.v(this.mMap.Cockpit_BlastInjuryPct)+this.v(this.mMap.Leg_BlastInjuryPct)+this.v(this.mMap.Mount_BlastInjuryPct)+this.v(this.mMap.ChipA_BlastInjuryPct)+this.v(this.mMap.ChipB_BlastInjuryPct);return Number((2+t/100).toFixed(2))},enumerable:!0,configurable:!0}),e.prototype.v=function(t){return t&&t.value?Number(t.value):0},e.prototype.mounted=function(){document.title="重装战姬伤害计算器"},e.prototype.startCalc=function(){},e=g([Object(i["a"])({components:{ValueGroup:f,WeaponSelector:j}})],e),e}(i["d"]),S=B,O=S,w=(a("8315"),Object(h["a"])(O,l,n,!1,null,null,null));e["default"]=w.exports},"9f50":function(t,e,a){},cc18:function(t,e,a){"use strict";var l=a("fca3"),n=a.n(l);n.a},f3e8:function(t,e,a){},f48c:function(t,e,a){"use strict";var l=a("f3e8"),n=a.n(l);n.a},fca3:function(t,e,a){}}]);
//# sourceMappingURL=chunk-24868512.7939c658.js.map