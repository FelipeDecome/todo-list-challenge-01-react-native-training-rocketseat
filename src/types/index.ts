import uuid from 'react-native-uuid';

export class Task {
  public readonly id: string;

  constructor(
    public isDone: boolean,
    public title: string,
    id: string = uuid.v4() as string
  ) {
    this.id = id;
  }

  toggle() {
    this.isDone = !this.isDone;
    return new Task(this.isDone, this.title, this.id);
  }

  static create(title: string) {
    return new Task(false, title);
  }
}
