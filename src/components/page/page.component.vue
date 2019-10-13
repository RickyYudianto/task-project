<template src="./page.component.html"></template>
<style scoped lang="scss" src="./page.component.scss"></style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Card } from '../../models/card.model';
import CardListComponent from '../card-list/card-list.component.vue';
import StatusListComponent from '../status-list/status-list.component.vue';

@Component({
  components: { CardListComponent, StatusListComponent },
})
export default class PageComponent extends Vue {

  constructor() {
    super();
  }
}
</script>