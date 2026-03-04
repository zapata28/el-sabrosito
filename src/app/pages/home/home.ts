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

  imagenes = [
  {
    src: 'carrousel/carrusel-2.png'},
  {
    src: 'carrousel/carrusel-1.png'
  },
  {
    src: 'carrousel/carrusel-3.png'
  }

];

indiceActivo = 1;
intervalo: any;
startX = 0;

ngOnInit() {
  this.reanudar();
}

ngOnDestroy() {
  clearInterval(this.intervalo);
}

reanudar() {
  this.intervalo = setInterval(() => {
    this.siguiente();
  }, 4000);
}

pausar() {
  clearInterval(this.intervalo);
}

siguiente() {
  this.indiceActivo =
    (this.indiceActivo + 1) % this.imagenes.length;
}

anterior() {
  this.indiceActivo =
    (this.indiceActivo - 1 + this.imagenes.length) % this.imagenes.length;
}

irA(index: number) {
  this.indiceActivo = index;
}

onTouchStart(event: any) {
  this.startX = event.changedTouches[0].screenX;
}

onTouchEnd(event: any) {
  let endX = event.changedTouches[0].screenX;

  if (endX < this.startX - 50) this.siguiente();
  if (endX > this.startX + 50) this.anterior();
}

  getClase(i: number): string {
    const total = this.imagenes.length;

    if (i === this.indiceActivo) return 'centro';

    if (i === (this.indiceActivo - 1 + total) % total) return 'izq';

    if (i === (this.indiceActivo + 1) % total) return 'der';

    return 'oculto';
  }
}
