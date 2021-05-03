<template>
  <base-button @click="loadPosts()">Update</base-button>
  <base-card id="base-card">
    <status class="status-class" v-for="post in posts" :messages="post.message" :key="post.id" :id="post.id"></status>
  </base-card>
</template>

<script>
import Status from './Status.vue'

export default {
  components: { Status },
  provide(){
    return{
      updateStatus: this.loadPosts
    }
  },
  // props: ['messages'],

  data() {
    return {
      posts: [],
      comments: [],
      error: null
    }
  },

  mounted() {
    this.loadPosts();
  },

  updated() {
    this.loadPosts();
  },

  methods: {

    loadPosts(){
      fetch('https://kekbook-5f818-default-rtdb.firebaseio.com/status-post.json').then((res) => {
        if(res.ok){
          return res.json();
        }
      }).then((data) => {
        const results = [];

        for(const id in data){
          results.unshift({
            message: data[id].message,
            id: id,
            comments: data[id].comments
          });

          console.log(data);
        }
        console.log(results);
        this.posts = results;
      }).catch((error) => {
        console.log(error);
      })
    }
  },

}
</script>


<style scoped>
#base-card {
  /* height: 1000px; */
  min-width: 1200px;
  max-height: 100%;
  text-align: center;
  /* border: solid red; */
  /* margin: 100px !important; */
}
</style>