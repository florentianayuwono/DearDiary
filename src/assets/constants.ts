import { FaDatabase, FaRegistered } from 'react-icons/fa';
import { HiLogin, HiLogout, HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { RiRegisteredFill, RiUserSettingsFill } from 'react-icons/ri';

export const musicGenres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];

export const diaryGenres = [
    { title: 'Crush', value: 'CRUSH' },
    { title: 'First Love', value: 'FIRST_LOVE' },
    { title: 'Daily Ramble', value: 'DAILY_RAMBLE'}
];

export const loggedOutLinks = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Most Read', to: '/top-read', icon: HiOutlinePhotograph },
  { name: 'Top Writers', to: '/top-writers', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  { name: 'Login', to: 'authentication/login', icon: HiLogin},
  { name: 'Sign Up', to: 'authentication/signup', icon: RiUserSettingsFill}
];

export const loggedInLinks = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Most Read', to: '/top-read', icon: HiOutlinePhotograph },
  { name: 'Top Writers', to: '/top-writers', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
