import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoComponent } from './historico.component';
import { HistoricoRoutingModule } from './historico-routing.module';


@NgModule({     
    imports: [CommonModule,
              HistoricoRoutingModule],
    declarations: [HistoricoComponent]
})

export class HistoricoModule{

}