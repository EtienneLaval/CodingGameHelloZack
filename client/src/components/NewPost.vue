<template>
  <div class="posts">
    <h1>Add Post</h1>
      <div class="form">
        <div>
          <input type="text" placeholder="Date" v-model="post.date">
        </div>
        <div>
          <input type="text" placeholder="Creneau" v-model="post.timeWindow">
        </div>
        <div>
          <input type="text" placeholder="Alerteur" v-model="post.witness">
        </div>
        <div>
            <select v-model="post.animal" name="animal" placeholder="tes">
              <option value="" disabled selected>Animal</option>
              <option value="chat">Chat</option>
              <option value="chien">Chien</option>
              <option value="parroquet">Parroquet</option>
              <option value="lapin">Lapin</option>
            </select>
          </div>
        <div>
          <input type="text" placeholder="Couleur" v-model="post.color">
        </div>
        <div>
          <input type="text" placeholder="Adresse" v-model="post.adress">
        </div>
        <div>
         <select v-model="post.state" name="etat">
            <option value="" disabled selected>Etat</option>
            <option value="très faible">Très faible</option>
            <option value="faible">Faible</option>
            <option value="moyen">Moyen</option>
            <option value="bon">Bon</option>
          </select>
        </div>
        <div>
          <p>Collier</p>
          <input type="checkbox" name="Collier" v-model="post.collar">
        </div>
        <div>
          <button class="app_post_btn" @click="addPost">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'NewPost',
  data () {
    return {
      post: {}
      // description: ''
    }
  },
  methods: {
    async addPost () {
      this.post.animal = this.post.animal.toLowerCase()
      await PostsService.addPost(this.post)
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
<style type="text/css">
.form {
  margin: auto;
  max-width: 600px;
  width : 80%;
}
.form input, .form textarea , .form select{
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form input[type="checkbox"]{
  width: 10%;
}
.form div {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form div *{
  flex-grow: 1;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
