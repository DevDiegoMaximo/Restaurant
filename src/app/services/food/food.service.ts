import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

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
        imageUrl:
          'https://my-restaurant-app-angular.s3.amazonaws.com/images/food-6.jpg',
        tags: ['ComidaSaudável'],
      },

      {
        id: 2,
        name: 'Filé de Frango com Fritas',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['Brasil'],
        stars: 3.5,
        imageUrl:
          'https://my-restaurant-app-angular.s3.amazonaws.com/images/food-5.jpg',
        tags: ['ComidaSaudável'],
      },

      {
        id: 3,
        name: 'Espaguete',
        price: 25,
        cookTime: '15-25',
        favorite: false,
        origins: ['Itália'],
        stars: 4,
        imageUrl:
          'https://my-restaurant-app-angular.s3.amazonaws.com/images/food-2.jpg',
        tags: ['ComidaItaliana', 'Massas'],
      },

      {
        id: 4,
        name: 'Hamburguer com Fritas',
        price: 20,
        cookTime: '15-20',
        favorite: true,
        origins: ['Estados Unidos'],
        stars: 3.7,
        imageUrl:
          'https://my-restaurant-app-angular.s3.amazonaws.com/images/food-3.jpg',
        tags: ['FastFood', 'Frituras'],
      },

      {
        id: 5,
        name: 'Porção de Fritas',
        price: 18,
        cookTime: '10-20',
        favorite: false,
        origins: ['Bélgica'],
        stars: 5,
        imageUrl:
          'https://my-restaurant-app-angular.s3.amazonaws.com/images/food-4.jpg',
        tags: ['Frituras', 'Porções', 'FastFood'],
      },

      {
        id: 6,
        name: 'Café',
        price: 7,
        cookTime: '03-05',
        favorite: true,
        origins: ['Brasil'],
        stars: 5,
        imageUrl:
          'https://my-restaurant-app-angular.s3.amazonaws.com/images/food-1.jpg',
        tags: ['BebidasQuentes'],
      },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'Todos'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'Todos', count: 9 },
      { name: 'BebidasQuentes', count: 1 },
      { name: 'Frituras', count: 2 },
      { name: 'Porções', count: 1 },
      { name: 'ComidaItaliana', count: 1 },
      { name: 'ComidaSaudável', count: 2 },
      { name: 'FastFood', count: 2 },
    ];
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter((food) =>
      food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }

  getFoodById(id: number): Food {
    return this.getAll().find((food) => food.id == id)!;
  }
}
