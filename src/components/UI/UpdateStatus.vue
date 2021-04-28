<template>
  <div class="outer-div">
    <base-card class="base-card">
      <div class="text-div">
        <img src="../../icons/fi-rr-user.svg" alt />
        <input type="text" placeholder="Type something" status-message="status-message" v-model="message" />
        <base-button id="base-button" @click="submitMessage"><img id="post-icon" src="../../icons/check-mark.png"/>Post</base-button>
      </div>
    </base-card>
  </div>
</template>

<script>


export default {
  data() {
    return {
      message: '',
      comments: [],
      id: null
    };
  },

  methods: {
    submitMessage() {

      if(this.message.trim() === ''){
        console.log("You have to type something");
      }else{

        fetch('https://kekbook-5f818-default-rtdb.firebaseio.com/status-post.json', {
        method: 'POST',

        headers: {
          'Content-type': 'application/json'
        },

        body: JSON.stringify({
          message: this.message,
          comments: this.comments,
          id: this.id
        }),
      }).then((respone) => {
        if(respone.ok){
          console.log("Message sent: " + this.message);
        }else{
          throw new Error("Could not save data");
        }
      }).catch((error) => {
        console.log(error);
      });
      }

      this.message = '';
    }
  },
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
  height: 34px;
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

#post-icon{
  border: none;
  border-radius: 20px;
  height: 15px;
  margin-right: 3px;
  text-align: left;
}
</style>