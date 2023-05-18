// Задание 1
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 — то есть 10*31


// Задание2
const transportField = document.querySelector('.transport'); //поле вывода инфо
const button = document.querySelector('.transport__button'); //кнопка узнать цену






const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
  },
  {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://i.pinimg.com/originals/fc/33/19/fc33194682b13d528185e14211f1adca.jpg'
  },
    {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
  },
  {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
  }
];



// КЛАСС TRANSPORT
class Transport {
    constructor(type, price, brand, image) {
        this.type = type;
        this.price = price;
        this.brand = brand;  
        this.image = image;  
    }

    getImage() {
      const img = document.createElement('img');
      img.src  = `${this.image}`;
      img.alt  = 'Transport photo';
      img.width = 350;
      img.height = 200;
      transportField.appendChild(img);
    }

    getInfo() { 
      if (this.type === 'car') {
      return `
      Тип транспорта: Автомобиль.
      Бренд: ${this.brand}. `
    } else if (this.type === 'bike') {
      return `Тип транспорта: Мотоцикл.
      Бренд: ${this.brand}. `
    }
    }

    getPrice() {
        return `Цена: ${this.price} руб.`
    }
}




function showTransport() {
for (let item of data) {
 let transport = new Transport (item.type, item.price, item.brand, item.image);
 transport.getImage();
 transportField.innerHTML += 
 `<div class="transport__item">
 <div class="transport__info">${transport.getInfo()}</div>
 <div class="transport__price"> ${transport.getPrice()}</div></div>`;
 }
}

showTransport();



// КЛАСС CAR


class Car extends Transport { 
  constructor(type, price, brand) {
    super(type, price, brand);
  }
  
  
    getDoorsCount() {
   return `Количество дверей: ${this.doors}.`
    }
} 


// ОТОБРАЖАЕМ КОЛ-ВО ДВЕРЕЙ У АВТОМОБИЛЕЙ

for (let item of data) {
  if (item.type === 'Автомобиль') {
    let car = new Car(item.type, item.price, item.brand);
    console.log(car);
    const DoorNumber = car.getDoorsCount.bind(item);
    console.log(DoorNumber());
}
}



class Bike extends Transport { 

    getMaxSpeed() {

    }
} 



