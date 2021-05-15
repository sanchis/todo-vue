import { v4 as uuidv4 } from 'uuid'

export class Todo {
  public readonly id = uuidv4()
  public title: string = '';
  public done: boolean = false;

  constructor (title: string, done:boolean = false) {
    this.title = title
    this.done = done
  }

  /**
   * Toggle between states done/undone for this todo
   */
  public toggle () {
    this.done = !this.done
  }
}
