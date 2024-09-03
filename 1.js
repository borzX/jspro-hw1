"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = [
  {
    title: "ABBA",
    artist: "ABBA",
    year: "1985",
  },
  {
    title: "nevermind",
    artist: "nirvana",
    year: "1991",
  },
  {
    title: "the best",
    artist: "valeriy leontev",
    year: "2024",
  },
];

musicCollection[Symbol.iterator] = function () {
  return {
    current: 0,

    to: this.length,

    next() {
      return this.current < this.to 
      ? { done: false, value: musicCollection[this.current++] } 
      : { done: true };
    },
  };
};

for (let item of musicCollection) {
  console.log(`Название альбома: ${item.title}, Исполнитель: ${item.artist}`);
}
