import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { CousesList } from '../model/couses-list';
import { CoursesService } from '../service/service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<CousesList[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private service: CoursesService,
    public dialog: MatDialog,
  ) {
    // this.refresh();
    this.courses$ = this.service.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos.');
          return of([])
        })
      );
  }
  
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  
  // refresh() {
  // this.courses$ = this.service.list()
  //   .pipe(
  //     catchError(error => {
  //       this.onError('Erro ao carregar cursos.');
  //       return of([])
  //     })
  //   );
  // }

  ngOnInit(): void {
  }



}
