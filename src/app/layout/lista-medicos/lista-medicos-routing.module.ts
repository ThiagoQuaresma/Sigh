import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaMedicosComponent } from './lista-medicos.component';

const routes: Routes = [
    {
        path:'', component: ListaMedicosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ListaMedicosRoutingModule{

}