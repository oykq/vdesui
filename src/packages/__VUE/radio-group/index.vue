   
<script lang="tsx">
import { defineComponent } from '@vue/runtime-core';
import { ref } from 'vue';

export default defineComponent({
  name: 'vdes-radio-group',
  
  props: {
     name: {
      type: String,
      default: ''
    }
  },
 
  listeners: {
    '@radio-change': '_changeHandler',
    '@radio-group-update': '_radioGroupUpdateHandler'
  },
  mounted () {
    // this._resetRadioGroupValue(this.radioList.length - 1)
  },
  created () {
    // this.$dispatch('Form', 'uni-form-group-update', {
    //   type: 'add',
    //   vm: this
    // })
  },
  beforeDestroy () {
    // this.$dispatch('Form', 'uni-form-group-update', {
    //   type: 'remove',
    //   vm: this
    // })
  },
  setup() {
    function _changeHandler($event, vm){
      // const index = radioList.indexOf(vm)
      // this._resetRadioGroupValue(index, true)
      // this.$trigger('change', $event, {
      //   value: vm.radioValue
      // })
    }
    
    return{
      radioList: []
    }


  }
});
</script>
<style>
	vdes-radio-group[hidden] {
		display: none;
	}
</style>
