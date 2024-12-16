import { Component } from '@angular/core';
import { CartasComponent } from '../cartas/cartas.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CartasComponent,RouterOutlet, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


}
