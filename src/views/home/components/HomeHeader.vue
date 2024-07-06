<script setup></script>
<template>
  <div class="position-relative">
    <div class="position-absolute" style="top: 0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80); background-position: center center; opacity: 0.1"></div>
    <div class="container d-flex flex-column" style="min-height: 100vh">
      <slot></slot>
      <div class="row justify-content-center my-auto">
        <div class="col-md-4 text-center">
          <h2>Lorem ipsum.</h2>
          <p class="text-muted mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
          <button class="btn btn-dark rounded-0 mt-6">Lorem ipsum.</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
