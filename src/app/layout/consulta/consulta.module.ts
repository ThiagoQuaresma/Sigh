import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaComponent } from './consulta.component';
import { ConsultaRoutingModule } from './consulta-routing.module';

@NgModule({     
    imports: [CommonModule,
              ConsultaRoutingModule],
    declarations: [ConsultaComponent]
})

export class ConsultaModule{

}