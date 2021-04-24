<template>
  <navigation></navigation>
  <div class="body">

    <div class="side-bar">
      <side-bar></side-bar>
    </div>

    <div class="status-update">
      <update-status></update-status>
    </div>

    <div class="content-body">
      <content-body></content-body>
    </div>

  </div>
</template>

<script>
export default {}

</script>
    

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

.status-update{
  margin-left: 20%;
  padding-top: 20px;
  /* border: solid red; */
}


.content-body{
 margin-left: 20%;
 /* border: solid red; */
 padding-top: 10px;
}

.side-bar {
  width: 20%;
  margin-top: 0px !important;
  padding-top: 0px;
  float: left;
}
</style>
