import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaComponent } from './agenda.component';
import { AgendaRoutingModule } from './agenda-routing.module';

@NgModule({     
    imports: [CommonModule,
              AgendaRoutingModule],
    declarations: [AgendaComponent]
})

export class AgendaModule{

}