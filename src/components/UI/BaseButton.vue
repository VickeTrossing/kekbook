<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  font: inherit;
  border: none;
  background-color: #42b883;
  color: white;
  padding: 0.5rem 2rem;
  cursor: pointer;
  border-radius: 20px;
}

button:hover,
button:active {
  background-color: #369269;
  border-color: #369269;
}
</style>