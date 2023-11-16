<template>
  <Header />
  <h1>Hello User, welcome to the Add Restaurant page</h1>
  <form class="add">
  <input type="text" name="name" placeholder="Enter name" v-model="restaurant.name"/>
  <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact"/>
  <input type="text" name="address" placeholder="Enter address" v-model="restaurant.address"/>
  <button type="button" @click="addRestaurant">Add New Restaurant</button>
  </form>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
  name: 'AddPage',

  components: {
    Header
  },

  data() {
    return {
      restaurant: {
        name: '',
        contact: '',
        address: ''
      }
    }
  },

  methods: {
    async addRestaurant() {
      let result = await axios.post('http://localhost:3000/restaurants', {
        name: this.restaurant.name,
        contact: this.restaurant.contact,
        address: this.restaurant.address
      });

      if(result.status == 201){
        this.$router.push({ name: "Home"});
      }
    }
  },

  mounted() {
      let user = localStorage.getItem('user-info');
      if(!user) {
        this.$router.push({ name: "SignUp"});
      }
    }
}
</script>