<template>
    <div>
        <headerT/>
        <article>
            <h1 class="display-1">Clicker Game</h1>
        </article>
        <footerT/>
    </div>
</template>

<script>
import headerT from './components/headerT.vue'
import footerT from './components/footerT.vue'

export default {
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
#portrait{
    border-radius: 50px;
    height: 300px;
    width: 200px;
    float: left;
    padding: 10px;
}
hr{
    border-color: white;
}
</style>