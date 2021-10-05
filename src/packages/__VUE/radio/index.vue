   
<script lang="tsx">
import { defineComponent } from '@vue/runtime-core';
import { ref } from 'vue';

export default defineComponent({
  name: 'vdes-radio',

  props: {
    value: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false

    },
    color: {
      type: String,
      default: '#007AFF'
    }
  },
  setup(props, { slots }) {
    const { value, checked, disabled, color } = props

    const checkVal = ref(checked)

    const onClick = () => {
      if(disabled){
        return;
      }
      if(checkVal.value == true){
        checkVal.value = false
        
      } else {
        checkVal.value = true
      }
      
    }

    return () => {
     

      return( <div 
        class="vdes-radio"
        onClick={onClick}>
        <div class="vdes-radio-wrapper">
          <div class={`vdes-radio-input ${checkVal.value ? 'vdes-radio-input-checked' : ''}`} />
        </div>

      </div>
      );
    };


  }
});
</script>
<style>
.vdes-radio {
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  cursor: pointer;
}
.vdes-radio[hidden] {
  display: none;
}
.vdes-radio[disabled] {
  cursor: not-allowed;
}
.vdes-radio .vdes-radio-wrapper {
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-align-items: center;
  align-items: center;
  vertical-align: middle;
}
.vdes-radio .vdes-radio-input {
  -webkit-appearance: none;
  appearance: none;
  margin-right: 5px;
  outline: 0;
	border: 1px solid #D1D1D1;
  background-color: #ffffff;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  position: relative;
}
.vdes-radio:not([disabled]) .vdes-radio-input:hover {
  border-color: #007aff;
}
.vdes-radio .vdes-radio-input.vdes-radio-input-checked:before {
  font: normal normal normal 14px/1 "vdesui";
  content: "\EA08";
  color: #ffffff;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -48%) scale(0.73);
  -webkit-transform: translate(-50%, -48%) scale(0.73);
}
.vdes-radio .vdes-radio-input.vdes-radio-input-checked{
  background-color: #09bb07;
  border-color: #09bb07;
}
.vdes-radio .vdes-radio-input.vdes-radio-input-disabled {
    background-color: #E1E1E1;
		border-color: #D1D1D1;
}
.vdes-radio .vdes-radio-input.vdes-radio-input-disabled:before {
		color: #ADADAD;
}
.vdes-radio-group {
  display: block;
}
</style>
