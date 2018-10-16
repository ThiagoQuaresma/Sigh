import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoComponent } from './historico.component';
import { HistoricoRoutingModule } from './historico-routing.module';

import { TimelineComponent } from '../dashboard/components';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({     
    imports: [CommonModule,
              HistoricoRoutingModule
            ],
    declarations: [HistoricoComponent,TimelineComponent,DashboardComponent]
})

export class HistoricoModule{

}