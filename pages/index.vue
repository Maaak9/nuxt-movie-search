<script setup lang="ts">

</script>

<template>
  <Container>
    <div>
      <h4>Home page?</h4>
    </div>
    <NextLink :to="'/movies'">testst</NextLink>
    <div>
      <Button></Button>
    </div>
    <PrimeSkeleton height="100px" width="100px"></PrimeSkeleton>
    <PrimeButton>Testtst</PrimeButton>
  </Container>
</template>