import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteComponent } from './paciente.component';
import { PacienteRoutingModule } from './paciente-routing.module';

@NgModule({     
    imports: [CommonModule,
              PacienteRoutingModule],
    declarations: [PacienteComponent]
})

export class PacienteModule{

}