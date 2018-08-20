<template>
  <div class="posts">
    <h1>Signalements</h1>
    <div v-if="posts.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewPost' }" class="">Ajuter un signalement</router-link>
      </div>
      <table>
        <tr>
          <td>Date</td>
          <td>Creneau</td>
          <td>Alerteur</td>
          <td>Animal</td>
          <td>Couleur</td>
          <td>Adresse</td>
          <td>Etat</td>
          <td>collar</td>
          <td>Action</td>
        </tr>
          <tr v-for="post in posts" :key="post.id">
          <td>{{ post.date }}</td>
          <td>{{ post.timeWindow }}</td>
          <td>{{ post.witness }}</td>
          <td>{{ post.animal }}</td>
          <td>{{ post.color }}</td>
          <td>{{ post.adress }}</td>
          <td>{{ post.state }}</td>
          <td>{{ post.collar }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id } }">Editer</router-link> |
            <a href="#" @click="deletePost(post._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      Aucun animal n'est à signaler <br /><br />
      <router-link v-bind:to="{ name: 'NewPost' }" class="add_post_link">Ajuter un signalement</router-link>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    async deletePost (id) {
      await PostsService.deletePost(id)
      this.$router.push({ name: 'Posts' })
      this.getPosts()
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
  width:10%;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
