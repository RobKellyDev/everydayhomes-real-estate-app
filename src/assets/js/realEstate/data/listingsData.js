var listingsData = [
  {
    name:"John Stone",
    postedDate: "04/03/2018",
    address: '97 Toronto Avenue',
    city: 'Toronto',
    state: 'ON',
    rooms: 0,
    price: 500000,
    floorSpace: 700,
    extras: [
      'elevator',
      'gym'
    ],
    homeType: 'Apartment',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto390x290.jpg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/toronto1550x290.jpg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnstone50x50.jpeg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/johnstone80x80.jpeg'
  },
  {
    name:"Nina Smith",
    postedDate: "06/08/2018",
    address: '540 New York Road',
    city: 'New York City',
    state: 'NY',
    rooms: 1,
    price: 620000,
    floorSpace: 2000,
    extras: [
      'pool',
      'gym'
    ],
    homeType: 'Studio',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/newyork390x290.jpg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/newyork1550x290.jpg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith50x50.jpeg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/ninasmith80x80.jpeg'
  },
  {
    name:"Gary Arnold",
    postedDate: "03/09/2016",
    address: '82 San Francisco Road',
    city: 'San Francisco',
    state: 'CA',
    rooms: 4,
    price: 1220000,
    floorSpace: 4300,
    extras: [
      'garden',
      'pool'
    ],
    homeType: 'House',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/sanfrancisco390x290.jpg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/sanfrancisco1550x290.jpg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/garyarnold50x50.jpg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/garyarnold80x80.jpg'
  },
  {
    name:"Rose Lucero",
    postedDate: "02/02/2017",
    address: '102 Vancouver Avenue',
    city: 'Vancouver',
    state: 'BC',
    rooms: 5,
    price: 2220000,
    floorSpace: 6000,
    extras: [
      'study',
      'gym'
    ],
    homeType: 'Studio',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/vancouver390x290.jpg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/vancouver1550x290.jpg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/roselucero50x50.jpg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/roselucero80x80.jpg'
  },
  {
    name:"Cory Kirkpatrick",
    postedDate: "12/08/2017",
    address: '12 Chicago Road',
    city: 'Chicago',
    state: 'IL',
    rooms: 2,
    price: 350000,
    floorSpace: 1200,
    extras: [
      'garden',
      'gym'
    ],
    homeType: 'House',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/chicago390x290.jpg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/chicago1550x290.jpg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/corykirkpatrick50x50.jpg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/corykirkpatrick80x80.jpg'
  },
  {
    name:"Martina Salter",
    postedDate: "05/23/2018",
    address: '1234 Miami Street',
    city: 'Miami',
    state: 'FL',
    rooms: 2,
    price: 320000,
    floorSpace: 1100,
    extras: [
      'pool',
      'bar'
    ],
    homeType: 'Apartment',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/miami390x290.jpg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/miami1550x290.jpg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/martinasalter50x50.jpg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/martinasalter80x80.jpg'
  },
  {
    name:"Maddie Redmon",
    postedDate: "28/01/2017",
    address: '95 Texas Road',
    city: 'Austin',
    state: 'TX',
    rooms: 6,
    price: 1500000,
    floorSpace: 5300,
    extras: [
      'gym',
      'pool'
    ],
    homeType: 'Ranch',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/texas390x290.jpg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/texas1550x290.jpg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/maddieredmon50x50.jpg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/maddieredmon80x80.jpg'
  },
  {
    name:"Brandan Whitworth",
    postedDate: "11/06/2016",
    address: '567 Alberta Avenue',
    city: 'Calgary',
    state: 'AB',
    rooms: 3,
    price: 7220000,
    floorSpace: 6300,
    extras: [
      'garden',
      'study'
    ],
    homeType: 'Ranch',
    image: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/alberta390x290.jpg',
    imageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/alberta1550x290.jpg',
    userImage: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/brandanwhitworth50x50.jpg',
    userImageLong: 'https://s3.ca-central-1.amazonaws.com/reactrealestateapp/brandanwhitworth80x80.jpg'
  }
]

export default listingsData;
