<template>
  <img class="logo" src="../assets/resto.png"/>
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="enter name" />
    <input type="text" v-model="email" placeholder="enter email" />
    <input type="password" v-model="password" placeholder="enter password" />
    <button @click="signUp">Sign up</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'SignUp',
    data() {
      return {
        name:'',
        email: '',
        password: ''
      }
    },

    methods: {
      async signUp()
        {
          let result = await axios.post('http://localhost:3000/users', {
            email: this.email,
            password: this.password,
            name: this.name
          });

          if(result.status == 201){
            localStorage.setItem("user-info", JSON.stringify(result.data));
            this.$router.push({ name: "Home"});
          }
        }
    },
    mounted() {
      let user = localStorage.getItem('user-info');
      if(user) {
        this.$router.push({ name: "Home"});
      }
    }
  }
</script>

<style>
</style>