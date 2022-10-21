import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoursesList } from '../../model/couses-list';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input() courses: CoursesList[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor() { }

  ngOnInit(): void { }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(course: CoursesList) {
    this.edit.emit(course);
  }

  onDelete(course: CoursesList) {
    this.remove.emit(course);
  }
}
