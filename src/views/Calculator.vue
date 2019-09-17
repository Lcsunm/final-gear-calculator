<template>
  <div id="CalculatorIndex">
    <div class="top-layout">
      <ValueGroup title="机甲基础数值" :values="mMechaBase" />
      <ValueGroup title="技能增幅数值" :values="mSkillIncrease" />
      <ValueGroup title="一体机部件增幅数值" :values="mIntegratedMechaIncrease" />
      <ValueGroup title="武器属性" :values="mWeapon" :lineSize="2" />
      <ValueGroup title="座舱属性" :values="mCockpit" :lineSize="2" />
      <ValueGroup title="腿部属性" :values="mLeg" :lineSize="2" />
      <ValueGroup title="挂载属性" :values="mMount" :lineSize="2" />
      <ValueGroup title="芯片A属性" :values="mChipA" :lineSize="2" />
      <ValueGroup title="芯片B属性" :values="mChipB" :lineSize="2" />
      <ValueGroup title="暴击爆伤数值" :values="mEqedBlastInjury" :lineSize="1" />
      <WeaponSelector ref="WeaponSelector" />
    </div>
    <div class="bottom-layout">
      <span class="critical-magnification">暴击伤害倍率：{{criticalMagnification}}</span>
      <div class="left-layout">
        <div class="not-master">
          <span class="title">非专精</span>
          <span>攻击面板：{{notMaster.attack}}</span>
          <span>理想秒伤：{{notMaster.damage}}</span>
        </div>
        <div class="master">
          <span class="title">专精</span>
          <span>攻击面板：{{master.attack}}</span>
          <span>理想秒伤：{{master.damage}}</span>
        </div>
      </div>
      <div class="right-layout">
        <button v-show="false" @click="startCalc">计算</button>
        <button v-show="false" style="margin-top:10px;">清空</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import ValueGroup from "@/components/ValueGroup.vue";
import WeaponSelector from "@/components/WeaponSelector.vue";

interface ValueBean {
  label: string;
  value: number | null;
}

@Component({
  components: {
    ValueGroup,
    WeaponSelector
  }
})
export default class Calculator extends Vue {

  $refs!: {
    WeaponSelector : WeaponSelector
  }

  mMap = {
    MechaBase_Attack: {
      label: "攻击",
      value: null
    },
    MechaBase_SkillBlastInjuryPct: {
      label: "技能爆伤(%)",
      value: null
    },
    SkillIncrease_AttackPct: {
      label: "攻击增加(%)",
      value: null
    },
    SkillIncrease_InjuryPct: {
      label: "伤害增加(%)",
      value: null
    },
    IntegratedMechaIncrease_AttackPct: {
      label: "攻击增加(%)",
      value: null
    },
    IntegratedMechaIncrease_InjuryPct: {
      label: "伤害增加(%)",
      value: null
    },
    Weapon_BaseAttack: {
      label: "基础攻击",
      value: null
    },
    Weapon_Attack: {
      label: "主词条攻击",
      value: null
    },
    Weapon_AttackPct: {
      label: "攻击加成(%)",
      value: null
    },
    Weapon_InjuryPct: {
      label: "伤害加成(%)",
      value: null
    },
    Weapon_BlastInjuryPct: {
      label: "爆伤加成(%)",
      value: null
    },
    Cockpit_Attack: {
      label: "主词条攻击",
      value: null
    },
    Cockpit_AttackPct: {
      label: "攻击加成(%)",
      value: null
    },
    Cockpit_InjuryPct: {
      label: "伤害加成(%)",
      value: null
    },
    Cockpit_BlastInjuryPct: {
      label: "爆伤加成(%)",
      value: null
    },
    Leg_Attack: {
      label: "主词条攻击",
      value: null
    },
    Leg_AttackPct: {
      label: "攻击加成(%)",
      value: null
    },
    Leg_InjuryPct: {
      label: "伤害加成(%)",
      value: null
    },
    Leg_BlastInjuryPct: {
      label: "爆伤加成(%)",
      value: null
    },
    Mount_BaseAttack: {
      label: "基础攻击",
      value: null
    },
    Mount_Attack: {
      label: "主词条攻击",
      value: null
    },
    Mount_AttackPct: {
      label: "攻击加成(%)",
      value: null
    },
    Mount_InjuryPct: {
      label: "伤害加成(%)",
      value: null
    },
    Mount_BlastInjuryPct: {
      label: "爆伤加成(%)",
      value: null
    },
    ChipA_BaseAttack: {
      label: "基础攻击",
      value: null
    },
    ChipA_Attack: {
      label: "主词条攻击",
      value: null
    },
    ChipA_AttackPct: {
      label: "攻击加成(%)",
      value: null
    },
    ChipA_InjuryPct: {
      label: "伤害加成(%)",
      value: null
    },
    ChipA_BlastInjuryPct: {
      label: "爆伤加成(%)",
      value: null
    },
    ChipB_BaseAttack: {
      label: "基础攻击",
      value: null
    },
    ChipB_Attack: {
      label: "主词条攻击",
      value: null
    },
    ChipB_AttackPct: {
      label: "攻击加成(%)",
      value: null
    },
    ChipB_InjuryPct: {
      label: "伤害加成(%)",
      value: null
    },
    ChipB_BlastInjuryPct: {
      label: "爆伤加成(%)",
      value: null
    },
    EqedBlastRate: {
      label: "装备后暴击率",
      value: null
    }
  };

