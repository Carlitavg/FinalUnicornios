import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-cartas',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CartasComponent, InicioComponent],
  templateUrl: './cartas.component.html',
  styleUrl: './cartas.component.scss'
})
export class CartasComponent {

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
