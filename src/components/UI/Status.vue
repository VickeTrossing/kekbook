<template>
  <base-card id="base-message">
    <div class="outer-div">
      <p>
        <img id="img-id" src="../../icons/fi-rr-user.svg" alt />
        <span id="text-id">{{ messages }}</span>
        <base-button id="delete-button" @click="deleteItem">Delete</base-button>
      </p>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ['messages', 'id'],

  methods: {
    deleteItem() {
      const deleteUrl = 'https://kekbook-5f818-default-rtdb.firebaseio.com/status-post/' + this.id + '.json';
      fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      });
    }
  }

}
</script>

<style scoped>
div img {
  height: 40px;
  border: solid rgb(197, 197, 197);
  border-radius: 25px;
  margin-top: 1px;
  text-align: end;
}

p {
  text-align: start;
  margin: 0;
}

#delete-button {
  float: right;
  margin-top: 6px;
}

#text-id {
  padding-bottom: 100px;
  border-radius: 20px;
  padding: 10px;
  background-color: rgb(240, 240, 240);
}

span {
  margin-left: 100px;
}

#base-message {
  border-radius: 40px;
  height: 50px;
  text-align: center;
  /* border: solid red; */
}
</style>