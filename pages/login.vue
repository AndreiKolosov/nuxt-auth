<script setup lang="ts">
const api = useApi();

const isPasswordVisible = ref<boolean>(false);

const email = ref<string>('');
const password = ref<string>('');

const onSubmit = async () => {
  api
    .login({ email: email.value, password: password.value })
    .then((res) => {
      console.log(res);
    })
    .then(() => {
      email.value = '';
      password.value = '';
    })
    .catch((e) => {
      console.log(e);
    });
};
</script>

<template>
  <h1 class="title">Login page</h1>
  <form class="form" @submit.prevent="onSubmit">
    <h2>Log in</h2>

    <label class="label">
      <span>Email</span>
      <input class="input" type="text" v-model="email" />
    </label>

    <label class="label">
      <span>Password</span>
      <input class="input" v-model="password" :type="isPasswordVisible ? 'text' : 'password'" />
      <button type="button" class="password-btn" @click="isPasswordVisible = !isPasswordVisible">
        {{ !isPasswordVisible ? '🙈' : '🐵' }}
      </button>
    </label>
    <button class="submit-btn" type="submit">Submit</button>
  </form>
</template>

<style scoped>
.form {
  justify-self: center;
  margin-top: 20vh;
  padding: 30px;
  display: grid;
  row-gap: 20px;
  border: 1px solid seagreen;
  border-radius: 15px;
}

.label {
  position: relative;
  display: grid;
  grid-template-columns: 1fr max-content;
  column-gap: 10px;
  align-items: center;
}

.input {
  background-color: transparent;
  border: 1px solid seagreen;
  height: 40px;
  width: 300px;
  border-radius: 8px;
  padding: 0 40px 0 10px;
  color: #fff;
}

.password-btn {
  position: absolute;
  right: 5px;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
}

.submit-btn {
  width: 100%;
  min-height: 30px;
  border: none;
  background-color: seagreen;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
}
</style>
