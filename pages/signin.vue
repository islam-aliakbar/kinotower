<script setup lang="ts">
const authStore = useAuthStore();
const router = useRouter();
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const signin = async () => {
  try {
    if (email.value && password.value) {
      await authStore.signin({
        email: email.value,
        password: password.value,
      });
      router.push('/')
    }
  } catch (e: any) {
    errorMessage.value = e.message
  }
}
</script>

<template>
  <div class="row">
    <div class="col">
      <div class="card m-auto mt-5" style="width: 45rem;">
        <div class="card-body">
          <h5 class="card-title text-center">SignIn</h5>
          <div v-if="errorMessage" class="alert alert-danger" role="alert">
            {{ errorMessage }}
          </div>
          <form action="" class="" @submit.prevent="signin">
            <label for="mail" class="form-label">mail</label>
            <input v-model="email" type="email" class="form-control mb-3" id="mail" placeholder="name@example.com">

            <label for="password" class="form-label">password</label>
            <input v-model="password" type="password" class="form-control mb-3" id="password" placeholder="password">

            <button class="btn btn-dark mt-3 d-block m-auto" style="padding: 10px 150px" type="submit">signup</button>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>