import { Component, Input } from '@angular/core';
import { Iformulario } from '../../interfaces/iformulario.interface';

@Component({
  selector: 'app-lista-de-noticias',
  standalone: true,
  imports: [],
  templateUrl: './lista-de-noticias.component.html',
  styleUrl: './lista-de-noticias.component.css'
})
export class ListaDeNoticiasComponent {
  @Input() noticias: Iformulario[] = [];
  constructor() {

  }
  ngOnInit() {
    console.log(this.noticias)
  }

cargarNoticias():string{
let html =` <ul>
      <li >
        <h2>Titulo</h2>
        <img [src]= >
        <p>Cuerpo</p>
        <small>Fecha</small>
      </li>
    </ul>`
this.noticias.forEach((noticia)=>{
  html += `<ul>
    <li >
        <h2>${noticia.title}</h2>
        <img [src]=${noticia.imageUrl}>
        <p>${noticia.body}</p>
        <small>${noticia.date}</small>
      </li>
    </ul>`
})
    return html
}

}
