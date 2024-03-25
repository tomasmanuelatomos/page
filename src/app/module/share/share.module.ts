import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './widgets/header/header.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { HeaderPageComponent } from './widgets/header-page/header-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderPageComponent
],
  
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Tempo padrão de exibição das mensagens (em milissegundos)
      positionClass: 'toast-top-right', // Posição padrão das mensagens
      preventDuplicates: true, // Evitar a exibição de mensagens duplicadas
    })
  ],
  exports: [
    CommonModule,
    ToastrModule,
    HeaderComponent,
    FooterComponent,
    HeaderPageComponent
  ],
  providers: []
})
export class SharedModule { }
