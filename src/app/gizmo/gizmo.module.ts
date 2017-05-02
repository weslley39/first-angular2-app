import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { GizmoComponent }    from './gizmo.component';

import { GizmoRoutingModule } from './gizmo.route';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GizmoRoutingModule
  ],
  declarations: [
    GizmoComponent
  ]
})
export class GizmoModule {}