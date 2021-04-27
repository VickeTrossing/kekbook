<template>
  <base-card id="base-card">
    <status class="status-class" v-for="post in posts" :messages="post.message" :key="post.id" :id="post.id"></status>
  </base-card>
</template>

<script>
import Status from './Status.vue'

export default {
  components: { Status },
  // props: ['messages'],

  data() {
    return {
      posts: [],
      error: null
    }
  },

  mounted() {
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
            id: id
          });

          console.log(data);
        }
        console.log(results);
        this.posts = results;
      }).catch((error) => {
        console.log(error);
      })
      console.log(this.id);
    }
  },

}
</script>


<style scoped>
#base-card {
  height: 1000px;
  min-width: 1200px;
  text-align: center;
  /* border: solid red; */
  /* margin: 100px !important; */
}
</style>