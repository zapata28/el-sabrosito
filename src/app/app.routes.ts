import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home)

  },
  {
  path: 'quienes-somos',
  loadComponent: () => import('./pages/quienes/quienes-somos')
    .then(m => m.QuienesSomos)
},
 {
  path: 'productos',
  loadComponent: () => import('./pages/productos/productos')
    .then(m => m.Productos)
},

  { path: '**', redirectTo: '' },

];
