<template>
    <div>
        <headerT/>
        <article class="container">
            <div class="row">
                <div v-for="{name , Description, link} in projects" :key="name" class="col-sm">
                    <div>
                        <h2 class="text-center"> {{ name }}</h2>
                        <p>{{ Description }}</p>
                        <br>
                        <router-link :to="link" class="btn-secondary btn">Try Me</router-link>
                    </div>
                </div>
            </div>
        </article>
        <footerT/>
    </div>
</template>

<script>
import headerT from './components/headerT.vue'
import footerT from './components/footerT.vue'

const projects = [
    { name: 'Location Lookup', Description : 'Get The latest news, weather and map of a location with a simple search.', link: '/Projects/Location'},
    { name: 'Clicker Game', Description : 'Click on the character to lvl up!', link: '/Projects/Clicker'},
    { name: 'MEVN Stack', Description : 'You are using it :)', link: '/'}
]
export default {
  name: 'app',
  components: {
    headerT,
    footerT
  },
  data() {
      return {
          projects
      }
  },
}
</script>
<style scoped>
article {
  margin-top:10%;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 20px;
}
</style>