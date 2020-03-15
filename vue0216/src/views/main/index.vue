<template>         
  <div>
    首页 home
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import login from '@/common/api';

  export default {
    name: 'Index',
    data(){
			return {
			  
			}
    },
    computed:{
      ...mapGetters(['userInfo']),
    },
    mounted(){
      console.log(this.userInfo);
    },
    methods: {
    }    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/mixin';
  
</style>
 
