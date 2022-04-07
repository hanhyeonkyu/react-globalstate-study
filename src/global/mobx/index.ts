import { action, computed, makeObservable, observable } from "mobx";

class ObservableTodoStore {
  count: number = 0;
  calcount: number = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      calcount: observable,
      report: computed,
      plus: action,
      minus: action,
    });
    // autorun(() => console.log(this.report));
  }

  get report() {
    return `You Used Counter ${this.calcount}times. and The result is ${this.count}`;
  }

  plus() {
    this.count += 1;
    this.calcount += 1;
  }
  minus() {
    this.count -= 1;
    this.calcount += 1;
  }
}

const observableTodoStore = new ObservableTodoStore();
export default observableTodoStore;
