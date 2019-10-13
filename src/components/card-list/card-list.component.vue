<template src="./card-list.component.html"></template>
<style scoped lang="scss" src="./card-list.component.scss"></style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Draggable from 'vuedraggable';

import { LabelConstant } from '../../constants/label.constant';
import { PlaceholderConstant } from '../../constants/placeholder.constant';
import { Card } from '../../models/card.model';
import CardComponent from '../card/card.component.vue';

@Component({
  components: { CardComponent, Draggable },
})
export default class CardListComponent extends Vue {
  private readonly constant = {
    label: LabelConstant,
    placeholder: PlaceholderConstant,
  };

  private cardList: Card[] = new Array<Card>();
  private counterId: number = 6;
  private dialogVisible: boolean = false;
  private form: Card = new Card();

  protected created() {
    this.cardList.push(new Card(1, 'Task A', 'Refactor using Kotlin'));
    this.cardList.push(new Card(2, 'Task B', 'Update using Typescript'));
    this.cardList.push(new Card(3, 'Task C', 'There is a bug when user click button X'));
  }

  private onSubmit() {
    const formData = Object.assign(new Card(), this.form, {
      id: ++this.counterId,
    });
    this.cardList.push(formData);

    this.form = new Card();
    this.dialogVisible = false;
  }
}
</script>