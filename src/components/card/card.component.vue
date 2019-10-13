<template src="./card.component.html"></template>
<style scoped lang="scss" src="./card.component.scss"></style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Card } from '../../models/card.model';

@Component
export default class CardComponent extends Vue {
  @Prop() private card!: Card;
}
</script>