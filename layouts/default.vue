<template>
  <header>
    <Container>
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/movies">Movies</NuxtLink>
        <NuxtLink to="/async">async test</NuxtLink>
      </nav>
    </Container>
  </header>
  <main>
    <slot />
  </main>

  <footer>

  </footer>
</template>

<style>
  header {
    border-bottom: 1px solid white;
    padding: 20px 0;
  }

  nav {
    display: flex;
    gap: 12px;
  }
</style>