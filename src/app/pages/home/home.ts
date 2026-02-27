import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {

  imagenes: string[] = [
    '/carrousel/11.png',
    '/carrousel/12.png',
    '/carrousel/13.png',
  ];

  indiceActual = 0;
  intervalo: any;

  ngOnInit() {
    this.iniciarAutoplay();
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }

  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
  }

  anterior() {
    this.indiceActual =
      (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length;
  }

  irA(indice: number) {
    this.indiceActual = indice;
  }

  iniciarAutoplay() {
    this.intervalo = setInterval(() => {
      this.siguiente();
    }, 4000); // cambia cada 4 segundos
  }
}
