<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'

  const inputData: Ref<string> = ref('test');
  const test: Ref<string | number> = ref(5111);
  const inputTest2: Ref<string> = ref('');

  const computedValue = computed(() => {
    console.log('computed')
    return `${inputData.value} - ${test.value}`
  })

</script>

<template>
  <button>
    {{ test }}
  </button>
  <input type="text" v-model="inputData"/>
  <input type="text" v-model="inputTest2"/>

  <h2>{{ inputData }}</h2>
  <p>{{ computedValue }}</p>
</template>