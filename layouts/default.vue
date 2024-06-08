<script setup lang="ts">
import router from "#app/plugins/router";

const authStore = useAuthStore();
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <h2><nuxt-link to="/" class="navbar-brand" href="#">Logo Kinotower</nuxt-link></h2>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <nuxt-link to="/" class="navbar-brand" href="#">home</nuxt-link>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">

          <div v-if="!authStore.authData" class="d-flex">
            <p class="nav-item me-3">
              <a @click.prevent="$router.push('/signin')" class="nav-link active" aria-current="page" href="#">signIn</a>
            </p>
            <p class="nav-item">
              <a @click.prevent="$router.push('/signup')" class="nav-link active" href="#">signUp</a>
            </p>
          </div>

          <div v-else class="d-flex">
            <p class="nav-item me-3">
              <a @click.prevent="$router.push('/profile')" class="nav-link active" aria-current="page" href="#">{{ authStore.authData.fio }}</a>
            </p>
            <p class="nav-item">
              <a class="nav-link active" href="#" @click.prevent="authStore.signout(), $router.push('/')">Exit</a>
            </p>
          </div>
      </div>
    </div>
  </nav>

  <div class="container">
    <slot/>
  </div>

  <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="col-md-4 mb-0 text-body-secondary">&copy; 2024 Kinotower</p>

      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      </ul>
    </footer>
  </div>
</template>
