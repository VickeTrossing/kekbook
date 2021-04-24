<template>
  <div class="outer-div">
    <base-card class="base-card">

      <div class="text-div">
          <img src="../../icons/fi-rr-user.svg" alt />
          <input type="text" placeholder="Type something" />
      </div>

    </base-card>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.base-card {
  border-radius: 40px;
  height: 50px;
}

input {
  border-radius: 20px;
  border: 1px solid rgb(201, 201, 201);
  box-shadow: 0 0px 5px rgba(151, 151, 151, 0.26);
  width: 65%;
  height: 30px;
  text-align: left;
  padding-left: 15px;
  margin-left: 10px;
  margin-top: -1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000px;
  
}

.text-div {
  border: solid red;
  height: inherit;
}


.text-div img {
  height: 40px;
  border: solid rgb(197, 197, 197);
  border-radius: 25px;
  margin-top: 1px;
}

</style>