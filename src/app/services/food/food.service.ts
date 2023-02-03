import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Salada Caesar',
        price: 25,
        cookTime: '20-30',
        favorite: false,
        origins: ['México'],
        stars: 4,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['Comida Saudável'],
      },

      {
        id: 2,
        name: 'Filé de Frango com Fritas',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['França'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['Comida Saudável'],
      },

      {
        id: 3,
        name: 'Espaguete',
        price: 25,
        cookTime: '15-25',
        favorite: false,
        origins: ['Itália'],
        stars: 4,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['Comida Italiana', 'Massas'],
      },

      {
        id: 4,
        name: 'Hamburguer com Fritas',
        price: 20,
        cookTime: '15-20',
        favorite: true,
        origins: ['Estados Unidos'],
        stars: 3.7,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['Fast-Food', 'Frituras'],
      },

      {
        id: 5,
        name: 'Porção de Fritas',
        price: 18,
        cookTime: '10-20',
        favorite: false,
        origins: ['Bélgica'],
        stars: 5,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['Frituras', 'Porções', ' Fast-Food'],
      },

      {
        id: 6,
        name: 'Café',
        price: 7,
        cookTime: '05',
        favorite: true,
        origins: ['Brasil'],
        stars: 4,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['Bebidas Quentes'],
      },
    ];
  }
}
