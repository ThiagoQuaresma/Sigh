import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoComponent } from './agendamento.component';
import { AgendamentoRoutingModule } from './agendamento-routing.module';

@NgModule({     
    imports: [CommonModule,
              AgendamentoRoutingModule],
    declarations: [AgendamentoComponent]
})

export class AgendamentoModule{

}