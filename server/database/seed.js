const Grubhub = require('./models.js');
const db = require('./index.js');
const seed_data = [
  { 
    id: 1,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/aluminous-749358_1280.jpg',
  },
  { 
    id: 2,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/chicken-soup-1346310_1280.jpg',
  },
  { 
    id: 3,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1503392968123-ceabe9e5e630.jpeg',
  },
  { 
    id: 4,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/food-1380275_1280.jpg',
  },
  { 
    id: 5,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1550388342-5699a35584f4.jpeg',
  },
  { 
    id: 6,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/bibimbap-1738580_1280.jpg',
  },
  { 
    id: 7,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1550388342-b3fd986e4e67.jpeg',
  },
  { 
    id: 8,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1546069901-eacef0df6022.jpeg',
  },
  { 
    id: 9,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/cooking-4124108_1280.jpg',
  },
  { 
    id: 10,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1531263539449-56fdf29dfc4d.jpeg',
  },
  { 
    id: 11,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1553163147-622ab57be1c7.jpeg',
  },
  { 
    id: 12,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/herbs-749360_1280.jpg',
  },
  { 
    id: 13,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/kimchi-fried-rice-241051_1280.jpg',
  },
  { 
    id: 14,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/tofu-597228_1280.jpg',
  },
  { 
    id: 15,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1550388342-c75d3a99540d.jpeg',
  },
  { 
    id: 16,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1498654896293-37aacf113fd9.jpeg',
  },
  { 
    id: 17,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/vegetable-1582920_1280.jpg',
  },
  { 
    id: 18,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/korean-cabbage-in-chili-sauce-1120406_1280.jpg',
  },
  { 
    id: 19,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/toppokki-1607479_1280.jpg',
  },
  { 
    id: 20,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Korean/photo-1540138279543-b3728f037467.jpeg',
  },
  { 
    id: 21,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/burrito-4126108_1280.jpg',
  },
  { 
    id: 22,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tacos-245241_1280.jpg',
  },
  { 
    id: 23,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/burrito-4126116_1280.jpg',
  },
  { 
    id: 24,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/grilled-pineapple-pork-burrito-2944562_1280.jpg',
  },
  { 
    id: 25,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tacos-1613795_1280.jpg',
  },
  { 
    id: 26,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tamales-1990080_1280.jpg',
  },
  { 
    id: 27,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/burrito-gratin-1564287_1280.jpg',
  },
  { 
    id: 28,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/taco-2610649_1280.jpg',
  },
  { 
    id: 29,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/food-1090619_1280.jpg',
  },
  { 
    id: 30,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/photo-1464219222984-216ebffaaf85.jpeg',
  },
  { 
    id: 31,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/food-2580200_1280.jpg',
  },
  { 
    id: 32,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/food-791614_1280.jpg',
  },
  { 
    id: 33,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/photo-1536184071535-78906f7172c2.jpeg',
  },
  { 
    id: 34,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/mexican-2456038_1280.jpg',
  },
  { 
    id: 35,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/grill-1599035_1280.jpg',
  },
  { 
    id: 36,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/photo-1552332386-f8dd00dc2f85.jpeg',
  },
  { 
    id: 37,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/mexican-food-1885616_1280.jpg',
  }, 
  { 
    id: 38,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/photo-1550951957-3ab761159b8f.jpeg',
  },
  { 
    id: 39,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/quesadilla-4034046_1280.jpg',
  },
  { 
    id: 40,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Mexican/tortilla-1386757_1280.jpg',
  },
  { 
    id: 41,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/broiled-1238582_1280.jpg',
  },
  { 
    id: 42,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/chinese-food-951889_1280.jpg',
  },
  { 
    id: 43,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/Szechuan-Chicken_.jpg',
  },
  { 
    id: 44,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/image-951834_1280.jpg',
  },
  { 
    id: 45,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/duck-479701_1280.jpg',
  },
  { 
    id: 46,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/eggplant-1317917_1280.jpg',
  },
  { 
    id: 47,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/dumplings-632206_1280.jpg',
  },
  { 
    id: 48,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/fried-fish-with-sweet-peppers-906248_1280.jpg',
  },
  { 
    id: 49,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/gourmet-667599_1280.jpg',
  },
  { 
    id: 50,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/green-dragon-vegetable-1707089_1280.jpg',
  },
  { 
    id: 51,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/cooking-1835369_1280.jpg',
  },
  { 
    id: 52,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/noodles-3557592_1280.jpg',
  },
  { 
    id: 53,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/photo-1525755662778-989d0524087e.jpeg',
  },
  { 
    id: 54,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/photo-1541696432-82c6da8ce7bf.jpeg',
  },
  { 
    id: 55,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/sweet-and-sour-pork-1264563_1280.jpg',
  },
  { 
    id: 56,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/prawns-959219_1280.jpg',
  },
  { 
    id: 57,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/dumplings-669901_1280.jpg',
  },
  { 
    id: 58,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/water-spinach-1628620_1280.jpg',
  },
  { 
    id: 59,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/restaurant-1762493_1280.jpg',
  },
  { 
    id: 60,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Chinese/spring-rolls-2536526_1280.jpg',
  },
  { 
    id: 61,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/italian-food-2157246_1280.jpg',
  },
  { 
    id: 62,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/pasta-4144384_1280.jpg',
  },
  { 
    id: 63,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/pasta-salad-1967501_1280.jpg',
  },
  { 
    id: 64,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1551183053-bf91a1d81141.jpeg',
  },
  { 
    id: 65,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/tomatoes-1804452_1280.jpg',
  },
  { 
    id: 66,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/salad-2487759_1280.jpg',
  },
  { 
    id: 67,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1528490060256-c345efae4442.jpeg',
  },
  { 
    id: 68,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1551443874-e8d6a8e561aa.jpeg',
  },
  { 
    id: 69,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1458644267420-66bc8a5f21e4.jpeg',
  },
  { 
    id: 70,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/spaghetti-660748_1280.jpg',
  },
  { 
    id: 71,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1528137871618-79d2761e3fd5.jpeg',
  },
  { 
    id: 72,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/photo-1539586345401-51d5bfba7ac0.jpeg',
  },
  { 
    id: 73,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/tomato-mozzarella-2367016_1280.jpg',
  },
  { 
    id: 74,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/pasta-329522_1280.jpg',
  },
  { 
    id: 75,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/pizza-1209748_1280.jpg',
  },
  { 
    id: 76,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/salad-2487775_1280.jpg',
  },
  { 
    id: 77,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/tortellini-3578016_1280.jpg',
  },
  { 
    id: 78,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/salami-3296478_1280.jpg',
  },
  { 
    id: 79,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/spaghetti-3547078_1280.jpg',
  },
  { 
    id: 80,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/pizza-1442946_1280.jpg', 
  },
  { 
    id: 81,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-74748_1280.jpg',
  },
  { 
    id: 82,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-951896_1280.jpg',
  },
  { 
    id: 83,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1534790566855-4cb788d389ec.jpeg',
  },
  { 
    id: 84,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-2762371_1280.jpg',
  },
  { 
    id: 85,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-500054_1280.jpg',
  },
  { 
    id: 86,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-3442227_1280.jpg',
  },
  { 
    id: 87,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-3962997_1280.jpg',
  },
  { 
    id: 88,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1512152272829-e3139592d56f.jpeg',
  },
  { 
    id: 89,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-2034433_1280.jpg',
  },
  { 
    id: 90,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-4145977_1280.jpg',
  },
  { 
    id: 91,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1550984754-8d1b067b0239.jpeg',
  },
  { 
    id: 92,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/snack-2635035_1280.jpg',
  },
  { 
    id: 93,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1536510233921-8e5043fce771.jpeg',
  },
  { 
    id: 94,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/hamburger-801942_1280.jpg',
  },
  { 
    id: 95,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1551615593-ef5fe247e8f7.jpeg',
  },
  { 
    id: 96,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/hamburger-1281855_1280.jpg',
  },
  { 
    id: 97,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/hamburger-1414423_1280.jpg',
  },
  { 
    id: 98,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/photo-1550984754-8d1b067b0239.jpeg',
  },
  { 
    id: 99,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-3199088_1280.jpg', 
  },
  { 
    id: 100,
    image: 'https://s3-us-west-1.amazonaws.com/kayjayhogan/Burgers/burger-3946012_1280.jpg',
  }
]
const insertSeedData = () => {
  Grubhub.insertMany(seed_data)
  .then(()=> console.log("success"))
  .catch(()=> console.log("error"))
}
insertSeedData()