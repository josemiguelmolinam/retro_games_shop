import supra1 from '../assets/fotos-coches/supra1.jpg'
import suprarear from '../assets/fotos-coches/suprarear.jpg'
import subaru1 from '../assets/fotos-coches/subaru1.jpg'
import subaru2 from '../assets/fotos-coches/subaru2.jpg'
import evo6 from '../assets/fotos-coches/evo6.jpg'
import evo6rear from '../assets/fotos-coches/evo6rear.jpg'
import gtr34 from '../assets/fotos-coches/gtr34.jpg'
import gtr34rear from '../assets/fotos-coches/gtr34rear.jpg'
import chaser1 from '../assets/fotos-coches/chaser1.jpg'
import chaser2 from '../assets/fotos-coches/chaser2.jpg'
import soarer from '../assets/fotos-coches/soarer.jpg'
import soarerear from '../assets/fotos-coches/soarerear.jpg'
import gto from '../assets/fotos-coches/gto.jpg'
import gtorear from '../assets/fotos-coches/gtorear.jpg'
import hako from '../assets/fotos-coches/hako.jpg'
import hakorear from '../assets/fotos-coches/hakorear.jpg'
import nsx from '../assets/fotos-coches/nsx.jpg'
import nsxrear from '../assets/fotos-coches/nsxrear.jpg'
import s15 from '../assets/fotos-coches/s15.jpg'
import s15rear from '../assets/fotos-coches/s15rear.jpg'
import r32grey from '../assets/fotos-coches/r32grey.jpg'
import r32greyrear from '../assets/fotos-coches/r32greyrear.jpg'
import integra from '../assets/fotos-coches/integrar.jpg'
import integrarear2 from '../assets/fotos-coches/integrarear2.jpg'






