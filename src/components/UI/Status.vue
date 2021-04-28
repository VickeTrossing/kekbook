<template>
  <base-card id="base-message">
    <div class="outer-div">
      <p>
        <img id="img-id" src="../../icons/fi-rr-user.svg" alt />
        <span id="text-id">{{ messages }}</span>
        <base-button id="delete-button" @click="deleteItem">Delete</base-button>
      </p>
      <base-button class="like-button" @click="likeCounter">
        <img src="../../icons/like2.png" alt />
        {{ like }}
      </base-button>
      <base-button class="comment-button" @click="activeComment">Comment</base-button>
    </div>
    <div v-if="commentIsActive" class="comment-section">
      <input type="text" placeholder="Write a comment" v-model="comment" />
      <base-button class="post-button" @click="postComments">Post</base-button>
      <li v-for="comment in comments" :key="comment.id">
        <base-card>{{ comment.comment }} ff</base-card>
      </li>
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
      postedComments: []
    }
  },

  props: ['messages', 'id'],

  methods: {
    deleteItem() {
      const deleteUrl = 'https://kekbook-5f818-default-rtdb.firebaseio.com/status-post/' + this.id + '.json';
      fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      });
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
    },


    postComments() {
      const postId = 'https://kekbook-5f818-default-rtdb.firebaseio.com/status-post/' + this.id + '.json';

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

      this.comment = '';
      this.loadComments();
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
  min-width: 10px;
  background-color: rgb(240, 240, 240);
}

span {
  margin-left: 100px;
}

#base-message {
  border-radius: 40px;
  min-height: 50px;
  max-height: 500px;
  text-align: center;
  padding-bottom: 50px;
  /* border: solid red; */
}
</style>