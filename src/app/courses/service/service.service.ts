import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CousesList } from '../model/couses-list';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): CousesList[] {
    return [
      { _id: '123', name: 'angular', category: 'front' }
    ];
  }
}
