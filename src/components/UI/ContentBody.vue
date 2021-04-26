<template>
  <div class="shadow-div">
    <!-- <div class="header">Links lmao test</div> -->
    <div class="body"></div>
  </div>
</template>

<style scoped>
.shadow-div {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 0px !important;
  width: 95%;
  margin-left: 2.5rem !important;
  border-radius: 12px;
  margin-top: 7px !important;
}

.header {
  margin-bottom: 0px;
  padding: 1rem;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: rgb(43, 49, 65);
  color: white;
  text-align: center;
}

.body {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  min-height: 500px;
}

</style>