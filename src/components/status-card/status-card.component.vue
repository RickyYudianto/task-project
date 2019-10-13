<template src="./status-card.component.html"></template>
<style scoped lang="scss" src="./status-card.component.scss"></style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Draggable from 'vuedraggable';

import { Card } from '../../models/card.model';
import CardComponent from '../card/card.component.vue';

@Component({
  components: { CardComponent, Draggable },
})
export default class StatusCardComponent extends Vue {
  @Prop() private cardList!: Card[];
  @Prop() private taskStatus!: string;
}
</script>