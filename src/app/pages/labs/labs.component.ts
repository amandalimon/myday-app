import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola!'
  tasks = signal([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ]);
  name = signal('Amanda');
  age = 25;
  disabled = "true";
  img = 'https://cataas.com/cat?815';

  cat = signal({
    name: 'Agatha',
    age: 19,
    avatar: 'https://cataas.com/cat?815'
  })

  colorCtrl = new FormControl();

  constructor(){
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  clickHandler() {
    alert('bop!')
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value
    this.name.set(newValue)
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }

  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newAge = input.value
    this.cat.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newAge, 10)
      }
    })
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newName = input.value
    this.cat.update(prevState => {
      return {
        ...prevState,
        name: newName
      }
    })
  }
}
