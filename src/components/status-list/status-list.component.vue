<template src="./status-list.component.html"></template>
<style scoped lang="scss" src="./status-list.component.scss"></style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { LabelConstant } from '../../constants/label.constant';
import { Card } from '../../models/card.model';
import StatusCardComponent from '../status-card/status-card.component.vue';

@Component({
  components: { StatusCardComponent },
})
export default class StatusListComponent extends Vue {
  private readonly constant = {
    label: LabelConstant,
  };
  private todoList: Card[] = new Array<Card>();
  private inProgressList: Card[] = new Array<Card>();
  private doneList: Card[] = new Array<Card>();

  protected created() {
    this.todoList.push(new Card(4, 'Task D', 'Update style'));
    this.inProgressList.push(new Card(5, 'Task E', 'Remove button Y'));
    this.doneList.push(new Card(6, 'Task F', 'Fix Bug #001'));
  }
}
</script>