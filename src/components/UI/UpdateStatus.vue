<template>
  <div class="outer-div">
    <base-card class="base-card">
      <div class="text-div">
        <img src="../../icons/fi-rr-user.svg" alt />
        <input 
        type="text" 
        placeholder="Type something" 
        id="status-message"
        v-model="message"
        />
        <base-button id="base-button" @click="submitMessage">Post</base-button>
      </div>
    </base-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: ''
    };
  },

  methods: {
    submitMessage(){
      console.log(this.message);
    }
  }
}
</script>

<style scoped>
.base-card {
  border-radius: 40px;
  height: 50px;
  width: 800px;
}

#base-button {
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  margin-left: 15px;
}

input {
  border-radius: 20px;
  border: 1px solid rgb(201, 201, 201);
  box-shadow: 0 0px 5px rgba(151, 151, 151, 0.26);
  width: 65%;
  height: 30px;
  text-align: left;
  padding-left: 15px;
  margin-left: 20px;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.text-div {
  /* height: inherit; */
  text-align: left;
}

.text-div img {
  height: 40px;
  border: solid rgb(197, 197, 197);
  border-radius: 25px;
  margin-top: 1px;
}
</style>