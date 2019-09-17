<template>
  <div id="ValueGroup">
    <span class="title">{{title}}</span>
    <div class="items">
      <div class="item" :style="itemStyle" v-for="(item,index) in values1" :key="index">
        <span class="label">{{item.label}}</span>
        <input class="value" type="number" v-model="item.value" />
      </div>
    </div>
    <div class="button-layout">
      <button @click="save">保存</button>
      <button @click="load">读取</button>
      <button @click="clear">清理</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from "vue-property-decorator";
@Component
export default class ValueGroup extends Vue {
  @Prop({ default: "标题" }) readonly title!: string;
  @Prop({ default: 0 }) readonly lineSize!: number;

  @PropSync("values", { type: Array }) values1!: Array<any>;

  get itemStyle(){
    return {
      'width': "calc(100% / " + (this.lineSize > 0 ? this.lineSize : this.values1.length) + " - 5px)"
    }
  }

  save(){
    window.localStorage.setItem(this.title,JSON.stringify(this.values1));
  }

  load(){
    const _json = window.localStorage.getItem(this.title);
    if (!_json) {
      return;
    }
    const _array = JSON.parse(_json);
    if (!_array) {
      return;
    }
    for (let i = 0; i < this.values1.length; i++) {
      let item = this.values1[i];
      for (let j = 0; j < _array.length; j++) {
        let _obj = _array[j];
        if (_obj.label == item.label) {
          item.value = _obj.value;
          break;
        }
      }
    }
  }

  clear(){
    this.values1.forEach(item => {
      item.value = null
    });
  }

}
</script>

<style lang="stylus">
#ValueGroup {
  font-size 14px
  .title {
    padding 5px 7px
    display inline-block
  }

  .items {
    display inline-block
    width 100%
    .item {
      display inline-block
      padding 5px 2px
      background #ffffff
      float left
      margin-left 1px
      .label {
        float left
        display inline-block
        width calc(60% - 10px)
        text-align center
      }
      .value {
        display inline-block
        width 40%
        margin-left 2px
        border 1px solid #00000032
      }
    }
  }
  .button-layout{
    text-align right
    &>button{
      margin 10px 10px 2px 0px
    }
  }
}
</style>