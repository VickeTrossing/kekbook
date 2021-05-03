<template>
  <base-card id="base-message">
    <div class="outer-div">
      <p>
        <img id="img-id" src="../../icons/fi-rr-user.svg" alt />
        <span>{{ username }}</span>
        <span id="text-id">{{ messages }}</span>
        <base-button id="delete-button" @click="deleteItem">Delete</base-button>
      </p>
      <base-button class="like-button" @click="likeCounter">
        <img src="../../icons/like2.png" alt />
        {{ like }}
      </base-button>
      <base-button class="comment-button" @click="activeComment">Comment {{ commentCount }}</base-button>
    </div>
    <div v-if="commentIsActive" class="comment-section">
      <input type="text" placeholder="Write a comment" v-model="comment" />
      <base-button class="post-button" @click="postComments">Post {{ username }}</base-button>
      <ul v-if="postedComments">
        <li v-for="comment in postedComments" :key="comment.id" :comment="comment.comment">{{ comment.comment }}</li>
      </ul>
    </div>
  </base-card>
</template>



<script>

export default {


  data() {
    return {
      like: 0,
      commentIsActive: false,
      comment: '',
      postedComments: [],
      commentCount: null
    }
  },

  props: ['messages', 'id'],

  inject: ['username', 'updateStatus'],


  mounted(){
    this.countComments();
  },

  methods: {
    deleteItem() {
      const deleteUrl = 'https://kekbook-5f818-default-rtdb.firebaseio.com/status-post/' + this.id + '.json';
      fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      });

      setTimeout(() => {
            this.updateStatus();
    }, 300);
    },

    countComments(){
      this.postedComments.length = this.commentCount;
      console.log(this.postedComments.length);
    },


    likeCounter() {
      if (this.like === 0) {
        this.like = this.like + 1;
      } else {
        this.like = 0;
      }
    },

    activeComment() {
      this.commentIsActive = !this.commentIsActive;
      this.loadComments();
      this.countComments();
      console.log(this.username);
    },
  


  postComments() {

    const postId = 'https://kekbook-5f818-default-rtdb.firebaseio.com/status-post/' + this.id + '.json';

    if (this.comment.trim() === '') {
      console.log("Stop that, write something")
    } else {
      fetch(postId, {
        method: 'POST',

        headers: {
          'Content-type': 'application/json'
        },

        body: JSON.stringify({
          comment: this.comment,
        }),
      }).then((response) => {
        if (response.ok) {
          console.log("All good in the hood");
        } else {
          throw new Error("Could not send comment");
        }
      }).catch((error) => {
        console.log(error);
      })
    }

    this.comment = '';
    setTimeout(() => {
      this.loadComments();
    }, 300);
  },


  loadComments() {
    const postId = 'https://kekbook-5f818-default-rtdb.firebaseio.com/status-post/' + this.id + '.json';

    fetch(postId).then((res) => {
      if (res.ok) {
        return res.json();
      }
    }).then((data) => {
      const results = [];

      for (const id in data) {
        results.unshift({
          comment: data[id].comment,
          id: id
        });
        console.log(data);
      }
      this.postedComments = results;
    }).catch((error) => {
      console.log(error);
    })
  }

}

}
</script>

<style scoped>
li {
  margin: 2rem auto;
  /* min-width: 10px; */
  min-width: 100px;
  /* width: 100%; */
  padding: 1rem;
  border-radius: 12px;
  border-top-left-radius: 0px;
  background-color: rgb(240, 240, 240);
  text-align: left;
}

ul {
  list-style-type: none;
  padding: 0;
}

.post-button {
  border-radius: 12px;
  margin: 10px;
}

.comment-section {
  padding-top: 10px;
  border-top: 1px solid rgb(216, 216, 216);
  margin: 60px;
  text-align: center;
}

.comment-section input {
  border-radius: 12px;
  border: 1px solid rgb(161, 161, 161);
  padding: 10px;
}

.comment-button {
  margin: 10px;
  float: left;
  height: 40px;
  max-width: 150px;
  -ms-transform: translateY(1%);
  transform: translateY(-25%);
  /* transform: translateX(0%); */
  text-align: center;
  align-content: center;
}

.like-button {
  margin: 10px;
  float: left;
  height: 40px;
  max-width: 150px;
  -ms-transform: translateY(1%);
  transform: translateY(-25%);
  /* transform: translateX(0%); */
  text-align: center;
  align-content: center;
}

.like-button img {
  -ms-transform: translateY(1%);
  transform: translateX(-50%);
  border-radius: 0;
  border: none;
  height: 20px;
  width: 20px;
}

div img {
  -ms-transform: translateY(1%);
  transform: translateY(1%);
  height: 40px;
  border: solid rgb(197, 197, 197);
  border-radius: 25px;
  margin-top: 1px;
  text-align: end;
}

p {
  text-align: start;
  margin: 0;
}

#delete-button {
  -ms-transform: translateY(35%);
  transform: translateY(35%);
  float: right;
  margin-top: 6px;
}

#text-id {
  min-width: 100px;
  max-width: 400px;
  display: inline-block;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 15px;
  margin: 10px;
  margin-bottom: 20px;
  min-width: 10px;
  background-color: rgb(240, 240, 240);
}

span {
  margin-left: 100px;
}

#base-message {
  /* border-radius: 40px; */
  min-height: 50px;
  max-height: 100%;
  text-align: center;
  padding-bottom: 50px;
  border-style: solid;
  border-width: 3px;
  border-image: linear-gradient(45deg, #42b883, rgb(147, 101, 255)) 1;
}
</style>