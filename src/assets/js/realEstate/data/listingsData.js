import toronto390x290 from '../../../../assets/images/toronto390x290.jpg';
import toronto1550x290 from '../../../../assets/images/toronto1550x290.jpg';
import johnstone50x50 from '../../../../assets/images/johnstone50x50.jpeg';
import johnstone80x80 from '../../../../assets/images/johnstone80x80.jpeg';
import newyork390x290 from '../../../../assets/images/newyork390x290.jpg';
import newyork1550x290 from '../../../../assets/images/newyork1550x290.jpg';
import ninasmith50x50 from '../../../../assets/images/ninasmith50x50.jpeg';
import ninasmith80x80 from '../../../../assets/images/ninasmith80x80.jpeg';
import sanfrancisco390x290 from '../../../../assets/images/sanfrancisco390x290.jpg';
import sanfrancisco1550x290 from '../../../../assets/images/sanfrancisco1550x290.jpg';
import garyarnold50x50 from '../../../../assets/images/garyarnold50x50.jpg';
import garyarnold80x80 from '../../../../assets/images/garyarnold80x80.jpg';
import vancouver390x290 from '../../../../assets/images/vancouver390x290.jpg';
import vancouver1550x290 from '../../../../assets/images/vancouver1550x290.jpg';
import roselucero50x50 from '../../../../assets/images/roselucero50x50.jpg';
import roselucero80x80 from '../../../../assets/images/roselucero80x80.jpg';
import chicago390x290 from '../../../../assets/images/chicago390x290.jpg';
import chicago1550x290 from '../../../../assets/images/chicago1550x290.jpg';
import corykirkpatrick50x50 from '../../../../assets/images/corykirkpatrick50x50.jpg';
import corykirkpatrick80x80 from '../../../../assets/images/corykirkpatrick80x80.jpg';
import miami390x290 from '../../../../assets/images/miami390x290.jpg';
import miami1550x290 from '../../../../assets/images/miami1550x290.jpg';
import martinasalter50x50 from '../../../../assets/images/martinasalter50x50.jpg';
import martinasalter80x80 from '../../../../assets/images/martinasalter80x80.jpg';
import texas390x290 from '../../../../assets/images/texas390x290.jpg';
import texas1550x290 from '../../../../assets/images/texas1550x290.jpg';
import maddieredmon50x50 from '../../../../assets/images/maddieredmon50x50.jpg';
import maddieredmon80x80 from '../../../../assets/images/maddieredmon80x80.jpg';
import alberta390x290 from '../../../../assets/images/alberta390x290.jpg';
import alberta1550x290 from '../../../../assets/images/alberta1550x290.jpg';
import brandanwhitworth50x50 from '../../../../assets/images/brandanwhitworth50x50.jpg';
import brandanwhitworth80x80 from '../../../../assets/images/brandanwhitworth80x80.jpg';

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
    image: toronto390x290,
    imageLong: toronto1550x290,
    userImage: johnstone50x50,
    userImageLong: johnstone80x80
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
    image: newyork390x290,
    imageLong: newyork1550x290,
    userImage: ninasmith50x50,
    userImageLong: ninasmith80x80
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
    image: sanfrancisco390x290,
    imageLong: sanfrancisco1550x290,
    userImage: garyarnold50x50,
    userImageLong: garyarnold80x80
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
    image: vancouver390x290,
    imageLong: vancouver1550x290,
    userImage: roselucero50x50,
    userImageLong: roselucero80x80
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
    image: chicago390x290,
    imageLong: chicago1550x290,
    userImage: corykirkpatrick50x50,
    userImageLong: corykirkpatrick80x80
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
    image: miami390x290,
    imageLong: miami1550x290,
    userImage: martinasalter50x50,
    userImageLong: martinasalter80x80
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
    image: texas390x290,
    imageLong: texas1550x290,
    userImage: maddieredmon50x50,
    userImageLong: maddieredmon80x80
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
    image: alberta390x290,
    imageLong: alberta1550x290,
    userImage: brandanwhitworth50x50,
    userImageLong: brandanwhitworth80x80
  }
]

export default listingsData;
