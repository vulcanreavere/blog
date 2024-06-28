import { Component } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaDeNoticiasComponent } from './components/lista-de-noticias/lista-de-noticias.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent,ListaDeNoticiasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
