<template>
  <Header />
  <h1>Hello User, welcome to the Update Restaurant page</h1>
  <form class="add">
  <input type="text" name="name" placeholder="Enter name" v-model="restaurant.name"/>
  <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact"/>
  <input type="text" name="address" placeholder="Enter address" v-model="restaurant.address"/>
  <button type="button" @click="updateRestaurant">Update</button>
  </form>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
  name: 'UpdatePage',
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
    async updateRestaurant() {
      const id = (this.$route.params.id);
      let result = await axios.put(`http://localhost:3000/restaurants/${id}`, {
        name: this.restaurant.name,
        contact: this.restaurant.contact,
        address: this.restaurant.address
      });

      if(result.status == 200){
        this.$router.push({ name: "Home"});
      }
    }
  },

  async mounted() {
      let user = localStorage.getItem('user-info');
      if(!user) {
        this.$router.push({ name: "SignUp"});
      }
      const id = (this.$route.params.id);
      const result = await axios.get(`http://localhost:3000/restaurants/${id}`)

      this.restaurant = result.data;
    }
}
</script>