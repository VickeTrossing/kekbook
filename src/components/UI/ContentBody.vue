<template>
  
<base-card id="base-card">
  <status>{{  }}</status>
</base-card>

  
</template>

<script>
import Status from './Status.vue'

export default{
  components: { Status },
  props: ['status-message']
  
  }
</script>


<style scoped>

#base-card{
  height: 1000px;
  min-width: 1200px;
  /* border: solid red; */
  /* margin: 100px !important; */
}

</style>