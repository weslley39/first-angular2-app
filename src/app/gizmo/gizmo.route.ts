import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GizmoComponent }    from './gizmo.component';

const gizmoRoutes: Routes = [
  { path: 'gizmo',  component: GizmoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(gizmoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GizmoRoutingModule { }