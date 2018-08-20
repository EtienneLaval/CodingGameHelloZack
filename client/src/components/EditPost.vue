<template>
  <div class="posts">
    <h1>Edit Post</h1>
      <div class="form">
        <div>
          <p>{{post.date}}</p>
          <input type="text" placeholder="Date" v-model="post.date">
        </div>
        <div>
          <p>{{post.timeWindow}}</p>
          <input type="text" placeholder="Creneau" v-model="post.timeWindow">
        </div>
        <div>
          <p>{{post.witness}}</p>
          <input type="text" placeholder="Alerteur" v-model="post.witness">
        </div>
        <div>
            <p>{{post.animal}}</p>
            <select v-model="post.animal" name="animal">
              <option value="" disabled selected>Animal</option>
              <option value="chat">Chat</option>
              <option value="chien">Chien</option>
              <option value="parroquet">Parroquet</option>
              <option value="lapin">Lapin</option>
            </select>
          </div>
        <div>
          <p>{{post.color}}</p>
          <input type="text" placeholder="Couleur" v-model="post.color">
        </div>
        <div>
          <p>{{post.adress}}</p>
          <input type="text" placeholder="Adresse" v-model="post.adress">
        </div>
        <div>
        <p>{{post.state}}</p>
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
          <p>{{post.collar}}</p>
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
  name: 'EditPost',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    async getPost () {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.description = response.data.description
    },
    async updatePost () {
      await PostsService.updatePost({
        id: this.$route.params.id,
        title: this.title,
        description: this.description
      })
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
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
