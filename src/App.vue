<template>
  <navigation :name="givenName"></navigation>
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
  <welcome v-if="namePopup === true">
    <h1>Hello enter your name pls</h1>
    <input type="text" v-model="givenName">
    <base-button @click="yourName">Sumbit</base-button>
    </welcome>
</template>

<script>

export default {

  provide(){
    return{
      username: this.givenName
    }
  },


  data(){
    return{
      namePopup: true,
      name: '',
      givenName: ''
    };
  },

  methods: {
    yourName(){
      console.log(this.givenName);
      this.namePopup = false;
    }
  }
}

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

button::-moz-focus-inner {
  border: 0;
}

.status-update {
  margin-left: 20%;
  padding-top: 20px;
  /* border: solid red; */
}

.content-body {
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
