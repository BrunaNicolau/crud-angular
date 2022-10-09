import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CousesList } from '../model/couses-list';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(
    private httpClient: HttpClient
  ) { }

  list() {
    return this.httpClient.get<CousesList[]>(this.API)
      .pipe(
        first(),
        delay(900),
        tap(courses => console.log(courses))
      );
  }
}
