

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());


const VASHYA = {
    'Aries': 'Chatushpad',
    'Taurus': 'Chatushpad',
    'Gemini': 'Dwipad',
    'Cancer': 'Jalachar',
    'Leo': 'Vanachar',
    'Virgo': 'Dwipad',
    'Libra': 'Dwipad',
    'Scorpio': 'Keet',
    'Sagittarius': 'Chatushpad',
    'Capricorn': 'Chatushpad',
    'Aquarius': 'Dwipad',
    'Pisces': 'Jalachar'
  };
  
  const vashyaCompatibility = {
    'ChatushpadChatushpad': 2,
    'ChatushpadDwipad': 1,
    'ChatushpadJalachar': 0,
    'ChatushpadVanachar': 1,
    'ChatushpadKeet': 0,
    'DwipadChatushpad': 1,
    'DwipadDwipad': 2,
    'DwipadJalachar': 0,
    'DwipadVanachar': 0,
    'DwipadKeet': 0,
    'JalacharChatushpad': 0,
    'JalacharDwipad': 0,
    'JalacharJalachar': 2,
    'JalacharVanachar': 0,
    'JalacharKeet': 0,
    'VanacharChatushpad': 1,
    'VanacharDwipad': 0,
    'VanacharJalachar': 0,
    'VanacharVanachar': 2,
    'VanacharKeet': 0,
    'KeetChatushpad': 0,
    'KeetDwipad': 0,
    'KeetJalachar': 0,
    'KeetVanachar': 0,
    'KeetKeet': 2
  };
  
  const VARNA = {
    'Brahmin': 1,
    'Kshatriya': 2,
    'Vaishya': 3,
    'Shudra': 4
  };
  
  const varnaCompatibility = {
    'BrahminBrahmin': 1,
    'BrahminKshatriya': 0,
    'BrahminVaishya': 0,
    'BrahminShudra': 0,
    'KshatriyaBrahmin': 1,
    'KshatriyaKshatriya': 1,
    'KshatriyaVaishya': 0,
    'KshatriyaShudra': 0,
    'VaishyaBrahmin': 1,
    'VaishyaKshatriya': 1,
    'VaishyaVaishya': 1,
    'VaishyaShudra': 0,
    'ShudraBrahmin': 1,
    'ShudraKshatriya': 1,
    'ShudraVaishya': 1,
    'ShudraShudra': 1
  };
  
  const nakshatraData = {
    'Aries': 'Ashwini',
    'Taurus': 'Bharani',
    'Gemini': 'Krittika',
    'Cancer': 'Rohini',
    'Leo': 'Mrigashirsha',
    'Virgo': 'Ardra',
    'Libra': 'Punarvasu',
    'Scorpio': 'Pushya',
    'Sagittarius': 'Ashlesha',
    'Capricorn': 'Magha',
    'Aquarius': 'Purva Phalguni',
    'Pisces': 'Uttara Phalguni'
  };
  
  const nakshatraToNadi = {
    'Ashwini': 'Aadi', 'Bharani': 'Madhya', 'Krittika': 'Antya',
    'Rohini': 'Antya', 'Mrigashirsha': 'Madhya', 'Ardra': 'Aadi',
    'Punarvasu': 'Aadi', 'Pushya': 'Madhya', 'Ashlesha': 'Antya',
    'Magha': 'Antya', 'Purva Phalguni': 'Madhya', 'Uttara Phalguni': 'Aadi',
    'Hasta': 'Aadi', 'Chitra': 'Madhya', 'Swati': 'Antya', 'Vishakha': 'Antya',
    'Anuradha': 'Madhya', 'Jyeshtha': 'Aadi', 'Mula': 'Aadi',
    'Purva Ashadha': 'Madhya', 'Uttara Ashadha': 'Antya', 'Shravana': 'Antya',
    'Dhanishta': 'Madhya', 'Shatabhisha': 'Aadi', 'Purva Bhadrapada': 'Aadi',
    'Uttara Bhadrapada': 'Antya', 'Revati': 'Antya'
  };
  
  const nadiCompatibility = {
    'AadiAadi': 0, 'AadiMadhya': 8, 'AadiAntya': 8,
    'MadhyaAadi': 8, 'MadhyaMadhya': 0, 'MadhyaAntya': 8,
    'AntyaAadi': 8, 'AntyaMadhya': 8, 'AntyaAntya': 0
  };
  
  const taraCompatibility = {
      'AshwiniAshwini':3, 'AshwiniBharani': 3, 'AshwiniKrittika': 2, 'AshwiniRohini': 3, 'AshwiniMrigashirsha': 2,
      'AshwiniArdra': 3, 'AshwiniPunarvasu': 2, 'AshwiniPushya': 3, 'AshwiniAshlesha': 2,
      'AshwiniMagha': 3, 'AshwiniPurva Phalguni': 2, 'AshwiniUttara Phalguni': 3,
      'BharaniBharani': 3, 'BharaniAshwini': 3, 'BharaniKrittika': 1, 'BharaniRohini': 2, 'BharaniMrigashirsha': 1,
      'BharaniArdra': 2, 'BharaniPunarvasu': 1, 'BharaniPushya': 2, 'BharaniAshlesha': 1,
      'BharaniMagha': 2, 'BharaniPurva Phalguni': 1, 'BharaniUttara Phalguni': 2,
      'KrittikaKrittika': 3, 'KrittikaAshwini': 2, 'KrittikaBharani': 1, 'KrittikaRohini': 1, 'KrittikaMrigashirsha': 2,
      'KrittikaArdra': 1, 'KrittikaPunarvasu': 2, 'KrittikaPushya': 1, 'KrittikaAshlesha': 2,
      'KrittikaMagha': 1, 'KrittikaPurva Phalguni': 2, 'KrittikaUttara Phalguni': 1,
      'RohiniRohini': 3, 'RohiniAshwini': 3, 'RohiniBharani': 2, 'RohiniKrittika': 1, 'RohiniMrigashirsha': 2,
      'RohiniArdra': 3, 'RohiniPunarvasu': 2, 'RohiniPushya': 3, 'RohiniAshlesha': 2,
      'RohiniMagha': 3, 'RohiniPurva Phalguni': 2, 'RohiniUttara Phalguni': 3,
      'MrigashirshaMrigashirsha': 3, 'MrigashirshaAshwini': 2, 'MrigashirshaBharani': 1, 'MrigashirshaKrittika': 2, 'MrigashirshaRohini': 2,
      'MrigashirshaArdra': 1, 'MrigashirshaPunarvasu': 2, 'MrigashirshaPushya': 1, 'MrigashirshaAshlesha': 2,
      'MrigashirshaMagha': 1, 'MrigashirshaPurva Phalguni': 2, 'MrigashirshaUttara Phalguni': 1,
      'ArdraArdra': 3, 'ArdraAshwini': 3, 'ArdraBharani': 2, 'ArdraKrittika': 1, 'ArdraRohini': 3,
      'ArdraMrigashirsha': 1, 'ArdraPunarvasu': 2, 'ArdraPushya': 1, 'ArdraAshlesha': 2,
      'ArdraMagha': 3, 'ArdraPurva Phalguni': 2, 'ArdraUttara Phalguni': 3,
      'PunarvasuPunarvasu': 3, 'PunarvasuAshwini': 2, 'PunarvasuBharani': 1, 'PunarvasuKrittika': 2, 'PunarvasuRohini': 2,
      'PunarvasuMrigashirsha': 2, 'PunarvasuArdra': 2, 'PunarvasuPushya': 2, 'PunarvasuAshlesha': 1,
      'PunarvasuMagha': 2, 'PunarvasuPurva Phalguni': 2, 'PunarvasuUttara Phalguni': 2,
      'PushyaPushya': 3, 'PushyaAshwini': 3, 'PushyaBharani': 2, 'PushyaKrittika': 1, 'PushyaRohini': 3,
      'PushyaMrigashirsha': 1, 'PushyaArdra': 1, 'PushyaPunarvasu': 2, 'PushyaAshlesha': 2,
      'PushyaMagha': 1, 'PushyaPurva Phalguni': 2, 'PushyaUttara Phalguni': 1,
      'AshleshaAshlesha': 3, 'AshleshaAshwini': 2, 'AshleshaBharani': 1, 'AshleshaKrittika': 2, 'AshleshaRohini': 2,
      'AshleshaMrigashirsha': 2, 'AshleshaArdra': 2, 'AshleshaPunarvasu': 1, 'AshleshaPushya': 2,
      'AshleshaMagha': 2, 'AshleshaPurva Phalguni': 2, 'AshleshaUttara Phalguni': 2,
      'MaghaMagha': 3, 'MaghaAshwini': 3, 'MaghaBharani': 2, 'MaghaKrittika': 1, 'MaghaRohini': 3,
      'MaghaMrigashirsha': 1, 'MaghaArdra': 3, 'MaghaPunarvasu': 2, 'MaghaPushya': 1,
      'MaghaAshlesha': 2, 'MaghaPurva Phalguni': 2, 'MaghaUttara Phalguni': 3,
      'Purva PhalguniPurva Phalguni': 3, 'Purva PhalguniAshwini': 2, 'Purva PhalguniBharani': 1, 'Purva PhalguniKrittika': 2, 'Purva PhalguniRohini': 2,
      'Purva PhalguniMrigashirsha': 2, 'Purva PhalguniArdra': 2, 'Purva PhalguniPunarvasu': 2, 'Purva PhalguniPushya': 2,
      'Purva PhalguniAshlesha': 2, 'Purva PhalguniMagha': 2, 'Purva PhalguniUttara Phalguni': 2,
      'Uttara PhalguniUttara Phalguni': 3, 'Uttara PhalguniAshwini': 3, 'Uttara PhalguniBharani': 2, 'Uttara PhalguniKrittika': 1, 'Uttara PhalguniRohini': 3,
      'Uttara PhalguniMrigashirsha': 1, 'Uttara PhalguniArdra': 3, 'Uttara PhalguniPunarvasu': 2, 'Uttara PhalguniPushya': 1,
      'Uttara PhalguniAshlesha': 2, 'Uttara PhalguniMagha': 3, 'Uttara PhalguniPurva Phalguni': 2,
    };
  
  // Yoni compatibility scores
  const yoniCompatibility = {
      'Ashwini:Ashwini': 4, 'Ashwini:Bharani': 4, 'Ashwini:Krittika': 3, 'Ashwini:Rohini': 2, 'Ashwini:Mrigashirsha': 3,
      'Ashwini:Ardra': 1, 'Ashwini:Punarvasu': 4, 'Ashwini:Pushya': 1, 'Ashwini:Ashlesha': 2,
      'Ashwini:Magha': 3, 'Ashwini:Purva Phalguni': 4, 'Ashwini:Uttara Phalguni': 1, 'Ashwini:Hasta': 2,
      'Ashwini:Chitra': 3, 'Ashwini:Swati': 4, 'Ashwini:Vishakha': 2, 'Ashwini:Anuradha': 3,
      'Ashwini:Jyeshtha': 2, 'Ashwini:Mula': 1, 'Ashwini:Purva Ashadha': 3, 'Ashwini:Uttara Ashadha': 2,
      'Ashwini:Shravana': 2, 'Ashwini:Dhanishta': 3, 'Ashwini:Shatabhisha': 4, 'Ashwini:Purva Bhadrapada': 2,
      'Ashwini:Uttara Bhadrapada': 3, 'Ashwini:Revati': 4,
  
      'Bharani:Bharani': 4, 'Bharani:Ashwini': 4, 'Bharani:Krittika': 2, 'Bharani:Rohini': 3, 'Bharani:Mrigashirsha': 2,
      'Bharani:Ardra': 3, 'Bharani:Punarvasu': 1, 'Bharani:Pushya': 2, 'Bharani:Ashlesha': 3,
      'Bharani:Magha': 2, 'Bharani:Purva Phalguni': 3, 'Bharani:Uttara Phalguni': 2, 'Bharani:Hasta': 3,
      'Bharani:Chitra': 1, 'Bharani:Swati': 2, 'Bharani:Vishakha': 3, 'Bharani:Anuradha': 2,
      'Bharani:Jyeshtha': 3, 'Bharani:Mula': 2, 'Bharani:Purva Ashadha': 1, 'Bharani:Uttara Ashadha': 2,
      'Bharani:Shravana': 3, 'Bharani:Dhanishta': 2, 'Bharani:Shatabhisha': 2, 'Bharani:Purva Bhadrapada': 3,
      'Bharani:Uttara Bhadrapada': 1, 'Bharani:Revati': 2,
  
      'Krittika:Krittika': 4, 'Krittika:Ashwini': 3, 'Krittika:Bharani': 2, 'Krittika:Rohini': 1, 'Krittika:Mrigashirsha': 2,
      'Krittika:Ardra': 2, 'Krittika:Punarvasu': 3, 'Krittika:Pushya': 2, 'Krittika:Ashlesha': 1,
      'Krittika:Magha': 2, 'Krittika:Purva Phalguni': 3, 'Krittika:Uttara Phalguni': 2, 'Krittika:Hasta': 3,
      'Krittika:Chitra': 2, 'Krittika:Swati': 1, 'Krittika:Vishakha': 2, 'Krittika:Anuradha': 3,
      'Krittika:Jyeshtha': 2, 'Krittika:Mula': 1, 'Krittika:Purva Ashadha': 2, 'Krittika:Uttara Ashadha': 3,
      'Krittika:Shravana': 2, 'Krittika:Dhanishta': 1, 'Krittika:Shatabhisha': 2, 'Krittika:Purva Bhadrapada': 3,
      'Krittika:Uttara Bhadrapada': 2, 'Krittika:Revati': 1,
  
      'Rohini:Rohini': 4, 'Rohini:Ashwini': 2, 'Rohini:Bharani': 3, 'Rohini:Krittika': 1, 'Rohini:Mrigashirsha': 2,
      'Rohini:Ardra': 3, 'Rohini:Punarvasu': 2, 'Rohini:Pushya': 3, 'Rohini:Ashlesha': 2,
      'Rohini:Magha': 3, 'Rohini:Purva Phalguni': 2, 'Rohini:Uttara Phalguni': 3, 'Rohini:Hasta': 2,
      'Rohini:Chitra': 3, 'Rohini:Swati': 2, 'Rohini:Vishakha': 1, 'Rohini:Anuradha': 2,
      'Rohini:Jyeshtha': 3, 'Rohini:Mula': 2, 'Rohini:Purva Ashadha': 3, 'Rohini:Uttara Ashadha': 2,
      'Rohini:Shravana': 1, 'Rohini:Dhanishta': 2, 'Rohini:Shatabhisha': 3, 'Rohini:Purva Bhadrapada': 2,
      'Rohini:Uttara Bhadrapada': 3, 'Rohini:Revati': 2,
  
      'Mrigashirsha:Mrigashirsha': 4, 'Mrigashirsha:Ashwini': 3, 'Mrigashirsha:Bharani': 2, 'Mrigashirsha:Krittika': 2, 'Mrigashirsha:Rohini': 2,
      'Mrigashirsha:Ardra': 2, 'Mrigashirsha:Punarvasu': 2, 'Mrigashirsha:Pushya': 2, 'Mrigashirsha:Ashlesha': 2,
      'Mrigashirsha:Magha': 2, 'Mrigashirsha:Purva Phalguni': 2, 'Mrigashirsha:Uttara Phalguni': 2, 'Mrigashirsha:Hasta': 2,
      'Mrigashirsha:Chitra': 2, 'Mrigashirsha:Swati': 2, 'Mrigashirsha:Vishakha': 2, 'Mrigashirsha:Anuradha': 2,
      'Mrigashirsha:Jyeshtha': 2, 'Mrigashirsha:Mula': 2, 'Mrigashirsha:Purva Ashadha': 2, 'Mrigashirsha:Uttara Ashadha': 2,
      'Mrigashirsha:Shravana': 2, 'Mrigashirsha:Dhanishta': 2, 'Mrigashirsha:Shatabhisha': 2, 'Mrigashirsha:Purva Bhadrapada': 2,
      'Mrigashirsha:Uttara Bhadrapada': 2, 'Mrigashirsha:Revati': 2,
  
      'Ardra:Ardra': 4, 'Ardra:Ashwini': 1, 'Ardra:Bharani': 3, 'Ardra:Krittika': 2, 'Ardra:Rohini': 3,
      'Ardra:Mrigashirsha': 2, 'Ardra:Punarvasu': 3, 'Ardra:Pushya': 2, 'Ardra:Ashlesha': 1, 'Ardra:Magha': 2,
      'Ardra:Purva Phalguni': 3, 'Ardra:Uttara Phalguni': 2, 'Ardra:Hasta': 1, 'Ardra:Chitra': 2,
      'Ardra:Swati': 3, 'Ardra:Vishakha': 2, 'Ardra:Anuradha': 1, 'Ardra:Jyeshtha': 2,
      'Ardra:Mula': 3, 'Ardra:Purva Ashadha': 2, 'Ardra:Uttara Ashadha': 1, 'Ardra:Shravana': 2,
      'Ardra:Dhanishta': 3, 'Ardra:Shatabhisha': 2, 'Ardra:Purva Bhadrapada': 1, 'Ardra:Uttara Bhadrapada': 2,
      'Ardra:Revati': 3,
  
      'Punarvasu:Punarvasu': 4, 'Punarvasu:Ashwini': 4, 'Punarvasu:Bharani': 1, 'Punarvasu:Krittika': 3, 'Punarvasu:Rohini': 2,
      'Punarvasu:Mrigashirsha': 2, 'Punarvasu:Ardra': 3, 'Punarvasu:Pushya': 1, 'Punarvasu:Ashlesha': 2,
      'Punarvasu:Magha': 2, 'Punarvasu:Purva Phalguni': 3, 'Punarvasu:Uttara Phalguni': 2, 'Punarvasu:Hasta': 2,
      'Punarvasu:Chitra': 3, 'Punarvasu:Swati': 4, 'Punarvasu:Vishakha': 2, 'Punarvasu:Anuradha': 3,
      'Punarvasu:Jyeshtha': 2, 'Punarvasu:Mula': 1, 'Punarvasu:Purva Ashadha': 3, 'Punarvasu:Uttara Ashadha': 2,
      'Punarvasu:Shravana': 2, 'Punarvasu:Dhanishta': 3, 'Punarvasu:Shatabhisha': 4, 'Punarvasu:Purva Bhadrapada': 2,
      'Punarvasu:Uttara Bhadrapada': 3, 'Punarvasu:Revati': 4,
  
      'Pushya:Pushya': 4, 'Pushya:Ashwini': 1, 'Pushya:Bharani': 2, 'Pushya:Krittika': 2, 'Pushya:Rohini': 3,
      'Pushya:Mrigashirsha': 2, 'Pushya:Ardra': 2, 'Pushya:Punarvasu': 1, 'Pushya:Ashlesha': 2,
      'Pushya:Magha': 3, 'Pushya:Purva Phalguni': 2, 'Pushya:Uttara Phalguni': 3, 'Pushya:Hasta': 2,
      'Pushya:Chitra': 3, 'Pushya:Swati': 2, 'Pushya:Vishakha': 1, 'Pushya:Anuradha': 2,
      'Pushya:Jyeshtha': 3, 'Pushya:Mula': 2, 'Pushya:Purva Ashadha': 3, 'Pushya:Uttara Ashadha': 2,
      'Pushya:Shravana': 1, 'Pushya:Dhanishta': 2, 'Pushya:Shatabhisha': 3, 'Pushya:Purva Bhadrapada': 2,
      'Pushya:Uttara Bhadrapada': 3, 'Pushya:Revati': 2,
  
      'Ashlesha:Ashlesha': 4, 'Ashlesha:Ashwini': 2, 'Ashlesha:Bharani': 3, 'Ashlesha:Krittika': 1, 'Ashlesha:Rohini': 2,
      'Ashlesha:Mrigashirsha': 2, 'Ashlesha:Ardra': 1, 'Ashlesha:Punarvasu': 2, 'Ashlesha:Pushya': 2,
      'Ashlesha:Magha': 2, 'Ashlesha:Purva Phalguni': 2, 'Ashlesha:Uttara Phalguni': 2, 'Ashlesha:Hasta': 2,
      'Ashlesha:Chitra': 2, 'Ashlesha:Swati': 2, 'Ashlesha:Vishakha': 2, 'Ashlesha:Anuradha': 2,
      'Ashlesha:Jyeshtha': 2, 'Ashlesha:Mula': 2, 'Ashlesha:Purva Ashadha': 2, 'Ashlesha:Uttara Ashadha': 2,
      'Ashlesha:Shravana': 2, 'Ashlesha:Dhanishta': 2, 'Ashlesha:Shatabhisha': 2, 'Ashlesha:Purva Bhadrapada': 2,
      'Ashlesha:Uttara Bhadrapada': 2, 'Ashlesha:Revati': 2,
  
      'Magha:Magha': 4, 'Magha:Ashwini': 3, 'Magha:Bharani': 2, 'Magha:Krittika': 2, 'Magha:Rohini': 3,
      'Magha:Mrigashirsha': 2, 'Magha:Ardra': 2, 'Magha:Punarvasu': 2, 'Magha:Pushya': 3,
      'Magha:Ashlesha': 2, 'Magha:Purva Phalguni': 3, 'Magha:Uttara Phalguni': 2, 'Magha:Hasta': 2,
      'Magha:Chitra': 3, 'Magha:Swati': 2, 'Magha:Vishakha': 1, 'Magha:Anuradha': 2,
      'Magha:Jyeshtha': 3, 'Magha:Mula': 2, 'Magha:Purva Ashadha': 3, 'Magha:Uttara Ashadha': 2,
      'Magha:Shravana': 2, 'Magha:Dhanishta': 3, 'Magha:Shatabhisha': 4, 'Magha:Purva Bhadrapada': 2,
      'Magha:Uttara Bhadrapada': 3, 'Magha:Revati': 4,
  
      'Purva Phalguni:Purva Phalguni': 4, 'Purva Phalguni:Ashwini': 4, 'Purva Phalguni:Bharani': 3, 'Purva Phalguni:Krittika': 3, 'Purva Phalguni:Rohini': 2,
      'Purva Phalguni:Mrigashirsha': 2, 'Purva Phalguni:Ardra': 3, 'Purva Phalguni:Punarvasu': 3, 'Purva Phalguni:Pushya': 2,
      'Purva Phalguni:Ashlesha': 2, 'Purva Phalguni:Magha': 3, 'Purva Phalguni:Uttara Phalguni': 2, 'Purva Phalguni:Hasta': 3,
      'Purva Phalguni:Chitra': 2, 'Purva Phalguni:Swati': 3, 'Purva Phalguni:Vishakha': 2, 'Purva Phalguni:Anuradha': 3,
      'Purva Phalguni:Jyeshtha': 2, 'Purva Phalguni:Mula': 1, 'Purva Phalguni:Purva Ashadha': 3, 'Purva Phalguni:Uttara Ashadha': 2,
      'Purva Phalguni:Shravana': 2, 'Purva Phalguni:Dhanishta': 3, 'Purva Phalguni:Shatabhisha': 4, 'Purva Phalguni:Purva Bhadrapada': 2,
      'Purva Phalguni:Uttara Bhadrapada': 3, 'Purva Phalguni:Revati': 4,
  
      'Uttara Phalguni:Uttara Phalguni': 4, 'Uttara Phalguni:Ashwini': 1, 'Uttara Phalguni:Bharani': 2, 'Uttara Phalguni:Krittika': 2, 'Uttara Phalguni:Rohini': 3,
      'Uttara Phalguni:Mrigashirsha': 2, 'Uttara Phalguni:Ardra': 2, 'Uttara Phalguni:Punarvasu': 3, 'Uttara Phalguni:Pushya': 2,
      'Uttara Phalguni:Ashlesha': 2, 'Uttara Phalguni:Magha': 2, 'Uttara Phalguni:Purva Phalguni': 2, 'Uttara Phalguni:Hasta': 2,
      'Uttara Phalguni:Chitra': 3, 'Uttara Phalguni:Swati': 2, 'Uttara Phalguni:Vishakha': 1, 'Uttara Phalguni:Anuradha': 2,
      'Uttara Phalguni:Jyeshtha': 3, 'Uttara Phalguni:Mula': 2, 'Uttara Phalguni:Purva Ashadha': 3, 'Uttara Phalguni:Uttara Ashadha': 2,
      'Uttara Phalguni:Shravana': 1, 'Uttara Phalguni:Dhanishta': 2, 'Uttara Phalguni:Shatabhisha': 3, 'Uttara Phalguni:Purva Bhadrapada': 2,
      'Uttara Phalguni:Uttara Bhadrapada': 3, 'Uttara Phalguni:Revati': 2,
    };
  
    const ganaCompatibility = {
      'Ashwini-Ashwini': 6, 'Ashwini-Bharani': 6, 'Ashwini-Krittika': 4, 'Ashwini-Rohini': 5,
      'Ashwini-Mrigashirsha': 6, 'Ashwini-Ardra': 4, 'Ashwini-Punarvasu': 5,
      'Ashwini-Pushya': 6, 'Ashwini-Ashlesha': 4, 'Ashwini-Magha': 5,
      'Ashwini-Purva Phalguni': 6, 'Ashwini-Uttara Phalguni': 4, 'Ashwini-Hasta': 5,
      'Ashwini-Chitra': 6, 'Ashwini-Swati': 4, 'Ashwini-Vishakha': 5,
      'Ashwini-Anuradha': 6, 'Ashwini-Jyeshtha': 4, 'Ashwini-Mula': 5,
      'Ashwini-Purva Ashadha': 6, 'Ashwini-Uttara Ashadha': 4, 'Ashwini-Shravana': 5,
      'Ashwini-Dhanishta': 6, 'Ashwini-Shatabhisha': 4, 'Ashwini-Purva Bhadrapada': 5,
      'Ashwini-Uttara Bhadrapada': 6, 'Ashwini-Revati': 4,
  
      'Bharani-Ashwini': 6, 'Bharani-Bharani': 6, 'Bharani-Krittika': 6, 'Bharani-Rohini': 4,
      'Bharani-Mrigashirsha': 5, 'Bharani-Ardra': 6, 'Bharani-Punarvasu': 4,
      'Bharani-Pushya': 5, 'Bharani-Ashlesha': 6, 'Bharani-Magha': 4,
      'Bharani-Purva Phalguni': 5, 'Bharani-Uttara Phalguni': 6, 'Bharani-Hasta': 4,
      'Bharani-Chitra': 5, 'Bharani-Swati': 6, 'Bharani-Vishakha': 4,
      'Bharani-Anuradha': 5, 'Bharani-Jyeshtha': 6, 'Bharani-Mula': 4,
      'Bharani-Purva Ashadha': 5, 'Bharani-Uttara Ashadha': 6, 'Bharani-Shravana': 4,
      'Bharani-Dhanishta': 5, 'Bharani-Shatabhisha': 6, 'Bharani-Purva Bhadrapada': 4,
      'Bharani-Uttara Bhadrapada': 5, 'Bharani-Revati': 6,
  
      'Krittika-Ashwini': 4, 'Krittika-Bharani': 6, 'Krittika-Krittika': 6, 'Krittika-Rohini': 6,
      'Krittika-Mrigashirsha': 4, 'Krittika-Ardra': 5, 'Krittika-Punarvasu': 6,
      'Krittika-Pushya': 4, 'Krittika-Ashlesha': 5, 'Krittika-Magha': 6,
      'Krittika-Purva Phalguni': 4, 'Krittika-Uttara Phalguni': 5, 'Krittika-Hasta': 6,
      'Krittika-Chitra': 4, 'Krittika-Swati': 5, 'Krittika-Vishakha': 6,
      'Krittika-Anuradha': 4, 'Krittika-Jyeshtha': 5, 'Krittika-Mula': 6,
      'Krittika-Purva Ashadha': 4, 'Krittika-Uttara Ashadha': 5, 'Krittika-Shravana': 6,
      'Krittika-Dhanishta': 4, 'Krittika-Shatabhisha': 5, 'Krittika-Purva Bhadrapada': 6,
      'Krittika-Uttara Bhadrapada': 4, 'Krittika-Revati': 5,
  
      'Rohini-Ashwini': 5, 'Rohini-Bharani': 4, 'Rohini-Krittika': 6, 'Rohini-Rohini': 6,
      'Rohini-Mrigashirsha': 6, 'Rohini-Ardra': 4, 'Rohini-Punarvasu': 5,
      'Rohini-Pushya': 6, 'Rohini-Ashlesha': 4, 'Rohini-Magha': 5,
      'Rohini-Purva Phalguni': 6, 'Rohini-Uttara Phalguni': 4, 'Rohini-Hasta': 5,
      'Rohini-Chitra': 6, 'Rohini-Swati': 4, 'Rohini-Vishakha': 5,
      'Rohini-Anuradha': 6, 'Rohini-Jyeshtha': 4, 'Rohini-Mula': 5,
      'Rohini-Purva Ashadha': 6, 'Rohini-Uttara Ashadha': 4, 'Rohini-Shravana': 5,
      'Rohini-Dhanishta': 6, 'Rohini-Shatabhisha': 4, 'Rohini-Purva Bhadrapada': 5,
      'Rohini-Uttara Bhadrapada': 6, 'Rohini-Revati': 4,
  
      'Mrigashirsha-Ashwini': 6, 'Mrigashirsha-Bharani': 5, 'Mrigashirsha-Krittika': 4, 'Mrigashirsha-Rohini': 6,
      'Mrigashirsha-Mrigashirsha': 6, 'Mrigashirsha-Ardra': 6, 'Mrigashirsha-Punarvasu': 4,
      'Mrigashirsha-Pushya': 5, 'Mrigashirsha-Ashlesha': 6, 'Mrigashirsha-Magha': 4,
      'Mrigashirsha-Purva Phalguni': 5, 'Mrigashirsha-Uttara Phalguni': 6, 'Mrigashirsha-Hasta': 4,
      'Mrigashirsha-Chitra': 5, 'Mrigashirsha-Swati': 6, 'Mrigashirsha-Vishakha': 4,
      'Mrigashirsha-Anuradha': 5, 'Mrigashirsha-Jyeshtha': 6, 'Mrigashirsha-Mula': 4,
      'Mrigashirsha-Purva Ashadha': 5, 'Mrigashirsha-Uttara Ashadha': 6, 'Mrigashirsha-Shravana': 4,
      'Mrigashirsha-Dhanishta': 5, 'Mrigashirsha-Shatabhisha': 6, 'Mrigashirsha-Purva Bhadrapada': 4,
      'Mrigashirsha-Uttara Bhadrapada': 5, 'Mrigashirsha-Revati': 6,
  
      'Ardra-Ashwini': 4, 'Ardra-Bharani': 6, 'Ardra-Krittika': 5, 'Ardra-Rohini': 4,
      'Ardra-Mrigashirsha': 6, 'Ardra-Ardra': 6, 'Ardra-Punarvasu': 6,
      'Ardra-Pushya': 4, 'Ardra-Ashlesha': 5, 'Ardra-Magha': 6,
      'Ardra-Purva Phalguni': 4, 'Ardra-Uttara Phalguni': 5, 'Ardra-Hasta': 6,
      'Ardra-Chitra': 4, 'Ardra-Swati': 5, 'Ardra-Vishakha': 6,
      'Ardra-Anuradha': 4, 'Ardra-Jyeshtha': 5, 'Ardra-Mula': 6,
      'Ardra-Purva Ashadha': 4, 'Ardra-Uttara Ashadha': 5, 'Ardra-Shravana': 6,
      'Ardra-Dhanishta': 4, 'Ardra-Shatabhisha': 5, 'Ardra-Purva Bhadrapada': 6,
      'Ardra-Uttara Bhadrapada': 4, 'Ardra-Revati': 5,
  
      'Punarvasu-Ashwini': 5, 'Punarvasu-Bharani': 4, 'Punarvasu-Krittika': 6, 'Punarvasu-Rohini': 5,
      'Punarvasu-Mrigashirsha': 4, 'Punarvasu-Ardra': 6, 'Punarvasu-Punarvasu': 6,
      'Punarvasu-Pushya': 5, 'Punarvasu-Ashlesha': 4, 'Punarvasu-Magha': 6,
      'Punarvasu-Purva Phalguni': 5, 'Punarvasu-Uttara Phalguni': 4, 'Punarvasu-Hasta': 6,
      'Punarvasu-Chitra': 5, 'Punarvasu-Swati': 4, 'Punarvasu-Vishakha': 6,
      'Punarvasu-Anuradha': 5, 'Punarvasu-Jyeshtha': 4, 'Punarvasu-Mula': 6,
      'Punarvasu-Purva Ashadha': 5, 'Punarvasu-Uttara Ashadha': 4, 'Punarvasu-Shravana': 6,
      'Punarvasu-Dhanishta': 5, 'Punarvasu-Shatabhisha': 4, 'Punarvasu-Purva Bhadrapada': 6,
      'Punarvasu-Uttara Bhadrapada': 5, 'Punarvasu-Revati': 4,
  
      'Pushya-Ashwini': 6, 'Pushya-Bharani': 5, 'Pushya-Krittika': 4, 'Pushya-Rohini': 6,
      'Pushya-Mrigashirsha': 5, 'Pushya-Ardra': 4, 'Pushya-Punarvasu': 5,
      'Pushya-Pushya': 6, 'Pushya-Ashlesha': 6, 'Pushya-Magha': 4,
      'Pushya-Purva Phalguni': 5, 'Pushya-Uttara Phalguni': 6, 'Pushya-Hasta': 6,
      'Pushya-Chitra': 4, 'Pushya-Swati': 5, 'Pushya-Vishakha': 6,
      'Pushya-Anuradha': 4, 'Pushya-Jyeshtha': 5, 'Pushya-Mula': 6,
      'Pushya-Purva Ashadha': 4, 'Pushya-Uttara Ashadha': 5, 'Pushya-Shravana': 6,
      'Pushya-Dhanishta': 4, 'Pushya-Shatabhisha': 5, 'Pushya-Purva Bhadrapada': 6,
      'Pushya-Uttara Bhadrapada': 4, 'Pushya-Revati': 5,
  
      'Ashlesha-Ashwini': 4, 'Ashlesha-Bharani': 6, 'Ashlesha-Krittika': 5, 'Ashlesha-Rohini': 4,
      'Ashlesha-Mrigashirsha': 6, 'Ashlesha-Ardra': 5, 'Ashlesha-Punarvasu': 4,
      'Ashlesha-Pushya': 6, 'Ashlesha-Ashlesha': 6, 'Ashlesha-Magha': 5,
      'Ashlesha-Purva Phalguni': 4, 'Ashlesha-Uttara Phalguni': 6, 'Ashlesha-Hasta': 5,
      'Ashlesha-Chitra': 4, 'Ashlesha-Swati': 6, 'Ashlesha-Vishakha': 5,
      'Ashlesha-Anuradha': 4, 'Ashlesha-Jyeshtha': 6, 'Ashlesha-Mula': 5,
      'Ashlesha-Purva Ashadha': 4, 'Ashlesha-Uttara Ashadha': 6, 'Ashlesha-Shravana': 5,
      'Ashlesha-Dhanishta': 4, 'Ashlesha-Shatabhisha': 6, 'Ashlesha-Purva Bhadrapada': 5,
      'Ashlesha-Uttara Bhadrapada': 4, 'Ashlesha-Revati': 6,
  
      'Magha-Ashwini': 5, 'Magha-Bharani': 4, 'Magha-Krittika': 6, 'Magha-Rohini': 5,
      'Magha-Mrigashirsha': 4, 'Magha-Ardra': 6, 'Magha-Punarvasu': 5,
      'Magha-Pushya': 4, 'Magha-Ashlesha': 5, 'Magha-Magha': 6,
      'Magha-Purva Phalguni': 4, 'Magha-Uttara Phalguni': 5, 'Magha-Hasta': 6,
      'Magha-Chitra': 4, 'Magha-Swati': 5, 'Magha-Vishakha': 6,
      'Magha-Anuradha': 4, 'Magha-Jyeshtha': 5, 'Magha-Mula': 6,
      'Magha-Purva Ashadha': 4, 'Magha-Uttara Ashadha': 5, 'Magha-Shravana': 6,
      'Magha-Dhanishta': 4, 'Magha-Shatabhisha': 5, 'Magha-Purva Bhadrapada': 6,
      'Magha-Uttara Bhadrapada': 4, 'Magha-Revati': 5,
  
      'Purva Phalguni-Ashwini': 6, 'Purva Phalguni-Bharani': 5, 'Purva Phalguni-Krittika': 4, 'Purva Phalguni-Rohini': 6,
      'Purva Phalguni-Mrigashirsha': 5, 'Purva Phalguni-Ardra': 4, 'Purva Phalguni-Punarvasu': 5,
      'Purva Phalguni-Pushya': 6, 'Purva Phalguni-Ashlesha': 4, 'Purva Phalguni-Magha': 5,
      'Purva Phalguni-Purva Phalguni': 6, 'Purva Phalguni-Uttara Phalguni': 4, 'Purva Phalguni-Hasta': 5,
      'Purva Phalguni-Chitra': 6, 'Purva Phalguni-Swati': 4, 'Purva Phalguni-Vishakha': 5,
      'Purva Phalguni-Anuradha': 6, 'Purva Phalguni-Jyeshtha': 4, 'Purva Phalguni-Mula': 5,
      'Purva Phalguni-Purva Ashadha': 6, 'Purva Phalguni-Uttara Ashadha': 4, 'Purva Phalguni-Shravana': 5,
      'Purva Phalguni-Dhanishta': 6, 'Purva Phalguni-Shatabhisha': 4, 'Purva Phalguni-Purva Bhadrapada': 5,
      'Purva Phalguni-Uttara Bhadrapada': 6, 'Purva Phalguni-Revati': 4,
  
      'Uttara Phalguni-Ashwini': 4, 'Uttara Phalguni-Bharani': 6, 'Uttara Phalguni-Krittika': 5, 'Uttara Phalguni-Rohini': 4,
      'Uttara Phalguni-Mrigashirsha': 6, 'Uttara Phalguni-Ardra': 5, 'Uttara Phalguni-Punarvasu': 4,
      'Uttara Phalguni-Pushya': 6, 'Uttara Phalguni-Ashlesha': 5, 'Uttara Phalguni-Magha': 6,
      'Uttara Phalguni-Purva Phalguni': 4, 'Uttara Phalguni-Uttara Phalguni': 6, 'Uttara Phalguni-Hasta': 5,
      'Uttara Phalguni-Chitra': 4, 'Uttara Phalguni-Swati': 6, 'Uttara Phalguni-Vishakha': 5,
      'Uttara Phalguni-Anuradha': 4, 'Uttara Phalguni-Jyeshtha': 6, 'Uttara Phalguni-Mula': 5,
      'Uttara Phalguni-Purva Ashadha': 4, 'Uttara Phalguni-Uttara Ashadha': 6, 'Uttara Phalguni-Shravana': 5,
      'Uttara Phalguni-Dhanishta': 4, 'Uttara Phalguni-Shatabhisha': 6, 'Uttara Phalguni-Purva Bhadrapada': 5,
      'Uttara Phalguni-Uttara Bhadrapada': 4, 'Uttara Phalguni-Revati': 6
    };
  
      function determineRashi(birthDate) {
          const date = new Date(birthDate);
          const month = date.getUTCMonth() + 1;
          const day = date.getUTCDate();
  
          if ((month === 4 && day >= 13) || (month === 5 && day <= 14)) return 'Aries';
          if ((month === 5 && day >= 15) || (month === 6 && day <= 14)) return 'Taurus';
          if ((month === 6 && day >= 15) || (month === 7 && day <= 14)) return 'Gemini';
          if ((month === 7 && day >= 15) || (month === 8 && day <= 14)) return 'Cancer';
          if ((month === 8 && day >= 15) || (month === 9 && day <= 15)) return 'Leo';
          if ((month === 9 && day >= 16) || (month === 10 && day <= 15)) return 'Virgo';
          if ((month === 10 && day >= 16) || (month === 11 && day <= 14)) return 'Libra';
          if ((month === 11 && day >= 15) || (month === 12 && day <= 14)) return 'Scorpio';
          if ((month === 12 && day >= 15) || (month === 1 && day <= 13)) return 'Sagittarius';
          if ((month === 1 && day >= 14) || (month === 2 && day <= 12)) return 'Capricorn';
          if ((month === 2 && day >= 13) || (month === 3 && day <= 12)) return 'Aquarius';
          if ((month === 3 && day >= 13) || (month === 4 && day <= 12)) return 'Pisces';
  
          return null;
      }
  
      function updateNakshatraData(name, birthDate) {
        const rashi = determineRashi(birthDate);
        nakshatraData[name] = rashi; // Assuming nakshatraData is accessible globally or within the scope where this function is called
        //console.log(`Nakshatra data updated successfully for ${name, rashi}`);
    }

