import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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
  displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private service: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
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

  add() {
    this.router.navigate(['new'], { relativeTo: this.activeRoute })
  }

  ngOnInit(): void {
  }
}
