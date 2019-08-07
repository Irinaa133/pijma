import React, {FC} from 'react'

import {Svg, Path} from '../primitive'

export type CountryCode =
  'AM' | 'AZ' | 'BY' | 'EE' | 'GB' | 'GE' | 'IL' | 'IN' |
  'JP' | 'KG' | 'KR' | 'KZ' | 'LT' | 'LV' | 'MD' | 'PA' |
  'RU' | 'TH' | 'TJ' | 'TR' | 'UA' | 'US' | 'UZ' | 'VN'

export interface FlagProps {
  code: CountryCode
}

const flags: {[code in CountryCode]: [string, string][]} = {
  'AM': [
    ['#e04252', 'm0 0v5h21v-5z'],
    ['#1e4aa6', 'm0 5v5h21v-5z'],
    ['#f2b54a', 'm0 10v5h21v-5z'],
  ],
  'AZ': [
    ['#24aad5', 'm0 0v5h21v-5z'],
    ['#ed1845', 'm0 5v5h21v-5z'],
    ['#21bf75', 'm0 10v5h21v-5z'],
    ['#fff', 'M10,7.5c0,0.7,0.6,1.3,1.2,1.2h0.1C11.1,8.9,10.8,9,10.5,9C9.7,9,9,8.3,9,7.5S9.7,6,10.5,6   c0.3,0,0.6,0.1,0.8,0.3h-0.1C10.6,6.3,10,6.8,10,7.5z M11.5,8C11.2,8,11,7.8,11,7.5S11.2,7,11.5,7S12,7.2,12,7.5S11.8,8,11.5,8z'],
  ],
  'BY': [
    ['#5cbe6b', 'm0 10v5h21v-5z'],
    ['#c63442', 'm0 0v10h21v-10z'],
    ['#fff', 'm3 12.7v2.3h-3v-15h3v2.2l-0.5 0.8 0.5 0.7v1.5l-0.5 0.8 0.5 0.7v1.5l-0.5 0.8 0.5 0.7v1.5l-0.5 0.8z'],
    ['#c63442', 'm0.5 1.5 1-1.5 1 1.5-1 1.5-1-1.5zm0 3 1-1.5 1 1.5-1 1.5-1-1.5zm0 3 1-1.5 1 1.5-1 1.5-1-1.5zm0 3 1-1.5 1 1.5-1 1.5-1-1.5zm0 3 1-1.5 1 1.5-1 1.5-1-1.5z'],
  ],
  'EE': [
    ['#5597d8', 'm0 0v5h21v-5z'],
    ['#000', 'm0 5v5h21v-5z'],
    ['#fff', 'm0 10v5h21v-5z'],
  ],
  'GB': [
    ['#0a17a7', 'm8 0h-6.8l6.8 4.6z'],
    ['#0a17a7', 'm0 10v3.4l5-3.4z'],
    ['#0a17a7', 'm0 1.6v3.4h5z'],
    ['#0a17a7', 'm19.8 0h-6.8v4.6z'],
    ['#0a17a7', 'm21 5v5h-5l5 3.4v-11.8l-5 3.4z'],
    ['#0a17a7', 'm13 15h6.8l-6.8-4.6z'],
    ['#0a17a7', 'm1.2 15h6.8v-4.6z'],
    ['#fff', 'm14.8 10.1c0.1-0.1 0.2-0.1 0.3-0.1l5.9 4v-0.6l-5-3.4h5v-5h-5l5-3.4v-1.2l-6.9 4.6c-0.1 0-0.2 0-0.3-0.1s0-0.3 0.1-0.3l6.9-4.6h-0.9l-6.9 4.6v-4.6h-5v4.6l-6.8-4.6h-1.2v0.4l6.1 4.1c0.1 0.1 0.1 0.2 0.1 0.3-0.1 0.2-0.2 0.2-0.3 0.1l-5.9-3.9v0.6l5 3.4h-5v5h5l-5 3.4v1.1l6.8-4.5c0.1-0.1 0.3 0 0.3 0.1 0.1 0.1 0 0.3-0.1 0.3l-6.8 4.6h1l6.8-4.6v4.6h5v-4.6l6.8 4.6h1.2v-0.4l-6.1-4.1c-0.1-0.1-0.2-0.3-0.1-0.4z'],
    ['#d91d33', 'm13.8 4.9c0.1 0.1 0.2 0.1 0.3 0.1l6.9-4.6v-0.4h-0.2l-6.9 4.5c-0.2 0.1-0.2 0.3-0.1 0.4z'],
    ['#d91d33', 'm15.1 10.1c-0.1-0.1-0.3 0-0.3 0.1-0.1 0.1 0 0.3 0.1 0.3l6.1 4.1v-0.6z'],
    ['#d91d33', 'm6.2 4.9c0.1-0.1 0-0.3-0.1-0.3l-6.1-4.2v0.6l5.9 4c0.1 0 0.2 0 0.3-0.1z'],
    ['#d91d33', 'm7.2 10.1c-0.1-0.1-0.2-0.1-0.3-0.1l-6.9 4.5v0.5h0.2l6.9-4.6c0.1-0.1 0.2-0.2 0.1-0.3z'],
    ['#d91d33', 'm0 9h9v6h3v-6h9v-3h-9v-6h-3v6h-9z'],
  ],
  'GE': [
    ['#fff', 'm0 0v15h21v-15z'],
    ['#fd0d1b', 'm9 6h-9v3h9v6h3v-6h9v-3h-9v-6h-3z'],
    ['#fd0d1b', 'm16.2 2.7-0.2-1.2h1l-0.2 1.2 1.2-0.2v1l-1.2-0.2 0.2 1.2h-1l0.2-1.2-1.2 0.2v-1z'],
    ['#fd0d1b', 'm4.2 2.7-0.2-1.2h1l-0.2 1.2 1.2-0.2v1l-1.2-0.2 0.2 1.2h-1l0.2-1.2-1.2 0.2v-1z'],
    ['#fd0d1b', 'm4.2 11.7-0.2-1.2h1l-0.2 1.2 1.2-0.2v1l-1.2-0.2 0.2 1.2h-1l0.2-1.2-1.2 0.2v-1z'],
    ['#fd0d1b', 'm16.2 11.7-0.2-1.2h1l-0.2 1.2 1.2-0.2v1l-1.2-0.2 0.2 1.2h-1l0.2-1.2-1.2 0.2v-1z'],
  ],
  'IL': [
    ['#fff', 'm0 0v15h21v-15z'],
    ['#5882d4', 'm0 0v3h21v-3z'],
    ['#5882d4', 'm0 12v3h21v-3z'],
    ['#5882d4', 'm10.004 3.5859-3.4336 6.0645h6.752zm-0.00781 1.0273 2.4844 4.5371h-5.0527z'],
    ['#5882d4', 'm6.5703 5.3496 0.21289 0.37305 3.2207 5.6914 3.3184-6.0645zm0.85742 0.5h5.0527l-2.4844 4.5371z'],
  ],
  'IN': [
    ['#fff', 'm0 0v15h21v-15z'],
    ['#ef680f', 'm0 0v5h21v-5z'],
    ['#3f9a3c', 'm0 10v5h21v-5z'],
    ['#181A93', 'm10.5 9.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zm0-0.5c0.8 0 1.5-0.7 1.5-1.5s-0.7-1.5-1.5-1.5-1.5 0.7-1.5 1.5 0.7 1.5 1.5 1.5zm0-0.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1-0.4 1-1 1z'],
  ],
  'JP': [
    ['#fff', 'm0 0v15h21v-15z'],
	  ['#bd0536', 'm14 7.5a3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1-3.5-3.5 3.5 3.5 0 0 1 3.5-3.5 3.5 3.5 0 0 1 3.5 3.5z'],
  ],
  'KG': [
    ['#e6253f', 'm0 0v15h21v-15z'],
    ['#fee835', 'm13 7.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5z'],
    ['#FEE835', 'm13.9 8.3 2.1-0.8-2.1-0.8 1.5-1.6-2.2 0.2 0.7-2.1-1.9 1.1-0.3-2.2-1.2 1.9-1.2-1.9-0.3 2.2-1.9-1.1 0.7 2.1-2.3-0.2 1.5 1.6-2 0.8 2.1 0.8-1.6 1.6 2.2-0.2-0.7 2.1 2-1.1 0.3 2.2 1.2-1.8 1.2 1.8 0.3-2.2 1.9 1.1-0.7-2.1 2.2 0.2-1.5-1.6zm-3.4 2.7c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z'],
  ],
  'KR': [
    ['#fff', 'm0 0v15h21v-15z'],
    ['#838383', 'm14.2 3.9c-0.1-0.1 0-0.3 0.1-0.3l0.4-0.2c0.1-0.1 0.3 0 0.3 0.1l1.2 2.2c0.1 0.1 0 0.3-0.1 0.3l-0.4 0.2c-0.1 0.1-0.3 0-0.3-0.1l-1.2-2.2zm1.3-0.7c-0.1-0.1 0-0.3 0.1-0.3l0.4-0.3c0.1-0.1 0.3 0 0.3 0.1l1.2 2.2c0.1 0.1 0 0.3-0.1 0.3l-0.4 0.2c-0.1 0.1-0.3 0-0.3-0.1l-1.2-2.1zm-12.1 7c-0.1-0.1 0-0.3 0.1-0.3l0.4-0.2c0.1-0.1 0.3 0 0.3 0.1l1.2 2.2c0.1 0.1 0 0.3-0.1 0.3l-0.3 0.1c-0.1 0.1-0.3 0-0.3-0.1l-1.3-2.1zm1.3-0.8c-0.1-0.1 0-0.3 0.1-0.3l0.4-0.2c0.1-0.1 0.3 0 0.3 0.1l1.2 2.2c0.1 0.1 0 0.3-0.1 0.3l-0.4 0.2c-0.1 0.1-0.3 0-0.3-0.1l-1.2-2.2zm10.8-0.5c0.1-0.1 0.2-0.2 0.3-0.1l0.4 0.2c0.1 0.1 0.2 0.2 0.1 0.3l-1.2 2.2c-0.1 0.1-0.2 0.2-0.3 0.1l-0.4-0.2c-0.1-0.1-0.2-0.2-0.1-0.3l1.2-2.2zm1.3 0.8c0.1-0.1 0.2-0.2 0.3-0.1l0.4 0.2c0.1 0.1 0.2 0.2 0.1 0.3l-1.2 2.2c-0.1 0.1-0.2 0.2-0.3 0.1l-0.4-0.2c-0.1-0.1-0.2-0.2-0.1-0.3l1.2-2.2zm-12.2-7c0.1-0.1 0.2-0.2 0.4-0.1l0.4 0.2c0.1 0.1 0.2 0.2 0.1 0.4l-1.3 2.1c0 0.1-0.2 0.2-0.3 0.1l-0.4-0.2c-0.1-0.1-0.2-0.2-0.1-0.4l1.2-2.1zm1.3 0.7c0.1-0.1 0.2-0.1 0.4-0.1l0.4 0.2c0.1 0.1 0.2 0.2 0.1 0.3l-1.3 2.3c0 0.1-0.2 0.1-0.3 0.1l-0.4-0.3c-0.1 0-0.2-0.2-0.1-0.3l1.2-2.2z'],
    ['#E01B41', 'm10.5 8c1-1.5 2.9-1.5 3.5-0.1v-0.4c0-1.9-1.6-3.5-3.5-3.5s-3.5 1.6-3.5 3.5c0 0.2 0 0.4 0.1 0.5 1 1 2.4 1.5 3.4 0z'],
    ['#0E4B9C', 'm14 7.9c-0.5-1.4-2.5-1.4-3.5 0.1s-2.4 1-3.4 0c0.3 1.7 1.7 3 3.4 3 1.8 0 3.2-1.3 3.5-3.1z'],
  ],
  'KZ': [
    ['#30c6e0', 'm0 0v15h21v-15z'],
    ['#FFCD4B', 'M10.5,11l-1.2,1.8L9,10.7l-1.9,1.1l0.7-2.1L5.5,9.9l1.5-1.6L5,7.5l2.1-0.8L5.5,5.1l2.2,0.2   L7.1,3.2L9,4.3l0.3-2.2L10.5,4l1.2-1.8L12,4.3l1.9-1.1l-0.7,2.1l2.2-0.2l-1.5,1.6L16,7.5l-2.1,0.8l1.5,1.6l-2.2-0.2l0.7,2.1   L12,10.7l-0.3,2.2L10.5,11z M10.5,11c1.9,0,3.5-1.6,3.5-3.5S12.4,4,10.5,4S7,5.6,7,7.5S8.6,11,10.5,11z M1,1.3C1,1.1,1.1,1,1.3,1   h0.5C1.9,1,2,1.1,2,1.3v0.5C2,1.9,1.9,2,1.7,2H1.3C1.1,2,1,1.9,1,1.7V1.3z M1,3.3C1,3.1,1.1,3,1.3,3h0.5C1.9,3,2,3.1,2,3.3v0.5   C2,3.9,1.9,4,1.7,4H1.3C1.1,4,1,3.9,1,3.7V3.3z M1,5.3C1,5.1,1.1,5,1.3,5h0.5C1.9,5,2,5.1,2,5.3v0.5C2,5.9,1.9,6,1.7,6H1.3   C1.1,6,1,5.9,1,5.7V5.3z M1,7.3C1,7.1,1.1,7,1.3,7h0.5C1.9,7,2,7.1,2,7.3v0.5C2,7.9,1.9,8,1.7,8H1.3C1.1,8,1,7.9,1,7.7V7.3z M1,9.3   C1,9.1,1.1,9,1.3,9h0.5C1.9,9,2,9.1,2,9.3v0.5C2,9.9,1.9,10,1.7,10H1.3C1.1,10,1,9.9,1,9.7V9.3z M1,11.3C1,11.1,1.1,11,1.3,11h0.5   C1.9,11,2,11.1,2,11.3v0.5C2,11.9,1.9,12,1.7,12H1.3C1.1,12,1,11.9,1,11.7V11.3z M1,13.3C1,13.1,1.1,13,1.3,13h0.5   C1.9,13,2,13.1,2,13.3v0.5C2,13.9,1.9,14,1.7,14H1.3C1.1,14,1,13.9,1,13.7V13.3z M2,12.3C2,12.1,2.1,12,2.3,12h0.5   C2.9,12,3,12.1,3,12.3v0.5C3,12.9,2.9,13,2.7,13H2.3C2.1,13,2,12.9,2,12.7V12.3z M2,10.3C2,10.1,2.1,10,2.3,10h0.5   C2.9,10,3,10.1,3,10.3v0.5C3,10.9,2.9,11,2.7,11H2.3C2.1,11,2,10.9,2,10.7V10.3z M2,8.3C2,8.1,2.1,8,2.3,8h0.5C2.9,8,3,8.1,3,8.3   v0.5C3,8.9,2.9,9,2.7,9H2.3C2.1,9,2,8.9,2,8.7V8.3z M2,6.3C2,6.1,2.1,6,2.3,6h0.5C2.9,6,3,6.1,3,6.3v0.5C3,6.9,2.9,7,2.7,7H2.3   C2.1,7,2,6.9,2,6.7V6.3z M2,4.3C2,4.1,2.1,4,2.3,4h0.5C2.9,4,3,4.1,3,4.3v0.5C3,4.9,2.9,5,2.7,5H2.3C2.1,5,2,4.9,2,4.7V4.3z M2,2.3   C2,2.1,2.1,2,2.3,2h0.5C2.9,2,3,2.1,3,2.3v0.5C3,2.9,2.9,3,2.7,3H2.3C2.1,3,2,2.9,2,2.7V2.3z M10.5,10.5c-1.7,0-3-1.3-3-3   s1.3-3,3-3s3,1.3,3,3S12.2,10.5,10.5,10.5z'],
  ],
  'LT': [
    ['#000', 'm0 5h21v5h-21z'],
    ['#fdc146', 'm0 0h21v5h-21z'],
    ['#cf3039', 'm0 10h21v5h-21z'],
  ],
  'LV': [
    ['#af5961', 'm0 0v15h21v-15z'],
    ['#fff', 'm0 4v7h21v-7z'],
  ],
  'MD': [
    ['#ffd200', 'm21 15v-15h-21v15z'],
    ['#0046ae', 'm6 15v-15h-6v15z'],
    ['#cc092f', 'm21 15v-15h-6v15z'],
    ['#9b7745', 'm10.5 8c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zm2.4 1c-0.2 1.1-1.2 2-2.4 2s-2.2-0.9-2.4-2h-1.1v-1h2.1c-0.1 0.2-0.1 0.3-0.1 0.5 0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.2 0-0.3-0.1-0.5h2.1v1z'],
  ],
  'PA': [
    ['#fff', 'm0 0h21v15h-21z'],
    ['#20629a', 'm5 4.3-1.2 0.8 0.4-1.3-1.1-0.9 1.4-0.1 0.5-1.3 0.5 1.3 1.4 0.1-1.1 0.9 0.4 1.3z'],
    ['#b82839', 'm15.5 11.8-1.2 0.8 0.4-1.3-1.1-0.9 1.4-0.1 0.5-1.3 0.5 1.3 1.4 0.1-1.1 0.9 0.4 1.3z'],
    ['#b82839', 'm11 0h10v7h-10z'],
    ['#20629a', 'm0 7h11v8h-11z'],
  ],
  'RU': [
    ['#fff', 'm0 0v5h21v-5z'],
    ['#2e5bb3', 'm0 5v5h21v-5z'],
    ['#cf2338', 'm0 10v5h21v-5z'],
  ],
  'TH': [
    ['#f12532', 'm0 0h21v15h-21z'],
    ['#f5f5f5', 'm0 3h21v9h-21z'],
    ['#322b6c', 'm0 5h21v5h-21z'],
  ],
  'TJ': [
    ['#fff', 'm0 0v15h21v-15z'],
    ['#d22f39', 'm0 0v5h21v-5z'],
    ['#317d33', 'm0 10v5h21v-5z'],
    ['#FAD14E', 'M10.1,8C10,7.8,10,7.6,10,7.5C10,7.2,10.2,7,10.5,7S11,7.2,11,7.5c0,0.1,0,0.3-0.1,0.5h0.6   C11.8,8,12,8.2,12,8.5C12,8.8,11.8,9,11.5,9h-2C9.2,9,9,8.8,9,8.5C9,8.2,9.2,8,9.5,8H10.1L10.1,8z M9.5,7C9.2,7,9,6.8,9,6.5   S9.2,6,9.5,6S10,6.2,10,6.5S9.8,7,9.5,7z M11.5,7C11.2,7,11,6.8,11,6.5S11.2,6,11.5,6S12,6.2,12,6.5S11.8,7,11.5,7z M13.5,8   C13.2,8,13,7.8,13,7.5S13.2,7,13.5,7S14,7.2,14,7.5S13.8,8,13.5,8z M7.5,8C7.2,8,7,7.8,7,7.5S7.2,7,7.5,7S8,7.2,8,7.5S7.8,8,7.5,8z   '],
  ],
  'TR': [
    ['#e82e2e', 'm0 0v15h21v-15z'],
    ['#fff', 'm13.1 4.7c-0.7-0.4-1.5-0.7-2.3-0.7-2.1 0-3.8 1.6-3.8 3.5s1.7 3.5 3.8 3.5c0.9 0 1.7-0.3 2.3-0.7-0.8 1.1-2.1 1.7-3.6 1.7-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c1.4 0 2.7 0.7 3.6 1.7zm1.2 3.4-0.9 1.1 0.1-1.4-1.3-0.5 1.4-0.4 0.1-1.4 0.8 1.2 1.4-0.4-0.9 1.1 0.8 1.2-1.5-0.5z'],
  ],
  'UA': [
    ['#126ccf', 'm0 0v8h21v-8z'],
    ['#fed949', 'm0 8v7h21v-7z'],
  ],
  'US': [
    ['#fff', 'm0 0h21v15h-21z'],
    ['#cb2e42', 'm0 0h21v1h-21zm0 2h21v1h-21zm0 2h21v1h-21zm0 2h21v1h-21zm0 2h21v1h-21zm0 2h21v1h-21zm0 2h21v1h-21zm0 2h21v1h-21z'],
    ['#46467f', 'm0 0h9v7h-9z'],
    ['#fff', 'm1.5 2a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm2 0a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm2 0a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm2 0a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm-5 1a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm2 0a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm2 0a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm1 1a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm-2 0a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm-2 0a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm-2 0a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm1 1a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm2 0a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm2 0a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm1 1a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm-2 0a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm-2 0a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1zm-2 0a0.5 0.5 0 1 1 0-1 0.5 0.5 0 0 1 0 1z'],
  ],
  'UZ': [
    ['#fff', 'm0 0v15h21v-15z'],
    ['#23c840', 'm0 10v5h21v-5z'],
    ['#04aac8', 'm0 0v5h21v-5z'],
    ['#fff', 'M4.3,1.3C4.1,1.1,3.8,1,3.5,1C2.7,1,2,1.7,2,2.5S2.7,4,3.5,4c0.3,0,0.6-0.1,0.8-0.3   c0,0-0.1,0-0.1,0C3.6,3.7,3,3.2,3,2.5S3.6,1.2,4.3,1.3C4.3,1.2,4.3,1.3,4.3,1.3z M5.5,4C5.2,4,5,3.8,5,3.5S5.2,3,5.5,3S6,3.2,6,3.5   S5.8,4,5.5,4z M7.5,2C7.2,2,7,1.8,7,1.5S7.2,1,7.5,1S8,1.2,8,1.5S7.8,2,7.5,2z M9.5,2C9.2,2,9,1.8,9,1.5S9.2,1,9.5,1S10,1.2,10,1.5   S9.8,2,9.5,2z M9.5,4C9.2,4,9,3.8,9,3.5S9.2,3,9.5,3S10,3.2,10,3.5S9.8,4,9.5,4z M7.5,4C7.2,4,7,3.8,7,3.5S7.2,3,7.5,3S8,3.2,8,3.5   S7.8,4,7.5,4z'],
  ],
  'VN': [
    ['#e82e2e', 'm0 0v15h21v-15z'],
    ['#fffe4e', 'm10.5 9.3-2.6 1.8 0.9-3.1-2.6-1.9h3.3l1-3.1 1 3.1h3.3l-2.6 1.9 0.9 3.1z'],
  ],
}

export const Flag: FC<FlagProps> = ({code = 'RU'}) => (
  <Svg width={6} height={4} viewBox="0 0 24 16" focusable="false">
    {flags[code].map((flag, i) => (
      <Path key={i} fill={flag[0]} d={flag[1]}/>
    ))}
    <Path fill="none" stroke="#000000" strokeOpacity="0.1" d="m0.5 0.5v14h20v-14h-20z" />
  </Svg>
)