<template>
  <nav class="navbar border-bottom">
    <div class="container-fluid">
      <router-link class="navbar-brand fs-6 fw-bold text-uppercase text-white" to="/">
        <img src="@/assets/star-wars-logo.png" alt="Logo" height="55" class="d-inline-block align-text-top">
      </router-link>
      <router-link class="login text-decoration-none fs-6 fw-bold text-uppercase text-white" to="#">
        Login
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
};
</script>