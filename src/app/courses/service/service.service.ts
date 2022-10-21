import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoursesList } from '../model/couses-list';
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
    return this.httpClient.get<CoursesList[]>(this.API)
      .pipe(
        first(),
        // delay(900),
        // tap(courses => console.log(courses))
      );
  }

  save(record: Partial<CoursesList>) {
    if (record._id) {
      return this.update(record)
    } else {
      return this.create(record)
    }
  }

  private create(record: Partial<CoursesList>) {
    return this.httpClient.post<CoursesList>(this.API, record).pipe(first());
  }

  private update(record: Partial<CoursesList>) {
    return this.httpClient.put<CoursesList>(`${this.API}/${record._id}`, record).pipe(first());
  }

  loadById(id: string) {
    return this.httpClient.get<CoursesList>(`${this.API}/${id}`);
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
