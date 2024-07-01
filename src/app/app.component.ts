import { Component } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaDeNoticiasComponent } from './components/lista-de-noticias/lista-de-noticias.component';
import { Iformulario } from './interfaces/iformulario.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent,ListaDeNoticiasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrForm: Iformulario[] = [{
    title: 'hola mundo',
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdatademia.es%2Fblog%2Fhello-world&psig=AOvVaw1PZCTM-Vl1vZebxXuvprPW&ust=1719918343971000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMDC_qHZhYcDFQAAAAAdAAAAABAE',
    body: 'el mundo es mundisimo mundo',
    date: new Date
  },
  {
    title: 'hola world',
    imageUrl: 'https://es.wikipedia.org/wiki/Hola_mundo#/media/Archivo:Holamundoc++.png',
    body: 'helllllooooooooooooooooooooo',
    date: new Date
  }
];


}
