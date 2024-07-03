import { Component, } from '@angular/core';
import { Iformulario } from '../../interfaces/iformulario.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  pepe: string = 'hola mundo';
arrNoticia: Iformulario[] = [
  {title: 'hola mundo',imageUrl:"https://www.aon.es/personales/seguro-perro-gato/wp-content/uploads/sites/2/2021/04/bichon-maltes.jpg",body:"el mundo es mundisimo mundo",date:new Date()},
  {title: 'hola world',imageUrl:"https://www.aon.es/personales/seguro-perro-gato/wp-content/uploads/sites/2/2021/04/bichon-maltes.jpg",body:"helllllooooooooooooooooooooo",date:new Date()}
];
  newNotice: Iformulario = {
    title: '',
    imageUrl: '',
    body: '',
    date: new Date()
  };
  enviarNoticia(){
    if(this.newNotice.title === '' || this.newNotice.imageUrl === '' || this.newNotice.body === '') {return alert('Faltan datos')}
    this.arrNoticia.push(this.newNotice)
    this.newNotice = {
      title: '',
      imageUrl: '',
      body: '',
      date: new Date()
    }
  }
  cargarNoticias():string{
    let html =` `
    this.arrNoticia.forEach((noticia)=>{
      html += `<ul>
        <li >
            <h2>${noticia.title}</h2>
            <img src="${noticia.imageUrl}">
            <p>${noticia.body}</p>
            <small>${noticia.date}</small>
          </li>
        </ul>`
    })
        return html
    }
    
    } 




