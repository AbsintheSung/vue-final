<script setup></script>
<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/">Navbar</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link me-4 active" to="/">
            Home
            <span class="sr-only">(current)</span>
          </router-link>
          <router-link class="nav-item nav-link me-4" to="/products">Product</router-link>
          <!-- <router-link class="nav-item nav-link me-4" to="detail">Detail</router-link> -->
          <router-link class="nav-item nav-link" to="/cart"><FontAwesomeIcon :icon="['fas', 'shopping-cart']" /></router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped></style>