  mMechaBase: Array<ValueBean> = [
    this.mMap.MechaBase_Attack,
    this.mMap.MechaBase_SkillBlastInjuryPct
  ];
  mSkillIncrease: Array<ValueBean> = [
    this.mMap.SkillIncrease_AttackPct,
    this.mMap.SkillIncrease_InjuryPct
  ];
  mIntegratedMechaIncrease: Array<ValueBean> = [
    this.mMap.IntegratedMechaIncrease_AttackPct,
    this.mMap.IntegratedMechaIncrease_InjuryPct
  ];
  mWeapon: Array<ValueBean> = [
    this.mMap.Weapon_Attack,
    this.mMap.Weapon_AttackPct,
    this.mMap.Weapon_InjuryPct,
    this.mMap.Weapon_BlastInjuryPct,
    this.mMap.Weapon_BaseAttack,
  ];
  mCockpit: Array<ValueBean> = [
    this.mMap.Cockpit_Attack,
    this.mMap.Cockpit_AttackPct,
    this.mMap.Cockpit_InjuryPct,
    this.mMap.Cockpit_BlastInjuryPct
  ];

  mLeg: Array<ValueBean> = [
    this.mMap.Leg_Attack,
    this.mMap.Leg_AttackPct,
    this.mMap.Leg_InjuryPct,
    this.mMap.Leg_BlastInjuryPct
  ];
  mMount: Array<ValueBean> = [
    this.mMap.Mount_Attack,
    this.mMap.Mount_AttackPct,
    this.mMap.Mount_InjuryPct,
    this.mMap.Mount_BlastInjuryPct,
    this.mMap.Mount_BaseAttack,
  ];

  mChipA: Array<ValueBean> = [
    this.mMap.ChipA_Attack,
    this.mMap.ChipA_AttackPct,
    this.mMap.ChipA_InjuryPct,
    this.mMap.ChipA_BlastInjuryPct,
    this.mMap.ChipA_BaseAttack,
  ];
  mChipB: Array<ValueBean> = [
    this.mMap.ChipB_Attack,
    this.mMap.ChipB_AttackPct,
    this.mMap.ChipB_InjuryPct,
    this.mMap.ChipB_BlastInjuryPct,
    this.mMap.ChipB_BaseAttack,
  ];

  mEqedBlastInjury: Array<ValueBean> = [this.mMap.EqedBlastRate];