// Endpoint to calculate Guna Milan score
app.post('/calculate-guna-milan-score', (req, res) => {
    const { boy, girl } = req.body; // Destructure boy and girl objects from req.body

    // Extract details from boy and girl objects
    const { name: boyName, birthDate: boyBirthDate, varna: boyVarna } = boy;
    const { name: girlName, birthDate: girlBirthDate, varna: girlVarna } = girl;

    // Log received data for debugging
    //console.log('Received data for Guna Milan calculation:');
    //console.log('Boy:', { boyName, boyBirthDate, boyVarna });
    //console.log('Girl:', { girlName, girlBirthDate, girlVarna });
    updateNakshatraData(boyName, boyBirthDate);
    updateNakshatraData(girlName, girlBirthDate);
    const score = calculateGunaMilanScore(boyName, girlName, boyVarna, girlVarna);
    res.json({ score });
});

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

      function getVashyaCompatibility(rashi1, rashi2) {
          const vashya1 = VASHYA[rashi1];
          const vashya2 = VASHYA[rashi2];
          return vashyaCompatibility[vashya1 + vashya2] || 0;
      }
        
      function getVarnaCompatibility(varna1, varna2) {
          return varnaCompatibility[varna1 + varna2] || 0;
      }
  
      function getTara(rashi1, rashi2) {
          const nakshatra1 = nakshatraData[rashi1];
          const nakshatra2 = nakshatraData[rashi2];
          return taraCompatibility[nakshatra1 + nakshatra2] || 0;
      }
  
      function getYoni(rashi1, rashi2) {
          const nakshatra1 = nakshatraData[rashi1];
          const nakshatra2 = nakshatraData[rashi2];
          return yoniCompatibility[nakshatra1 + ':' + nakshatra2] || 0;
      }
      
      function getGana(rashi1, rashi2) {
          const rashiNakshatra1 = nakshatraData[rashi1];
          const rashiNakshatra2 = nakshatraData[rashi2];
          return ganaCompatibility[[rashiNakshatra1 + '-' + rashiNakshatra2]] || 0;
      }

  
      function calculateGunaMilanScore(boyName, girlName, boyVarna, girlVarna) {
          const boyRashi = nakshatraData[boyName];
          const girlRashi = nakshatraData[girlName];
        
          const varnaScore = getVarnaCompatibility(boyVarna, girlVarna);
          //console.log(`Varna Score: ${varnaScore}`);
        
          const vashyaScore = getVashyaCompatibility(boyRashi, girlRashi);
          //console.log(`Vashya Score: ${vashyaScore}`);
        
          const taraScore = getTara(boyRashi, girlRashi);
          //console.log(`Tara Score: ${taraScore}`);
        
          const yoniScore = getYoni(boyRashi, girlRashi);
          //console.log(`Yoni Score: ${yoniScore}`);
        
          const grahaMaitriScore = getGrahaMaitri(boyRashi, girlRashi);
          //console.log(`Graha Maitri Score: ${grahaMaitriScore}`);
        
          const ganaScore = getGana(boyRashi, girlRashi);
          //console.log(`Gana Score: ${ganaScore}`);
        
          const bhakootScore = getBhakoot(boyRashi, girlRashi);
          //console.log(`Bhakoot Score: ${bhakootScore}`);
        
          const nadiScore = getNadi(boyRashi, girlRashi);
          //console.log(`Nadi Score: ${nadiScore}`);
        
          const totalScore = varnaScore + vashyaScore + taraScore + yoniScore +
                             grahaMaitriScore + ganaScore + bhakootScore + nadiScore;
        
          return totalScore;
        }
    
    
  
  
    function getGrahaMaitri(rashi1, rashi2) {
      const grahaMaitriCompatibility = {
        'Aries:Aries': 5, 'Aries:Taurus': 5, 'Taurus:Aries': 5,
        'Aries:Gemini': 3, 'Gemini:Aries': 3,
        'Aries:Leo': 5, 'Leo:Aries': 5,
        'Aries:Virgo': 1, 'Virgo:Aries': 1,
        'Aries:Libra': 5, 'Libra:Aries': 5,
        'Aries:Scorpio': 1, 'Scorpio:Aries': 1,
        'Aries:Sagittarius': 5, 'Sagittarius:Aries': 5,
        'Aries:Capricorn': 5, 'Capricorn:Aries': 5,
        'Aries:Aquarius': 5, 'Aquarius:Aries': 5,
        'Aries:Pisces': 3, 'Pisces:Aries': 3,
    
        'Taurus:Taurus': 5, 'Taurus:Gemini': 3, 'Gemini:Taurus': 3,
        'Taurus:Leo': 3, 'Leo:Taurus': 3,
        'Taurus:Virgo': 5, 'Virgo:Taurus': 5,
        'Taurus:Libra': 1, 'Libra:Taurus': 1,
        'Taurus:Scorpio': 3, 'Scorpio:Taurus': 3,
        'Taurus:Sagittarius': 1, 'Sagittarius:Taurus': 1,
        'Taurus:Capricorn': 3, 'Capricorn:Taurus': 3,
        'Taurus:Aquarius': 3, 'Aquarius:Taurus': 3,
        'Taurus:Pisces': 5, 'Pisces:Taurus': 5,
    
        'Gemini:Gemini': 5, 'Gemini:Leo': 3, 'Leo:Gemini': 3,
        'Gemini:Virgo': 3, 'Virgo:Gemini': 3,
        'Gemini:Libra': 5, 'Libra:Gemini': 5,
        'Gemini:Scorpio': 1, 'Scorpio:Gemini': 1,
        'Gemini:Sagittarius': 3, 'Sagittarius:Gemini': 3,
        'Gemini:Capricorn': 1, 'Capricorn:Gemini': 1,
        'Gemini:Aquarius': 3, 'Aquarius:Gemini': 3,
        'Gemini:Pisces': 3, 'Pisces:Gemini': 3,
    
        'Leo:Leo': 5, 'Leo:Virgo': 5, 'Virgo:Leo': 5,
        'Leo:Libra': 5, 'Libra:Leo': 5,
        'Leo:Scorpio': 3, 'Scorpio:Leo': 3,
        'Leo:Sagittarius': 5, 'Sagittarius:Leo': 5,
        'Leo:Capricorn': 5, 'Capricorn:Leo': 5,
        'Leo:Aquarius': 5, 'Aquarius:Leo': 5,
        'Leo:Pisces': 3, 'Pisces:Leo': 3,
    
        'Virgo:Virgo': 5, 'Virgo:Libra': 1, 'Libra:Virgo': 1,
        'Virgo:Scorpio': 3, 'Scorpio:Virgo': 3,
        'Virgo:Sagittarius': 1, 'Sagittarius:Virgo': 1,
        'Virgo:Capricorn': 3, 'Capricorn:Virgo': 3,
        'Virgo:Aquarius': 3, 'Aquarius:Virgo': 3,
        'Virgo:Pisces': 5, 'Pisces:Virgo': 5,
    
        'Libra:Libra': 5, 'Libra:Scorpio': 3, 'Scorpio:Libra': 3,
        'Libra:Sagittarius': 3, 'Sagittarius:Libra': 3,
        'Libra:Capricorn': 5, 'Capricorn:Libra': 5,
        'Libra:Aquarius': 1, 'Aquarius:Libra': 1,
        'Libra:Pisces': 3, 'Pisces:Libra': 3,
    
        'Scorpio:Scorpio': 5, 'Scorpio:Sagittarius': 1, 'Sagittarius:Scorpio': 1,
        'Scorpio:Capricorn': 3, 'Capricorn:Scorpio': 3,
        'Scorpio:Aquarius': 3, 'Aquarius:Scorpio': 3,
        'Scorpio:Pisces': 5, 'Pisces:Scorpio': 5,
    
        'Sagittarius:Sagittarius': 5, 'Sagittarius:Capricorn': 5, 'Capricorn:Sagittarius': 5,
        'Sagittarius:Aquarius': 5, 'Aquarius:Sagittarius': 5,
        'Sagittarius:Pisces': 3, 'Pisces:Sagittarius': 3,
    
        'Capricorn:Capricorn': 5, 'Capricorn:Aquarius': 3, 'Aquarius:Capricorn': 3,
        'Capricorn:Pisces': 5, 'Pisces:Capricorn': 5,
    
        'Aquarius:Aquarius': 5, 'Aquarius:Pisces': 3, 'Pisces:Aquarius': 3,
    
        'Pisces:Pisces': 5
      };
      
        if (rashi1 === rashi2) {
            return grahaMaitriCompatibility[`${rashi1}:${rashi2}`] || 0;
        } else {
            return grahaMaitriCompatibility[`${rashi1}:${rashi2}`] || grahaMaitriCompatibility[`${rashi2}:${rashi1}`] || 0;
        }
    }
      
  
      function getBhakoot(rashi1, rashi2) {
        const bhakootCompatibility = {
          'Aries,Aries': 7, 'Aries,Taurus': 0, 'Aries,Gemini': 7, 'Aries,Cancer': 7,
          'Aries,Leo': 0, 'Aries,Virgo': 0, 'Aries,Libra': 7, 'Aries,Scorpio': 0,
          'Aries,Sagittarius': 0, 'Aries,Capricorn': 7, 'Aries,Aquarius': 7, 'Aries,Pisces': 0,
      
          'Taurus,Aries': 0, 'Taurus,Taurus': 7, 'Taurus,Gemini': 0, 'Taurus,Cancer': 7,
          'Taurus,Leo': 7, 'Taurus,Virgo': 0, 'Taurus,Libra': 0, 'Taurus,Scorpio': 7,
          'Taurus,Sagittarius': 0, 'Taurus,Capricorn': 0, 'Taurus,Aquarius': 7, 'Taurus,Pisces': 7,
      
          'Gemini,Aries': 7, 'Gemini,Taurus': 0, 'Gemini,Gemini': 7, 'Gemini,Cancer': 0,
          'Gemini,Leo': 7, 'Gemini,Virgo': 7, 'Gemini,Libra': 0, 'Gemini,Scorpio': 0,
          'Gemini,Sagittarius': 7, 'Gemini,Capricorn': 0, 'Gemini,Aquarius': 0, 'Gemini,Pisces': 7,
      
          'Cancer,Aries': 7, 'Cancer,Taurus': 7, 'Cancer,Gemini': 0, 'Cancer,Cancer': 7,
          'Cancer,Leo': 0, 'Cancer,Virgo': 7, 'Cancer,Libra': 7, 'Cancer,Scorpio': 0,
          'Cancer,Sagittarius': 0, 'Cancer,Capricorn': 7, 'Cancer,Aquarius': 0, 'Cancer,Pisces': 0,
      
          'Leo,Aries': 0, 'Leo,Taurus': 7, 'Leo,Gemini': 7, 'Leo,Cancer': 0,
          'Leo,Leo': 7, 'Leo,Virgo': 0, 'Leo,Libra': 7, 'Leo,Scorpio': 7,
          'Leo,Sagittarius': 0, 'Leo,Capricorn': 0, 'Leo,Aquarius': 7, 'Leo,Pisces': 0,
      
          'Virgo,Aries': 0, 'Virgo,Taurus': 0, 'Virgo,Gemini': 7, 'Virgo,Cancer': 7,
          'Virgo,Leo': 0, 'Virgo,Virgo': 7, 'Virgo,Libra': 0, 'Virgo,Scorpio': 7,
          'Virgo,Sagittarius': 7, 'Virgo,Capricorn': 0, 'Virgo,Aquarius': 0, 'Virgo,Pisces': 7,
      
          'Libra,Aries': 7, 'Libra,Taurus': 0, 'Libra,Gemini': 0, 'Libra,Cancer': 7,
          'Libra,Leo': 7, 'Libra,Virgo': 0, 'Libra,Libra': 7, 'Libra,Scorpio': 0,
          'Libra,Sagittarius': 7, 'Libra,Capricorn': 7, 'Libra,Aquarius': 0, 'Libra,Pisces': 0,
      
          'Scorpio,Aries': 0, 'Scorpio,Taurus': 7, 'Scorpio,Gemini': 0, 'Scorpio,Cancer': 0,
          'Scorpio,Leo': 7, 'Scorpio,Virgo': 7, 'Scorpio,Libra': 0, 'Scorpio,Scorpio': 7,
          'Scorpio,Sagittarius': 0, 'Scorpio,Capricorn': 7, 'Scorpio,Aquarius': 7, 'Scorpio,Pisces': 0,
      
          'Sagittarius,Aries': 0, 'Sagittarius,Taurus': 0, 'Sagittarius,Gemini': 7, 'Sagittarius,Cancer': 0,
          'Sagittarius,Leo': 0, 'Sagittarius,Virgo': 7, 'Sagittarius,Libra': 7, 'Sagittarius,Scorpio': 0,
          'Sagittarius,Sagittarius': 7, 'Sagittarius,Capricorn': 0, 'Sagittarius,Aquarius': 7, 'Sagittarius,Pisces': 7,
      
          'Capricorn,Aries': 7, 'Capricorn,Taurus': 0, 'Capricorn,Gemini': 0, 'Capricorn,Cancer': 7,
          'Capricorn,Leo': 0, 'Capricorn,Virgo': 0, 'Capricorn,Libra': 7, 'Capricorn,Scorpio': 7,
          'Capricorn,Sagittarius': 0, 'Capricorn,Capricorn': 7, 'Capricorn,Aquarius': 0, 'Capricorn,Pisces': 7,
      
          'Aquarius,Aries': 7, 'Aquarius,Taurus': 7, 'Aquarius,Gemini': 0, 'Aquarius,Cancer': 0,
          'Aquarius,Leo': 7, 'Aquarius,Virgo': 0, 'Aquarius,Libra': 0, 'Aquarius,Scorpio': 7,
          'Aquarius,Sagittarius': 7, 'Aquarius,Capricorn': 0, 'Aquarius,Aquarius': 7, 'Aquarius,Pisces': 0,
      
          'Pisces,Aries': 0, 'Pisces,Taurus': 7, 'Pisces,Gemini': 7, 'Pisces,Cancer': 0,
          'Pisces,Leo': 0, 'Pisces,Virgo': 7, 'Pisces,Libra': 0, 'Pisces,Scorpio': 0,
          'Pisces,Sagittarius': 7, 'Pisces,Capricorn': 7, 'Pisces,Aquarius': 0, 'Pisces,Pisces': 7,
        };      
        const key = [rashi1, rashi2].join(',');
        return bhakootCompatibility[key] || 0;
      }
        
  
    function getNadi(boyRashi, girlRashi) {
        // Get the nakshatras for the given rashis
        const boyNakshatra = nakshatraData[boyRashi];
        const girlNakshatra = nakshatraData[girlRashi];
  
        // Get the nadi types for the nakshatras
        const boyNadi = nakshatraToNadi[boyNakshatra];
        const girlNadi = nakshatraToNadi[girlNakshatra];
  
        // Check compatibility
        if (boyNadi && girlNadi) {
            return nadiCompatibility[`${boyNadi}${girlNadi}`] || nadiCompatibility[`${girlNadi}${boyNadi}`] || 0;
        } else {
            return 0;
        }
    }
  
/*    const boyName = 'John Doe';
    const girlName = 'Jane Smith';
    const boyDate = '1990-04-15';
    const girlDate = '1992-05-20';
    const boyVarna = 'Kshatriya';
    const girlVarna = 'Vaishya';
  
    updateNakshatraData(boyName, boyDate);
    updateNakshatraData(girlName, girlDate);
  
    const Score = calculateGunaMilanScore(boyName, girlName, boyDate, girlDate);
    console.log(`Score: ${Score}`);
    
  /*# Example usage
  boy_name = 'John Doe'
  girl_name = 'Jane Smith'
  boy_birth_date = '1990-04-15'
  girl_birth_date = '1992-05-20'
  boy_varna = 'Kshatriya'
  girl_varna = 'Vaishya'
  
  # Update nakshatra_data with birth dates
  update_nakshatra_data(boy_name, boy_birth_date)
  update_nakshatra_data(girl_name, girl_birth_date)
  
  # Calculate Guna Milan score
  total_score = calculate_guna_milan_score(boy_name, girl_name, boy_varna, girl_varna)
  
  #print(f"Total Guna Milan score for {boy_name} and {girl_name}: {total_score}")
  print(total_score)
  */