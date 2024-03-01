import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './widgets/header/header.component';
import { FooterComponent } from './widgets/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
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
    FooterComponent
  ],
  providers: []
})
export class SharedModule { }
