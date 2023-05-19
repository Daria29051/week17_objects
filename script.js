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
      img.className = 'transport__img'
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


// КЛАСС CAR


class Car extends Transport { 
  constructor(type, price, brand, image) {
    super(type, price, brand, image);
  }
  
  
    getDoorsCount() {
   return `Количество дверей: ${this.doors}.`
    }
} 

// КЛАСС BIKE

class Bike extends Transport { 
  constructor(type, price, brand, image) {
    super(type, price, brand, image);
  }
  getMaxSpeed() {
    return `Максимальная скорость: ${this.maxSpeed} км/ч.`
  }
} 




function showTransport() {
for (let item of data) {
 let transport = new Transport (item.type, item.price, item.brand, item.image);
 let car = new Car(item.type, item.brand);
 let bike = new Bike (item.type, item.brand);
 const doorNumber = car.getDoorsCount.bind(item);
 const bikeMaxSpeed = bike.getMaxSpeed.bind(item);

 transport.getImage();
 
 if (item.type === 'car') {
 transportField.innerHTML += 
 `<div class="transport__item">
 <div class="transport__info">${transport.getInfo()}</div>
 <div class="transport__doors">${doorNumber()}</div>
 <div class="transport__price"> ${transport.getPrice()}</div></div>`;
} 

else if (item.type === 'bike') {
  transportField.innerHTML += 
 `<div class="transport__item">
 <div class="transport__info">${transport.getInfo()}</div>
 <div class="transport__speed"> ${bikeMaxSpeed()} </div>
 <div class="transport__price"> ${transport.getPrice()}</div></div>`;
}
 }
}

showTransport();



