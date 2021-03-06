import { Mutator, ObservableSelection, Store } from '@w11k/tydux';
import { Injectable } from '@angular/core';
import { Coordinates } from '@w11k/ngx-present';
import { map } from 'rxjs/operators';

export class HelpState {
  [key: string]: {
    open: boolean
  }
}

export class HelpMutator extends Mutator<HelpState> {
  setOpen(id: string, open: boolean) {
    this.state = {
      ...this.state,
      [id]: {
        ...this.state[id],
        open: open
      }
    };
  }
}

@Injectable({
  providedIn: 'root'
})
export class HelpService extends Store<HelpMutator, HelpState> {

  private registry = new Map<string, number>();
  private readonly separator = '.';

  constructor() {
    super('MoreDetails', new HelpMutator(), new HelpState());
  }

  register(slideCoordinates: Coordinates): Coordinates {
    const oldCounter = this.registry.get(slideCoordinates.join(this.separator));

    let newCounter = 0;
    if (oldCounter !== undefined) {
      newCounter = oldCounter + 1;
    }

    this.registry.set(slideCoordinates.join(this.separator), newCounter);

    return [...slideCoordinates, newCounter];
  }

  deregister(detailsCoordinates: Coordinates) {
    const slideCoordinates = detailsCoordinates.slice(0, -1);

    this.registry.delete(slideCoordinates.join(this.separator));
  }

  open(slideCoordinates: Coordinates) {
    this.mutate.setOpen(slideCoordinates.join(this.separator), true);
  }

  close(slideCoordinates: Coordinates) {
    this.mutate.setOpen(slideCoordinates.join(this.separator), false);
  }

  isOpen(detailsCoordinates: Coordinates): ObservableSelection<boolean> {
    return super
      .select(state => state[detailsCoordinates.join(this.separator)])
      .pipe(map(subState => {
        if (subState !== undefined) {
          return subState.open;
        } else {
          return false;
        }
      }));
  }
}
