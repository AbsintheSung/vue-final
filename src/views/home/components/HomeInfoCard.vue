<script setup></script>
<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4 mt-md-4" v-for="item in 3" :key="item">
        <div class="card border-0 mb-4">
          <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="card-img-top rounded-0" alt="..." />
          <div class="card-body text-center">
            <h4>Lorem ipsum</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
