<template>
  <div id="WeaponSelector">
    <span class="title">装备武器选择</span>
    <div class="items">
      <div class="item-type">
        <span class="name">武器类型</span>
        <select class="value" v-model="mItems2"><option v-for="(item,index) in mItems" :key="index" :label="item.name" :value="item.items"></option></select>
      </div>
      <div class="item-name">
        <span class="name">武器名称</span>
        <select class="value"  v-model="mSelectedItem"><option v-for="(item,index) in mItems2" :key="index" :label="item.name" :value="item.value"></option></select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class WeaponSelector extends Vue {

    mItems = []

    mItems2 = []
    
    mSelectedItem = null;

    mounted(){
      this.$http.get("/weapon.json").then(res=>{
        this.mItems = res.data
      })
    }

    selectedItem(){
        return this.mSelectedItem;
    }

}
</script>

<style lang="stylus">
#WeaponSelector {
  font-size: 14px;

  .title {
    padding: 5px 7px;
    display: inline-block;
  }

  .items {
    display: inline-block;
    width: 100%;

    &>div {
      display: inline-block;
      padding: 5px 2px;
      background: #ffffff;
      float: left;
      margin-left: 1px;

      .name {
        float: left;
        display: inline-block;
        text-align: center;
      }

      .value {
        display: inline-block;
        margin-left: 2px;
        border: 1px solid #00000032;
      }
    }

    .item-type {
      width: 40%;
      .name{
          width 60px
      }
      .value{
          width calc(100% - 67px)
      }
    }

    .item-name {
      width: calc(60% - 10px);
      .name{
          width 60px
      }
      .value{
          width calc(100% - 67px)
      }
    }
  }
}
</style>