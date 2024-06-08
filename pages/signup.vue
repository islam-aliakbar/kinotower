<script setup lang="ts">

const authStore = useAuthStore();
const gendersStore = useGendersStore();
const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const birthday = ref('');
const gender = ref(0);
const errorMessage = ref('');
const signup = async () => {
  try {
    if (name.value && email.value && password.value && birthday.value && gender.value) {
      await authStore.signup({
        fio: name.value,
        email: email.value,
        password: password.value,
        birthday: birthday.value,
        gender_id: gender.value,
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
          <h5 class="card-title text-center">Registration</h5>
          <div v-if="errorMessage" class="alert alert-danger" role="alert">
            {{ errorMessage }}
          </div>
          <form action="" @submit.prevent="signup" class="">
            <label for="name" class="form-label">name</label>
            <input v-model="name" type="text" class="form-control mb-3" id="name" placeholder="name">

            <label for="mail" class="form-label">mail</label>
            <input v-model="email" type="email" class="form-control mb-3" id="mail" placeholder="name@example.com">

            <label for="password" class="form-label">password</label>
            <input v-model="password" type="password" class="form-control mb-3" id="password" placeholder="password">

            <label for="birthday" class="form-label">birthday</label>
            <input v-model="birthday" type="date" class="form-control mb-4" id="birthday"
                   placeholder="name@example.com">

            <select v-model="gender" class="form-select mb-3" aria-label="Default select example">
              <option selected>gender</option>
              <option v-for="gender in gendersStore.genders" :key="gender.id" :value="gender.id">{{
                  gender.name
                }}
              </option>

            </select>

            <button class="btn btn-dark mt-3 d-block m-auto" style="padding: 10px 150px" type="submit">signup</button>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>