import { Component, OnInit, Input } from '@angular/core';
import { MapTo } from '@adobe/cq-angular-editable-components';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items: object[];

  constructor() { }

  ngOnInit() {
    console.log("Initialized List:");
    console.log(this.items);
  }
}

const ListEditConfig = {
  emptyLabel: 'List',

  isEmpty: function(componentData) {
    return !componentData || !componentData.items || componentData.items.length < 1;
  }
};

MapTo('wknd-events/components/content/list')(ListComponent, ListEditConfig);
