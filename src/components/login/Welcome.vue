<template>
  <div class="popup">
    <div class="popup-inner">
      <base-card class="base-card">
        <slot></slot>
      </base-card>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.base-card{
  background-color: white;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgb(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>