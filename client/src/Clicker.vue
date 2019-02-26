<template>
    <div>
        <headerT/>
        <article class="container">
            <h1 class="display-1">Clicker Game</h1>
            <hr>
            <h2 class="display-2">Work in Progress</h2>
      <div class="row">
        <div id="gameinf" class="col-2 container-fluid" data-bind="with: currentChar()">
              <p class="display-2 text-center" data-bind="text: name"></p>
              <p class="display-3 text-center" data-bind="text: title"></p>
              <p class="display-4 text-center" data-bind="text: counter"></p>
            <table>
                <thead>
                    <h2 class="text-center">Levels</h2>
                </thead>
                <tr>
                  <td>
                      Noob: 5
                  </td>
                </tr>
                <tr>
                  <td>
                      Beginner: 10
                  </td>
                </tr>
                <tr>
                  <td>
                      Amatuer: 15
                  </td>
                </tr>
                <tr>
                  <td>
                      Adventurer: 20
                  </td>
                </tr>
                <tr>
                  <td>
                      Thumping Rabbit: 25
                  </td>
                </tr>
                <tr>
                  <td>
                    Pro: 30
                  </td>
                </tr>
                <tr>
                    <td>
                      Tapping Ninja: 35
                    </td>
                </tr>
                <tr>
                  <td>
                      GodLike: 40
                  </td>
                </tr>
              </table>
        </div>
        <div class="col" data-bind="with: currentChar()">
            <img id="gpicmain" data-bind="attr: {src: url}, click: $parent.Counter"/>
        </div>
        <div class="col-3">
          <h2>Characters:</h2>
          <div data-bind="foreach: charList">
            <p class="text-center" data-bind="text: name, click: $parent.setChar"></p>
            <img id="gpic" data-bind="attr: { src: url }, click: $parent.setChar"/>
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