  get notMaster(): { attack: number | null; damage: number | null } {
    const _selectedWeapon:any = this.$refs.WeaponSelector ? this.$refs.WeaponSelector.selectedItem() : null;
    const _selectedWeaponValue = _selectedWeapon ? _selectedWeapon : 1;

    const _机甲基本攻击 = this.v(this.mMap.MechaBase_Attack) / (1+this.v(this.mMap.SkillIncrease_AttackPct)/100)
    const _基础攻击 = _机甲基本攻击 + 
                      this.v(this.mMap.Weapon_BaseAttack) +  
                      this.v(this.mMap.Mount_BaseAttack) +  
                      this.v(this.mMap.ChipA_BaseAttack) +  
                      this.v(this.mMap.ChipB_BaseAttack)
    const _词条攻击 = this.v(this.mMap.Weapon_Attack) + 
                      this.v(this.mMap.Cockpit_Attack) + 
                      this.v(this.mMap.Leg_Attack) + 
                      this.v(this.mMap.Mount_Attack) + 
                      this.v(this.mMap.ChipA_Attack) +
                      this.v(this.mMap.ChipB_Attack)
    const _攻击加成 = this.v(this.mMap.Weapon_AttackPct)/100 + 
                      this.v(this.mMap.Cockpit_AttackPct)/100 + 
                      this.v(this.mMap.Leg_AttackPct)/100 + 
                      this.v(this.mMap.Mount_AttackPct)/100 + 
                      this.v(this.mMap.ChipA_AttackPct)/100 +
                      this.v(this.mMap.ChipB_AttackPct)/100 +
                      this.v(this.mMap.SkillIncrease_AttackPct)/100
    const _面板攻击 = _基础攻击 + _基础攻击 * _攻击加成 + _词条攻击 + _基础攻击 * (this.v(this.mMap.IntegratedMechaIncrease_AttackPct)/100)

    const _所有增伤 = this.v(this.mMap.IntegratedMechaIncrease_InjuryPct)/100 + 
                      this.v(this.mMap.SkillIncrease_InjuryPct)/100 + 
                      this.v(this.mMap.Weapon_InjuryPct)/100 + 
                      this.v(this.mMap.Cockpit_InjuryPct)/100 + 
                      this.v(this.mMap.Leg_InjuryPct)/100 + 
                      this.v(this.mMap.Mount_InjuryPct)/100 + 
                      this.v(this.mMap.ChipA_InjuryPct)/100 + 
                      this.v(this.mMap.ChipB_InjuryPct)/100;

    const _暴击增害 = this.criticalMagnification;

    const _暴击率1 = this.v(this.mMap.EqedBlastRate)/100;
    const _暴击率 = _暴击率1 > 1 ? 1 : _暴击率1 < 0 ? 0 : _暴击率1;

    const _普通伤害 = _面板攻击 * 0.857 * _selectedWeaponValue * (_所有增伤 > 0 ? (1+_所有增伤) : 1);

    const _暴击伤害 = _面板攻击 * 0.857 * _selectedWeaponValue * ((_所有增伤 > 0 ? (1+_所有增伤) : 1) + _暴击增害 - 1);
    
    const _理想秒伤 = _普通伤害 + (_暴击伤害 - _普通伤害) * _暴击率
    return {
      attack: Number(_面板攻击.toFixed(2)),
      damage: Number(_理想秒伤.toFixed(2))
    };
  }
  get master(): { attack: number | null; damage: number | null }  {
    return {
      attack: Number((this.notMaster.attack ? this.notMaster.attack * 1.0 : 0).toFixed(2)),
      damage: null
    };
  }

  get criticalMagnification(): number {
    const _value =
      this.v(this.mMap.MechaBase_SkillBlastInjuryPct) +
      this.v(this.mMap.Weapon_BlastInjuryPct) +
      this.v(this.mMap.Cockpit_BlastInjuryPct) +
      this.v(this.mMap.Leg_BlastInjuryPct) +
      this.v(this.mMap.Mount_BlastInjuryPct) +
      this.v(this.mMap.ChipA_BlastInjuryPct) +
      this.v(this.mMap.ChipB_BlastInjuryPct);
    return Number((2 + (_value / 100)).toFixed(2));
  }

  v(item: ValueBean): number {
    if (item) {
      if (item.value) {
        return Number(item.value);
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  mounted() {
    //console.log(process.env.BASE_URL);
    document.title = "重装战姬伤害计算器"
  }

  startCalc() {
    //this.criticalMagnification;
    //console.log(this.mMap);
  }
}
</script>

<style lang="stylus">
#CalculatorIndex {
  position: relative;

  .top-layout {
    display: inline-block;
    width: 100%;
    padding-bottom: 110px;
  }

  .bottom-layout {
    display: inline-block;
    position: fixed;
    width: 100vw;
    height: 80px;
    z-index: 99;
    left: 0;
    bottom: 0;
    background: #000000aa;
    color: #ffffff;
    font-size: 14px;
    padding: 10px;

    .critical-magnification {
      display: inline-block;
      float: left;
      width: 100%;
    }

    .left-layout {
      width: 70%;

      .not-master, .master {
        float: left;
        width: 50%;

        .title {
          display: inline-block;
          width: 100%;
        }

        &>span {
          display: inline-block;
          width: 100%;
        }
      }
    }

    .right-layout {
      display: inline-block;
      width: calc(30% - 20px);

      &>button {
        display: block;
        margin-left: 20px;
      }
    }
  }
}
</style>