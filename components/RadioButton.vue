<template>
  <div class="radio-wrap">
    <input 
      type="radio" 
      class="custom-radio" 
      :id="`radio-${id}`" 
      :name="radioName" 
      :value="name"
      :checked="name === value"
      @change="onRadioChange"
    >
    <label :for="`radio-${id}`">
      <slot></slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'RadioBox',

    props: {
      value: {
        type: [Number, String, Boolean],
        default: ''
      },

      radioName: {
        type: String,
        default: "radio-name"
      },

      name: {
        type: [Number, String, Boolean],
        default: ""
      }
    },

    data() {
      return {
        id: null,
        checked: this.value
      }
    },

    mounted () {
      this.id = this._uid
    },

    methods: {
      onRadioChange(value) {
        console.log('value', value.target.value)
        this.checked = value.target.value
        this.$emit('input', value.target.value)
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "~/assets/css/partials/_variables.sass";

.radio-wrap {
  margin-bottom: 4px;
}

.custom-radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-radio+label {
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  user-select: none;
  font-size: 13px;
  cursor: pointer;
}
.custom-radio+label::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #606E77;
  border-radius: 2px;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  transition: all 0.2s ease;
  border-radius: 50%;
  padding: 2px;
}

.custom-radio:checked+label::after {
  content: '';
  border-color: $red;
  background-color: $red;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 4px;
  left: 3px;
  border-radius: 50%;
}

.custom-radio:checked+label::before {
  content: '';
  border-color: $red;
}
</style>