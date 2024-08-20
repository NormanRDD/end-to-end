<template>
  <div id="app">
    <div v-if="!isButtonHidden">
      <button @click="handleClick">Запуск</button>
    </div>
    <div v-else>
      <div id="number">{{ randomOddNumber }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isButtonHidden = ref(false);
const randomOddNumber = ref(null);

function handleClick() {
  // Генерация случайного нечетного числа
  randomOddNumber.value = Math.floor(Math.random() * 100) * 2 + 1;

  // Скрытие кнопки
  isButtonHidden.value = true;
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20vh;
}
#number {
  font-size: 2em;
  margin-top: 20px;
}
</style>
