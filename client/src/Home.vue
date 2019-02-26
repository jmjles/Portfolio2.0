<template>
    <div>
        <headerT/>
        <article class="container">
          <h1 class="display-3 text-center">Working for a Better Tomorrow</h1>
          <hr>
          <br>
            <p>
                I have always dreamt of being a Developer.
                <br>
                Creating things that came up in my mind was always a thrill to me and will always will be!
                <br>
                Thank you for your time.
            </p>
            <router-link to="/Projects" class="btn btn-secondary">Projects</router-link>
        </article>
        <footerT/>
    </div>
</template>
<script>
import headerT from './components/headerT.vue'
import footerT from './components/footerT.vue'

export default {
  name: 'app',
  components: {
    headerT,
    footerT
  }
}
</script>
<style scoped>
article {
  margin-top:10%;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 20px;
}
hr{
    border-color: white;
}
</style>
