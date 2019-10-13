export class Card {
  private id: number;
  private title: string;
  private description: string;

  constructor(id: number = 0, title: string = '', description: string = '') {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}
