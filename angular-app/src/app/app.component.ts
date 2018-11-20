import {Component } from '@angular/core';
import {Constants, ModelManager} from "@adobe/cq-spa-page-model-manager";
import {AEMContainerComponent, AEMResponsiveGridComponent, MapTo} from "@adobe/cq-angular-editable-components";
import { TransferState, makeStateKey } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private state: TransferState;

  path: string;
  items: string[];
  itemsOrder: string[];

  constructor() {
    const key = makeStateKey('_angular_initial_state');

    ModelManager.initialize().then(model => {
      this.path = model[Constants.PATH_PROP];
      this.items = model[Constants.ITEMS_PROP];
      this.itemsOrder = model[Constants.ITEMS_ORDER_PROP];
    });
  }
}

MapTo('wknd-events/components/structure/app')(AEMContainerComponent);
MapTo('wcm/foundation/components/responsivegrid')(AEMResponsiveGridComponent);