const carsData = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Supra RZ MKIV',
    year: 1998,
    price: '$60,000',
    mileage: '80,000 km',
    description: 'Toyota Supra RZ MKIV - Year: 1998 - Price: $60,000',
    images: [supra1, suprarear,supra1,suprarear],
  },
  {
    id: 2,
    make: 'Nissan',
    model: 'Skyline GT-R 34',
    year: 2002,
    price: '$100,000',
    mileage: '50,000 km',
    description: 'Nissan Skyline GT-R 34 - Year: 2002 - Price: $100,000',
    images: [gtr34, gtr34rear,gtr34,gtr34rear],
  },
  {
    id: 3,
    make: 'Subaru',
    model: 'Impreza WRX STI',
    year: 2005,
    price: '$35,000',
    mileage: '120,000 km',
    description: 'Subaru Impreza WRX STI - Year: 2005 - Price: $35,000',
    images: [subaru1, subaru2,subaru1,subaru2],
  },
  {
    id: 4,
    make: 'Mitsubishi',
    model: 'Lancer Evolution VI',
    year: 2006,
    price: '$40,000',
    mileage: '90,000 km',
    description: 'Mitsubishi Lancer Evolution VI - Year: 2006 - Price: $40,000',
    images: [evo6, evo6rear,evo6,evo6rear],
  },
  {
    id: 5,
    make: 'Mazda',
    model: 'RX-7 FD',
    year: 1997,
    price: '$50,000',
    mileage: '70,000 km',
    description: 'Mazda RX-7 FD - Year: 1997 - Price: $50,000',
    images: [supra1, suprarear,supra1,suprarear],
  },
  {
    id: 6,
    make: 'Toyota',
    model: 'AE86 Sprinter Trueno',
    year: 1986,
    price: '$30,000',
    mileage: '140,000 km',
    description: 'Toyota AE86 Sprinter Trueno - Year: 1986 - Price: $30,000',
    images: [supra1, suprarear,supra1,suprarear],
  },
  {
    id: 7,
    make: 'Toyota',
    model: 'Chaser Tourer V',
    year: 1998,
    price: '$25,000',
    mileage: '110,000 km',
    description: 'Toyota Chaser Tourer V - Year: 1998 - Price: $25,000',
    images: [chaser1, chaser2,chaser1,chaser2],
  },
  {
    id: 8,
    make: 'Toyota',
    model: 'Soarer Z30',
    year: 1994,
    price: '$20,000',
    mileage: '130,000 km',
    description: 'Toyota Soarer Z30 - Year: 1994 - Price: $20,000',
    images: [soarer, soarerear,soarer,soarerear],
  },
  {
    id: 9,
    make: 'Nissan',
    model: 'Skyline Hakosuka',
    year: 1971,
    price: '$70,000',
    mileage: '60,000 km',
    description: 'Nissan Skyline Hakosuka - Year: 1971 - Price: $70,000',
    images: [hako, hakorear,hako,hakorear],
  },
  {
    id: 10,
    make: 'Datsun',
    model: '240Z',
    year: 1972,
    price: '$45,000',
    mileage: '100,000 km',
    description: 'Datsun 240Z - Year: 1972 - Price: $45,000',
    images: [supra1, suprarear,supra1,suprarear],
  },
  {
    id: 11,
    make: 'Honda',
    model: 'NSX',
    year: 2001,
    price: '$80,000',
    mileage: '40,000 km',
    description: 'Honda NSX - Year: 2001 - Price: $80,000',
    images: [nsx, nsxrear,nsx,nsxrear],
  },
  {
    id: 12,
    make: 'Honda',
    model: 'S2000',
    year: 2003,
    price: '$35,000',
    mileage: '85,000 km',
    description: 'Honda S2000 - Year: 2003 - Price: $35,000',
    images: [supra1, suprarear,supra1,suprarear],
  },
  {
    id: 13,
    make: 'Lexus',
    model: 'LFA',
    year: 2012,
    price: '$350,000',
    mileage: '15,000 km',
    description: 'Lexus LFA - Year: 2012 - Price: $350,000',
    images: [supra1, suprarear,supra1,suprarear],
  },
  {
    id: 14,
    make: 'Mitsubishi',
    model: 'GTO Twin Turbo',
    year: 1999,
    price: '$25,000',
    mileage: '95,000 km',
    description: 'Mitsubishi GTO Twin Turbo - Year: 1999 - Price: $25,000',
    images: [gto, gtorear,gto,gtorear],
  },
  {
    id: 15,
    make: 'Nissan',
    model: '180SX',
    year: 1996,
    price: '$18,000',
    mileage: '110,000 km',
    description: 'Nissan 180SX - Year: 1996 - Price: $18,000',
    images: [supra1, suprarear,supra1,suprarear],
  },
  {
    id: 16,
    make: 'Toyota',
    model: 'Celica GT-Four',
    year: 1994,
    price: '$22,000',
    mileage: '100,000 km',
    description: 'Toyota Celica GT-Four - Year: 1994 - Price: $22,000',
    images: [supra1, suprarear,supra1,suprarear],
  },
  {
    id: 17,
    make: 'Honda',
    model: 'Integra Type R',
    year: 2002,
    price: '$25,000',
    mileage: '75,000 km',
    description: 'Honda Integra Type R - Year: 2002 - Price: $25,000',
    images: [integra, integrarear2,integra,integrarear2],
  },
  {
    id: 18,
    make: 'Nissan',
    model: 'Silvia S15',
    year: 2002,
    price: '$30,000',
    mileage: '90,000 km',
    description: 'Nissan Silvia S15 - Year: 2002 - Price: $30,000',
    images: [s15, s15rear,s15,s15rear],
  },
  {
    id: 19,
    make: 'Nissan',
    model: 'Skyline GT-R 32',
    year: 1991,
    price: '$55,000',
    mileage: '80,000 km',
    description: 'Nissan Skyline GT-R 32 - Year: 1991 - Price: $55,000',
    images: [r32grey, r32greyrear,r32grey,r32greyrear],
  },
];

export default carsData;

