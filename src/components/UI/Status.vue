<template>
  <base-card id="base-message">
    <div>
      <p>
        <img src="../../icons/fi-rr-user.svg" alt />
        <span>{{ status-mesage }}</span>
        <base-button id="delete-button">Delete</base-button>
      </p>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ['status-message'],

}
</script>

<style scoped>
div img {
  height: 40px;
  border: solid rgb(197, 197, 197);
  border-radius: 25px;
  margin-top: 1px;
  text-align:end ;
}

 p{
   text-align: start;
 }

img{
  /* -ms-transform: translateY(50%); */
  /* transform: translateY(50%); */
}

p #delete-button{
  text-align: end;
  border: solid red;
}

#base-message {
  border-radius: 40px;
}
</style>