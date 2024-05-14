<script setup>
  const { data, pending } = await useFetch('https://reqres.in/api/users/1?delay=3', {
    lazy: true,
  })

</script>

<template>
  <div v-if="pending">
    loading
  </div>
  <div v-else>
    <h2>{{ data }}</h2>
  </div>
</template>