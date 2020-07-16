<template>
  <div class="checkbox-wrap" :class="{top: verticalAlign === 'top'}">
    <input 
      type="checkbox" 
      class="custom-checkbox"
      :id="`checkbox-${id}`" 
      :name="name" 
      :checked="checked"
      @change="onCheckboxChange"
    >
    <label :for="`checkbox-${id}`">
      <div>
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'Chekbox',

    props: {
      verticalAlign: {
        type: String,
        default: ""
      },

      value: {
        type: Boolean,
        default: false
      },

      name: {
        type: String,
        default: "checkbox-name"
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
      onCheckboxChange(value) {        
        this.checked = !this.checked
        this.$emit('input', this.checked)
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "~/assets/css/partials/_variables.sass";

.checkbox-wrap {
  margin-bottom: 4px;
  &.top {
    .custom-checkbox+label {
      align-items: flex-start;
      &:before {
        margin-top: 5px;
      }
    }
  }
}

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  font-size: 13px;
  cursor: pointer;
}
.custom-checkbox+label::before {
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
}

.custom-checkbox:checked+label::before {
  border-color: $red;
  background-color: $red;
  border: 1px solid $red;
  background-image: url("../static/images/checkbox.svg");
  background-size: 65%;
  background-position: 50%;
}
</style>