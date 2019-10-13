import { shallowMount } from '@vue/test-utils';

import StatusListComponent from './status-list.component.vue';

describe('StatusListComponent', () => {
  const wrapper = shallowMount(StatusListComponent);
  const data = wrapper.vm.$data;

  it('should create component', () => {
    expect(StatusListComponent).toBeTruthy();
    expect(data.todoList.length).toEqual(1);
    expect(data.inProgressList.length).toEqual(1);
    expect(data.doneList.length).toEqual(1);
  });
});
