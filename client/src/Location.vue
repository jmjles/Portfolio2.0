<template>
    <div>
        <headerT/>
        <article class="container">
            <h1 class="display-1">
                Location Lookup
                <hr>
                Work In Progress
                <hr>
            </h1>
            <div>
                <input type="text" placeholder="Enter A Place" id="PSearch" size="30px;"/>
                <span id="Search" class="btn btn-outline-secondary">
                    Search
                </span>
                <br/>
                <h1 id="place"></h1>
                <div id="ltime">
                    Local Time:<span id ="localtime"></span>
                </div>
            </div>
            <div id="mw">
                <div id="map"></div>
                <div id="weather"></div>
            </div>
                <div id="theeinfoarea"></div>
        </article>
        <footerT/>
    </div>
</template>

<script>
import headerT from './components/headerT.vue'
import footerT from './components/footerT.vue'
import locationFinder from './assets/js/locationFinder.js'
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