import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HakkimdaComponent } from './hakkimda/Hakkimda.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { YapilanİslerComponent } from './yapilanİsler/yapilanİsler.component';
import { YorumlarComponent } from './yorumlar/yorumlar.component';

const routes: Routes = [
  {path:"hakkimda",component:HakkimdaComponent},
  {path:"yapilanİsler",component:YapilanİslerComponent},
  {path:"yorumlar",component:YorumlarComponent},
  {path:"iletisim",component:IletisimComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
