import gamecube from '../assets/images/gamecube.png';
import ps1 from '../assets/images/ps1.png';
import ps2 from '../assets/images/ps2.png';
import superFamicom from '../assets/images/superFamicon.png';
import nintendo64 from '../assets/images/nintendo64.png';
import gameboy from '../assets/images/gameboy.png';

const gamesData = [
  {
    id: 1,
    title: 'GameCube (Versión NTSC)',
    genre: 'Consola',
    year: 2001,
    price: '175',
    platform: 'Nintendo',
    description:
      'GameCube Gris NTSC versión japonesa, con su caja, todos los accesorios incluyendo un mando, cables, documentación, un mando adicional negro y el juego Mario Party 4.',
    images: [gamecube, gamecube, gamecube, gamecube, gamecube, gamecube],
    video: 'https://www.youtube.com/embed/VIDEO_ID_GAMECUBE',
  },
  {
    id: 2,
    title: 'Sony PlayStation 1 (Versión NTSC)',
    genre: 'Consola',
    year: 1994,
    price: '145',
    platform: 'Sony',
    description:
      'PlayStation 1 NTSC versión japonesa, con su caja, accesorios, un mando, cables de alimentación y cable RGB.',
    images: [ps1, ps1, ps1, ps1, ps1, ps1],
    video: 'https://www.youtube.com/embed/VIDEO_ID_PS1',
  },
  {
    id: 3,
    title: 'Sony PlayStation 2 Ed. GT3 (Versión NTSC)',
    genre: 'Consola',
    year: 2001,
    price: '195',
    platform: 'Sony',
    description:
      'PlayStation 2 Edición Gran Turismo 3, versión NTSC japonesa, incluye un mando, cables, documentación, el juego Gran Turismo 3, una tarjeta de memoria y su caja.',
    images: [ps2, ps2, ps2, ps2, ps2, ps2],
    video: 'https://www.youtube.com/embed/VIDEO_ID_PS2',
  },
  {
    id: 4,
    title: 'Super Famicom (Versión NTSC)',
    genre: 'Consola',
    year: 1990,
    price: '175',
    platform: 'Nintendo',
    description:
      'Super Famicom NTSC versión japonesa, con dos mandos, cable de alimentación, cable de conexión a TV y su caja.',
    images: [superFamicom,superFamicom, superFamicom, superFamicom, superFamicom, superFamicom],
    video: 'https://www.youtube.com/embed/VIDEO_ID_SUPERFAMICOM',
  },
  {
    id: 5,
    title: 'Nintendo 64 (Versión NTSC)',
    genre: 'Consola',
    year: 1996,
    price: '175',
    platform: 'Nintendo',
    description:
      'Nintendo 64 NTSC versión japonesa, incluye un mando, conector de alimentación, instrucciones y su caja.',
    images: [nintendo64, nintendo64, nintendo64, nintendo64, nintendo64, nintendo64],
    video: 'https://www.youtube.com/embed/VIDEO_ID_N64',
  },
  {
    id: 6,
    title: 'Game Boy DMG (Versión NTSC)',
    genre: 'Consola',
    year: 1989,
    price: '120',
    platform: 'Nintendo',
    description:
      'Game Boy DMG versión NTSC japonesa, incluye la consola, un mando, cable de alimentación y su caja.',
    images: [gameboy, gameboy, gameboy, gameboy, gameboy, gameboy],
    video: 'https://www.youtube.com/embed/VIDEO_ID_GAMEBOY',
  },
];

export default gamesData;
