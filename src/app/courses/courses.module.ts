import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CoursesService } from './service/service.service';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './container/courses/courses.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesFormComponent } from './container/courses-form/courses-form.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesFormComponent,
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
