<template>
  <div class="app">
    <PageComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageComponent from './components/page/page.component.vue';

@Component({
  components: {
    PageComponent,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;

  min-height: 722px;
  padding: 5px;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.status {
    border-bottom: 1.5px solid #d8d8d8;
    color: #0e4d3d;
    font-weight: bold;

    padding: 10px;
}

.card-wrapper {
  border: 0.5px solid;
  box-shadow: 2px 2px #d8d8d8;

  margin: 10px 0;
}

.round {
    border-radius: 25px;
    padding-bottom: 10px;
}

</style>
