import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-lead-staging',
  templateUrl: './lead-staging.component.html',
  styleUrls: ['./lead-staging.component.css']
})
export class LeadStagingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todoList = [
    'Development',
    'Test',
    'Deployment',
    'Monitoring'
  ];

  processList = [
    'Database'
  ];

  doneList = [
    'Design'
  ];

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer !== event.container) {

      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex)

    } else {
      moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
    }
  }

}
