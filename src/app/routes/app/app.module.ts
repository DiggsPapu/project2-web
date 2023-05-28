import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD:src/app/routes/app/app.module.ts
import { CardComponent } from '../../components/card/card.component';
import { TableComponent } from '../../components/table/table.component';
=======
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
>>>>>>> alternative:src/app/app.module.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
<<<<<<< HEAD:src/app/routes/app/app.module.ts
<<<<<<< HEAD:src/app/app.module.ts
    TableRowComponent,
=======
>>>>>>> alternative:src/app/app.module.ts
    TeamComponent,
    HomeComponent
=======
>>>>>>> refs/remotes/origin/main:src/app/routes/app/app.module.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
