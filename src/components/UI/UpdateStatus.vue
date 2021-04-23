<template>
  <base-card>
    <div class="text-div">
      <img src alt="profile pic" /><i class="pi pi-check"></i>
      <input type="text" placeholder="Type something" />
    </div>
    <i class="pi pi-check" style="fontSize: 2rem"></i>
  </base-card>
</template>

<script>
export default {

}
</script>

<style scoped>
input {
  border-radius: 12px;
  border: 1px solid rgb(201, 201, 201);
  box-shadow: 0 0px 5px rgba(151, 151, 151, 0.26);
  width: 65%;
  height: 30px;
  text-align: left;
  padding-left: 10px;
}

.text-div {
  text-align: left;
}
</style>