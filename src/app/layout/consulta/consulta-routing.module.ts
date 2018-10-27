import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta.component';

const routes: Routes = [
    {
        path: '',
        data:{
            title: 'new-consulta'
        },
        children: [
            {
                path: '',
                component: ConsultaComponent,
                data: {
                    title: 'new-consulta'
                }
            },
            {
                path: 'new-consulta',
                loadChildren: './new-consulta/new-consulta.module#NewConsultaModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ConsultaRoutingModule{

}