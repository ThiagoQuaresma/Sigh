import { AgendaModule } from './../agenda/agenda.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaComponent } from './consulta.component';
import { ConsultaRoutingModule } from './consulta-routing.module';
import { CadastrarConsultaComponent } from './cadastrar-consulta/cadastrar-consulta.component';
import { CadastrarConsultaRoutingModule } from './cadastrar-consulta/cadastrar-consulta-routing.module';



@NgModule({     
    imports: [CommonModule,
              ConsultaRoutingModule,],
    declarations: [ConsultaComponent]
})

export class ConsultaModule{

}