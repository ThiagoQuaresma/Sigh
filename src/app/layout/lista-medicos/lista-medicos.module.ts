import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaMedicosComponent } from './lista-medicos.component';
import { ListaMedicosRoutingModule } from './lista-medicos-routing.module';

@NgModule({     
    imports: [CommonModule,
              ListaMedicosRoutingModule],
    declarations: [ListaMedicosComponent]
})

export class ListaMedicosModule{

}