import { Song } from '../types/music';

// Playlist 1: Classic Christmas
export const classicChristmas: Song[] = [
  {
    id: '2',
    title: 'Silent Night',
    artist: 'Christmas Classics',
    duration: 195,
    cloudinaryUrl: 'nctiqz3e6gs6ezynewqt'
  },
  {
    id: '3',
    title: 'Jingle Bells',
    artist: 'Christmas Classics',
    duration: 165,
    cloudinaryUrl: 'rdnwswe6kz9tbo2rvtps'
  },
  {
    id: '4',
    title: 'White Christmas',
    artist: 'Christmas Classics',
    duration: 210,
    cloudinaryUrl: 'ypbdoaia8jpvpc50bnrb'
  },
  {
    id: '5',
    title: 'O Holy Night',
    artist: 'Christmas Classics',
    duration: 240,
    cloudinaryUrl: 'guvn8noilpgehhrcr9ya'
  },
  {
    id: '6',
    title: 'The First Noel',
    artist: 'Christmas Classics',
    duration: 185,
    cloudinaryUrl: 'in3sjazqbjcdfvmn6p2f'
  }
];

export const modernChristmas: Song[] = [
  {
    id: '7',
    title: 'Christmas Pop',
    artist: 'Modern Holidays',
    duration: 198,
    cloudinaryUrl: 'hrvih6jmioacpdb3mz8e'
  },
  {
    id: '8',
    title: 'Holiday Dance',
    artist: 'Modern Holidays',
    duration: 187,
    cloudinaryUrl: 'ytfu2fil7bzdfyrqxrpp'
  },
  {
    id: '9',
    title: 'December Nights',
    artist: 'Modern Holidays',
    duration: 203,
    cloudinaryUrl: 'hwumtcyilxveu1aaalar'
  },
  {
    id: '10',
    title: 'Winter Magic',
    artist: 'Modern Holidays',
    duration: 195,
    cloudinaryUrl: 'u8lbqyo2ljebhi7p6026'
  }
];

export const christmasJazz: Song[] = [
  {
    id: '11',
    title: 'Jazz Christmas Eve',
    artist: 'Holiday Jazz',
    duration: 215,
    cloudinaryUrl: 'gfj8walu8o5mteslgttw'
  },
  {
    id: '12',
    title: 'Smooth Holiday',
    artist: 'Holiday Jazz',
    duration: 225,
    cloudinaryUrl: 'hphectvhuqkbjzolfqsu'
  },
  {
    id: '13',
    title: 'Winter Jazz Night',
    artist: 'Holiday Jazz',
    duration: 198,
    cloudinaryUrl: 'lczg4wahet5k4dztbueu'
  },
  {
    id: '14',
    title: 'Christmas Blues',
    artist: 'Holiday Jazz',
    duration: 234,
    cloudinaryUrl: 'bipjsb1elhj3kemphr0b'
  },
  {
    id: '15',
    title: 'Jazzy Holidays',
    artist: 'Holiday Jazz',
    duration: 189,
    cloudinaryUrl: 'oaybbazydgpstwqkvzll'
  },
  {
    id: '16',
    title: 'December Jazz',
    artist: 'Holiday Jazz',
    duration: 245,
    cloudinaryUrl: 'xgx2wutdjecfq0dehaa0'
  }
];

// Combined library for general use
export const musicLibrary: Song[] = [
  ...classicChristmas,
  ...modernChristmas,
  ...christmasJazz
];