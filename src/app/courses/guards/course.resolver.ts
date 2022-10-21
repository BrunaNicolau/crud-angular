import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, TimeoutError } from 'rxjs';
import { CoursesList } from '../model/couses-list';
import { CoursesService } from '../service/service.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<CoursesList> {

  constructor(private service: CoursesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CoursesList> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ _id: '', name: '', category: '' });
  }
}
