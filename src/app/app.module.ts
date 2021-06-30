import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { YapilanİslerComponent } from './yapilanİsler/yapilanİsler.component';
import { YorumlarComponent } from './yorumlar/yorumlar.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { HakkimdaComponent } from './hakkimda/Hakkimda.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [					
    AppComponent,
      NavComponent,
      HakkimdaComponent,
      YapilanİslerComponent,
      YorumlarComponent,
      IletisimComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
