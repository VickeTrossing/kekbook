<template>
  <nav>
    <div class="logo-class">KekBook
      <div class="slot-div">
      <slot>Welcome, {{ name }}</slot>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['name']

}
</script>

<style scoped>
nav {
  border-radius: 12px;
  box-shadow: 0 0px 10px rgba(46, 46, 46, 0.26);
  background-color: rgb(43, 49, 65);
  margin-top: 0px !important;
}

.logo-class {
  text-align: start;
  padding: 10px;
  padding-left: 30px;
  color: #42b883;
  font-size: 40px;
  font-weight: 400 !important;
  text-shadow: 0px 0px 2px #42b883;
}

.slot-div{
  float: right;
  color: white;
  font-size: 20px;
  text-shadow: none;
  padding: 10px;
}
</style>