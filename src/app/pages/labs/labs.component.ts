import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola!'
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ]
  name = 'Amanda';
  age = 25;
  disabled = "true";
  img = 'https://cataas.com/cat?815';
  cat = {
    name: 'Tomasa',
    age: 2,
    avatar: 'https://cataas.com/cat?815'
  }
}
