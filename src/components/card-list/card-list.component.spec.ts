import { shallowMount, mount } from '@vue/test-utils';

import CardListComponent from './card-list.component.vue';
import { Card } from '../../models/card.model';

describe('CardListComponent', () => {
  const wrapper = mount(CardListComponent);
  const data = wrapper.vm.$data;

  it('should create component', () => {
    expect(CardListComponent).toBeTruthy();
    expect(data.cardList.length).toEqual(3);
  });

  it('should update dialogVisibility when onAdd called', () => {
    const btnAdd = wrapper.find('.btn-add');
    btnAdd.trigger('click');

    expect(data.dialogVisible).toBeTruthy();
  });

  it('should add new task to list when onSubmit called', () => {
    const dataTest = {
      counterId: 10,
      title: 'Task 1',
      description: 'This is Task 1',
    };
    data.counterId = dataTest.counterId;
    data.form = new Card(dataTest.counterId, dataTest.title, dataTest.description);

    const btnSubmit = wrapper.find('.btn-submit');
    btnSubmit.trigger('click');

    const cardList = data.cardList;
    expect(cardList.length).toEqual(4);
    expect(cardList[cardList.length - 1].id).toEqual(++dataTest.counterId);
    expect(cardList[cardList.length - 1].title).toEqual(dataTest.title);
    expect(cardList[cardList.length - 1].description).toEqual(dataTest.description);
  });
});
