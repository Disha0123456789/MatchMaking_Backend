from datetime import datetime

# Vashya categories
VASHYA = {
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
}

# Points for Vashya compatibility
vashya_compatibility = {
    ('Chatushpad', 'Chatushpad'): 2,
    ('Chatushpad', 'Dwipad'): 1,
    ('Chatushpad', 'Jalachar'): 0,
    ('Chatushpad', 'Vanachar'): 1,
    ('Chatushpad', 'Keet'): 0,
    ('Dwipad', 'Chatushpad'): 1,
    ('Dwipad', 'Dwipad'): 2,
    ('Dwipad', 'Jalachar'): 0,
    ('Dwipad', 'Vanachar'): 0,
    ('Dwipad', 'Keet'): 0,
    ('Jalachar', 'Chatushpad'): 0,
    ('Jalachar', 'Dwipad'): 0,
    ('Jalachar', 'Jalachar'): 2,
    ('Jalachar', 'Vanachar'): 0,
    ('Jalachar', 'Keet'): 0,
    ('Vanachar', 'Chatushpad'): 1,
    ('Vanachar', 'Dwipad'): 0,
    ('Vanachar', 'Jalachar'): 0,
    ('Vanachar', 'Vanachar'): 2,
    ('Vanachar', 'Keet'): 0,
    ('Keet', 'Chatushpad'): 0,
    ('Keet', 'Dwipad'): 0,
    ('Keet', 'Jalachar'): 0,
    ('Keet', 'Vanachar'): 0,
    ('Keet', 'Keet'): 2
}

# Varna categories and compatibility points
VARNA = {
    'Brahmin': 1,
    'Kshatriya': 2,
    'Vaishya': 3,
    'Shudra': 4
}

varna_compatibility = {
    ('Brahmin', 'Brahmin'): 1,
    ('Brahmin', 'Kshatriya'): 0,
    ('Brahmin', 'Vaishya'): 0,
    ('Brahmin', 'Shudra'): 0,
    ('Kshatriya', 'Brahmin'): 1,
    ('Kshatriya', 'Kshatriya'): 1,
    ('Kshatriya', 'Vaishya'): 0,
    ('Kshatriya', 'Shudra'): 0,
    ('Vaishya', 'Brahmin'): 1,
    ('Vaishya', 'Kshatriya'): 1,
    ('Vaishya', 'Vaishya'): 1,
    ('Vaishya', 'Shudra'): 0,
    ('Shudra', 'Brahmin'): 1,
    ('Shudra', 'Kshatriya'): 1,
    ('Shudra', 'Vaishya'): 1,
    ('Shudra', 'Shudra'): 1,
}

nakshatra_data = {
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
}

# Mapping of Nakshatras to Nadi types
nakshatra_to_nadi = {
    'Ashwini': 'Aadi', 'Bharani': 'Madhya', 'Krittika': 'Antya',
    'Rohini': 'Antya', 'Mrigashirsha': 'Madhya', 'Ardra': 'Aadi',
    'Punarvasu': 'Aadi', 'Pushya': 'Madhya', 'Ashlesha': 'Antya',
    'Magha': 'Antya', 'Purva Phalguni': 'Madhya', 'Uttara Phalguni': 'Aadi',
    'Hasta': 'Aadi', 'Chitra': 'Madhya', 'Swati': 'Antya', 'Vishakha': 'Antya',
    'Anuradha': 'Madhya', 'Jyeshtha': 'Aadi', 'Mula': 'Aadi',
    'Purva Ashadha': 'Madhya', 'Uttara Ashadha': 'Antya', 'Shravana': 'Antya',
    'Dhanishta': 'Madhya', 'Shatabhisha': 'Aadi', 'Purva Bhadrapada': 'Aadi',
    'Uttara Bhadrapada': 'Antya', 'Revati': 'Antya'
}

# Function to determine Rashi based on birth date
def determine_rashi(birth_date):
    date_format = "%m-%d"
    date = datetime.strptime(birth_date, "%Y-%m-%d").strftime(date_format)
    
    if "04-13" <= date <= "05-14":
        return "Aries"
    elif "05-15" <= date <= "06-14":
        return "Taurus"
    elif "06-15" <= date <= "07-14":
        return "Gemini"
    elif "07-15" <= date <= "08-14":
        return "Cancer"
    elif "08-15" <= date <= "09-15":
        return "Leo"
    elif "09-16" <= date <= "10-15":
        return "Virgo"
    elif "10-16" <= date <= "11-14":
        return "Libra"
    elif "11-15" <= date <= "12-14":
        return "Scorpio"
    elif "12-15" <= date <= "01-13":
        return "Sagittarius"
    elif "01-14" <= date <= "02-12":
        return "Capricorn"
    elif "02-13" <= date <= "03-12":
        return "Aquarius"
    elif "03-13" <= date <= "04-12":
        return "Pisces"
    return None

# Update nakshatra_data with birth dates
def update_nakshatra_data(name, birth_date):
    rashi = determine_rashi(birth_date)
    nakshatra_data[name] = rashi

def get_vashya(rashi):
    return VASHYA.get(rashi)

def get_vashya_compatibility(rashi1, rashi2):
    vashya1 = VASHYA.get(rashi1)
    vashya2 = VASHYA.get(rashi2)
    return vashya_compatibility.get((vashya1, vashya2), 0)

def get_varna_compatibility(varna1, varna2):
    return varna_compatibility.get((varna1, varna2), 0)

def calculate_guna_milan_score(boy_name, girl_name, boy_varna, girl_varna):
    boy_rashi = nakshatra_data[boy_name]
    girl_rashi = nakshatra_data[girl_name]

    varna_score = get_varna_compatibility(boy_varna, girl_varna)
    print(f"Varna Score: {varna_score}")
    
    vashya_score = get_vashya_compatibility(boy_rashi, girl_rashi)
    print(f"Vashya Score: {vashya_score}")
     
    tara_score = get_tara(boy_rashi, girl_rashi)
    print(f"Tara Score: {tara_score}")
    
    yoni_score = get_yoni(boy_rashi, girl_rashi)
    print(f"Yoni Score: {yoni_score}")
    
    graha_maitri_score = get_graha_maitri(boy_rashi, girl_rashi)
    print(f"Graha Maitri Score: {graha_maitri_score}")
    
    gana_score = get_gana(boy_rashi, girl_rashi)
    print(f"Gana Score: {gana_score}")
    
    bhakoot_score = get_bhakoot(boy_rashi, girl_rashi)
    print(f"Bhakoot Score: {bhakoot_score}")
    
    nadi_score = get_nadi(boy_rashi, girl_rashi)
    print(f"Nadi Score: {nadi_score}")

    total_score = (varna_score + vashya_score + tara_score + yoni_score + 
                   graha_maitri_score + gana_score + bhakoot_score + nadi_score)
    
    return total_score

def get_tara(rashi1, rashi2):
    # Example logic for Tara (based on Nakshatra)
    tara_compatibility = {
        ('Ashwini', 'Bharani'): 3, ('Ashwini', 'Krittika'): 2, ('Ashwini', 'Rohini'): 3, ('Ashwini', 'Mrigashirsha'): 2,
        ('Ashwini', 'Ardra'): 3, ('Ashwini', 'Punarvasu'): 2, ('Ashwini', 'Pushya'): 3, ('Ashwini', 'Ashlesha'): 2,
        ('Ashwini', 'Magha'): 3, ('Ashwini', 'Purva Phalguni'): 2, ('Ashwini', 'Uttara Phalguni'): 3,

        ('Bharani', 'Ashwini'): 3, ('Bharani', 'Krittika'): 1, ('Bharani', 'Rohini'): 2, ('Bharani', 'Mrigashirsha'): 1,
        ('Bharani', 'Ardra'): 2, ('Bharani', 'Punarvasu'): 1, ('Bharani', 'Pushya'): 2, ('Bharani', 'Ashlesha'): 1,
        ('Bharani', 'Magha'): 2, ('Bharani', 'Purva Phalguni'): 1, ('Bharani', 'Uttara Phalguni'): 2,

        ('Krittika', 'Ashwini'): 2, ('Krittika', 'Bharani'): 1, ('Krittika', 'Rohini'): 1, ('Krittika', 'Mrigashirsha'): 2,
        ('Krittika', 'Ardra'): 1, ('Krittika', 'Punarvasu'): 2, ('Krittika', 'Pushya'): 1, ('Krittika', 'Ashlesha'): 2,
        ('Krittika', 'Magha'): 1, ('Krittika', 'Purva Phalguni'): 2, ('Krittika', 'Uttara Phalguni'): 1,

        ('Rohini', 'Ashwini'): 3, ('Rohini', 'Bharani'): 2, ('Rohini', 'Krittika'): 1, ('Rohini', 'Mrigashirsha'): 2,
        ('Rohini', 'Ardra'): 3, ('Rohini', 'Punarvasu'): 2, ('Rohini', 'Pushya'): 3, ('Rohini', 'Ashlesha'): 2,
        ('Rohini', 'Magha'): 3, ('Rohini', 'Purva Phalguni'): 2, ('Rohini', 'Uttara Phalguni'): 3,

        ('Mrigashirsha', 'Ashwini'): 2, ('Mrigashirsha', 'Bharani'): 1, ('Mrigashirsha', 'Krittika'): 2, ('Mrigashirsha', 'Rohini'): 2,
        ('Mrigashirsha', 'Ardra'): 1, ('Mrigashirsha', 'Punarvasu'): 2, ('Mrigashirsha', 'Pushya'): 1, ('Mrigashirsha', 'Ashlesha'): 2,
        ('Mrigashirsha', 'Magha'): 1, ('Mrigashirsha', 'Purva Phalguni'): 2, ('Mrigashirsha', 'Uttara Phalguni'): 1,

        ('Ardra', 'Ashwini'): 3, ('Ardra', 'Bharani'): 2, ('Ardra', 'Krittika'): 1, ('Ardra', 'Rohini'): 3,
        ('Ardra', 'Mrigashirsha'): 1, ('Ardra', 'Punarvasu'): 2, ('Ardra', 'Pushya'): 1, ('Ardra', 'Ashlesha'): 2,
        ('Ardra', 'Magha'): 3, ('Ardra', 'Purva Phalguni'): 2, ('Ardra', 'Uttara Phalguni'): 3,

        ('Punarvasu', 'Ashwini'): 2, ('Punarvasu', 'Bharani'): 1, ('Punarvasu', 'Krittika'): 2, ('Punarvasu', 'Rohini'): 2,
        ('Punarvasu', 'Mrigashirsha'): 2, ('Punarvasu', 'Ardra'): 2, ('Punarvasu', 'Pushya'): 2, ('Punarvasu', 'Ashlesha'): 1,
        ('Punarvasu', 'Magha'): 2, ('Punarvasu', 'Purva Phalguni'): 2, ('Punarvasu', 'Uttara Phalguni'): 2,

        ('Pushya', 'Ashwini'): 3, ('Pushya', 'Bharani'): 2, ('Pushya', 'Krittika'): 1, ('Pushya', 'Rohini'): 3,
        ('Pushya', 'Mrigashirsha'): 1, ('Pushya', 'Ardra'): 1, ('Pushya', 'Punarvasu'): 2, ('Pushya', 'Ashlesha'): 2,
        ('Pushya', 'Magha'): 1, ('Pushya', 'Purva Phalguni'): 2, ('Pushya', 'Uttara Phalguni'): 1,

        ('Ashlesha', 'Ashwini'): 2, ('Ashlesha', 'Bharani'): 1, ('Ashlesha', 'Krittika'): 2, ('Ashlesha', 'Rohini'): 2,
        ('Ashlesha', 'Mrigashirsha'): 2, ('Ashlesha', 'Ardra'): 2, ('Ashlesha', 'Punarvasu'): 1, ('Ashlesha', 'Pushya'): 2,
        ('Ashlesha', 'Magha'): 2, ('Ashlesha', 'Purva Phalguni'): 2, ('Ashlesha', 'Uttara Phalguni'): 2,

        ('Magha', 'Ashwini'): 3, ('Magha', 'Bharani'): 2, ('Magha', 'Krittika'): 1, ('Magha', 'Rohini'): 3,
        ('Magha', 'Mrigashirsha'): 1, ('Magha', 'Ardra'): 3, ('Magha', 'Punarvasu'): 2, ('Magha', 'Pushya'): 1,
        ('Magha', 'Ashlesha'): 2, ('Magha', 'Purva Phalguni'): 2, ('Magha', 'Uttara Phalguni'): 3,

        ('Purva Phalguni', 'Ashwini'): 2, ('Purva Phalguni', 'Bharani'): 1, ('Purva Phalguni', 'Krittika'): 2, ('Purva Phalguni', 'Rohini'): 2,
        ('Purva Phalguni', 'Mrigashirsha'): 2, ('Purva Phalguni', 'Ardra'): 2, ('Purva Phalguni', 'Punarvasu'): 2, ('Purva Phalguni', 'Pushya'): 2,
        ('Purva Phalguni', 'Ashlesha'): 2, ('Purva Phalguni', 'Magha'): 2, ('Purva Phalguni', 'Uttara Phalguni'): 2,

        ('Uttara Phalguni', 'Ashwini'): 3, ('Uttara Phalguni', 'Bharani'): 2, ('Uttara Phalguni', 'Krittika'): 1, ('Uttara Phalguni', 'Rohini'): 3,
        ('Uttara Phalguni', 'Mrigashirsha'): 1, ('Uttara Phalguni', 'Ardra'): 3, ('Uttara Phalguni', 'Punarvasu'): 2, ('Uttara Phalguni', 'Pushya'): 1,
        ('Uttara Phalguni', 'Ashlesha'): 2, ('Uttara Phalguni', 'Magha'): 3, ('Uttara Phalguni', 'Purva Phalguni'): 2,
    }

    return tara_compatibility.get((nakshatra_data[rashi1], nakshatra_data[rashi2]), 0)

def get_yoni(rashi1, rashi2):
    # Example logic for Yoni (based on Nakshatra)
    yoni_compatibility = {
        ('Ashwini', 'Bharani'): 4, ('Ashwini', 'Krittika'): 3, ('Ashwini', 'Rohini'): 2, ('Ashwini', 'Mrigashirsha'): 3,
        ('Ashwini', 'Ardra'): 1, ('Ashwini', 'Punarvasu'): 4, ('Ashwini', 'Pushya'): 1, ('Ashwini', 'Ashlesha'): 2,
        ('Ashwini', 'Magha'): 3, ('Ashwini', 'Purva Phalguni'): 4, ('Ashwini', 'Uttara Phalguni'): 1, ('Ashwini', 'Hasta'): 2,
        ('Ashwini', 'Chitra'): 3, ('Ashwini', 'Swati'): 4, ('Ashwini', 'Vishakha'): 2, ('Ashwini', 'Anuradha'): 3,
        ('Ashwini', 'Jyeshtha'): 2, ('Ashwini', 'Mula'): 1, ('Ashwini', 'Purva Ashadha'): 3, ('Ashwini', 'Uttara Ashadha'): 2,
        ('Ashwini', 'Shravana'): 2, ('Ashwini', 'Dhanishta'): 3, ('Ashwini', 'Shatabhisha'): 4, ('Ashwini', 'Purva Bhadrapada'): 2,
        ('Ashwini', 'Uttara Bhadrapada'): 3, ('Ashwini', 'Revati'): 4,

        ('Bharani', 'Ashwini'): 4, ('Bharani', 'Krittika'): 2, ('Bharani', 'Rohini'): 3, ('Bharani', 'Mrigashirsha'): 2,
        ('Bharani', 'Ardra'): 3, ('Bharani', 'Punarvasu'): 1, ('Bharani', 'Pushya'): 2, ('Bharani', 'Ashlesha'): 3,
        ('Bharani', 'Magha'): 2, ('Bharani', 'Purva Phalguni'): 3, ('Bharani', 'Uttara Phalguni'): 2, ('Bharani', 'Hasta'): 3,
        ('Bharani', 'Chitra'): 1, ('Bharani', 'Swati'): 2, ('Bharani', 'Vishakha'): 3, ('Bharani', 'Anuradha'): 2,
        ('Bharani', 'Jyeshtha'): 3, ('Bharani', 'Mula'): 2, ('Bharani', 'Purva Ashadha'): 1, ('Bharani', 'Uttara Ashadha'): 2,
        ('Bharani', 'Shravana'): 3, ('Bharani', 'Dhanishta'): 2, ('Bharani', 'Shatabhisha'): 2, ('Bharani', 'Purva Bhadrapada'): 3,
        ('Bharani', 'Uttara Bhadrapada'): 1, ('Bharani', 'Revati'): 2,

        ('Krittika', 'Ashwini'): 3, ('Krittika', 'Bharani'): 2, ('Krittika', 'Rohini'): 1, ('Krittika', 'Mrigashirsha'): 2,
        ('Krittika', 'Ardra'): 2, ('Krittika', 'Punarvasu'): 3, ('Krittika', 'Pushya'): 2, ('Krittika', 'Ashlesha'): 1,
        ('Krittika', 'Magha'): 2, ('Krittika', 'Purva Phalguni'): 3, ('Krittika', 'Uttara Phalguni'): 2, ('Krittika', 'Hasta'): 3,
        ('Krittika', 'Chitra'): 2, ('Krittika', 'Swati'): 1, ('Krittika', 'Vishakha'): 2, ('Krittika', 'Anuradha'): 3,
        ('Krittika', 'Jyeshtha'): 2, ('Krittika', 'Mula'): 1, ('Krittika', 'Purva Ashadha'): 2, ('Krittika', 'Uttara Ashadha'): 3,
        ('Krittika', 'Shravana'): 2, ('Krittika', 'Dhanishta'): 1, ('Krittika', 'Shatabhisha'): 2, ('Krittika', 'Purva Bhadrapada'): 3,
        ('Krittika', 'Uttara Bhadrapada'): 2, ('Krittika', 'Revati'): 1,

        ('Rohini', 'Ashwini'): 2, ('Rohini', 'Bharani'): 3, ('Rohini', 'Krittika'): 1, ('Rohini', 'Mrigashirsha'): 2,
        ('Rohini', 'Ardra'): 3, ('Rohini', 'Punarvasu'): 2, ('Rohini', 'Pushya'): 3, ('Rohini', 'Ashlesha'): 2,
        ('Rohini', 'Magha'): 3, ('Rohini', 'Purva Phalguni'): 2, ('Rohini', 'Uttara Phalguni'): 3, ('Rohini', 'Hasta'): 2,
        ('Rohini', 'Chitra'): 3, ('Rohini', 'Swati'): 2, ('Rohini', 'Vishakha'): 1, ('Rohini', 'Anuradha'): 2,
        ('Rohini', 'Jyeshtha'): 3, ('Rohini', 'Mula'): 2, ('Rohini', 'Purva Ashadha'): 3, ('Rohini', 'Uttara Ashadha'): 2,
        ('Rohini', 'Shravana'): 1, ('Rohini', 'Dhanishta'): 2, ('Rohini', 'Shatabhisha'): 3, ('Rohini', 'Purva Bhadrapada'): 2,
        ('Rohini', 'Uttara Bhadrapada'): 3, ('Rohini', 'Revati'): 2,

        ('Mrigashirsha', 'Ashwini'): 3, ('Mrigashirsha', 'Bharani'): 2, ('Mrigashirsha', 'Krittika'): 2, ('Mrigashirsha', 'Rohini'): 2,
        ('Mrigashirsha', 'Ardra'): 2, ('Mrigashirsha', 'Punarvasu'): 2, ('Mrigashirsha', 'Pushya'): 2, ('Mrigashirsha', 'Ashlesha'): 2,
        ('Mrigashirsha', 'Magha'): 2, ('Mrigashirsha', 'Purva Phalguni'): 2, ('Mrigashirsha', 'Uttara Phalguni'): 2, ('Mrigashirsha', 'Hasta'): 2,
        ('Mrigashirsha', 'Chitra'): 2, ('Mrigashirsha', 'Swati'): 2, ('Mrigashirsha', 'Vishakha'): 2, ('Mrigashirsha', 'Anuradha'): 2,
        ('Mrigashirsha', 'Jyeshtha'): 2, ('Mrigashirsha', 'Mula'): 2, ('Mrigashirsha', 'Purva Ashadha'): 2, ('Mrigashirsha', 'Uttara Ashadha'): 2,
        ('Mrigashirsha', 'Shravana'): 2, ('Mrigashirsha', 'Dhanishta'): 2, ('Mrigashirsha', 'Shatabhisha'): 2, ('Mrigashirsha', 'Purva Bhadrapada'): 2,
        ('Mrigashirsha', 'Uttara Bhadrapada'): 2, ('Mrigashirsha', 'Revati'): 2,
        
        ('Ardra', 'Punarvasu'): 3, ('Ardra', 'Pushya'): 2, ('Ardra', 'Ashlesha'): 1, ('Ardra', 'Magha'): 2,
        ('Ardra', 'Purva Phalguni'): 3, ('Ardra', 'Uttara Phalguni'): 2, ('Ardra', 'Hasta'): 1, ('Ardra', 'Chitra'): 2,
        ('Ardra', 'Swati'): 3, ('Ardra', 'Vishakha'): 4, ('Ardra', 'Anuradha'): 3, ('Ardra', 'Jyeshtha'): 2,
        ('Ardra', 'Mula'): 1, ('Ardra', 'Purva Ashadha'): 2, ('Ardra', 'Uttara Ashadha'): 3, ('Ardra', 'Shravana'): 2,
        ('Ardra', 'Dhanishta'): 1, ('Ardra', 'Shatabhisha'): 2, ('Ardra', 'Purva Bhadrapada'): 3, ('Ardra', 'Uttara Bhadrapada'): 4,
        ('Ardra', 'Revati'): 3,

        ('Punarvasu', 'Ashwini'): 4, ('Punarvasu', 'Bharani'): 1, ('Punarvasu', 'Krittika'): 3, ('Punarvasu', 'Rohini'): 2,
        ('Punarvasu', 'Mrigashirsha'): 2, ('Punarvasu', 'Ardra'): 3, ('Punarvasu', 'Pushya'): 4, ('Punarvasu', 'Ashlesha'): 3,
        ('Punarvasu', 'Magha'): 2, ('Punarvasu', 'Purva Phalguni'): 3, ('Punarvasu', 'Uttara Phalguni'): 2, ('Punarvasu', 'Hasta'): 3,
        ('Punarvasu', 'Chitra'): 1, ('Punarvasu', 'Swati'): 2, ('Punarvasu', 'Vishakha'): 3, ('Punarvasu', 'Anuradha'): 2,
        ('Punarvasu', 'Jyeshtha'): 3, ('Punarvasu', 'Mula'): 2, ('Punarvasu', 'Purva Ashadha'): 1, ('Punarvasu', 'Uttara Ashadha'): 2,
        ('Punarvasu', 'Shravana'): 3, ('Punarvasu', 'Dhanishta'): 2, ('Punarvasu', 'Shatabhisha'): 2, ('Punarvasu', 'Purva Bhadrapada'): 3,
        ('Punarvasu', 'Uttara Bhadrapada'): 1, ('Punarvasu', 'Revati'): 2,

        ('Pushya', 'Ashwini'): 1, ('Pushya', 'Bharani'): 2, ('Pushya', 'Krittika'): 2, ('Pushya', 'Rohini'): 3,
        ('Pushya', 'Mrigashirsha'): 2, ('Pushya', 'Ardra'): 2, ('Pushya', 'Punarvasu'): 4, ('Pushya', 'Ashlesha'): 3,
        ('Pushya', 'Magha'): 2, ('Pushya', 'Purva Phalguni'): 3, ('Pushya', 'Uttara Phalguni'): 2, ('Pushya', 'Hasta'): 3,
        ('Pushya', 'Chitra'): 2, ('Pushya', 'Swati'): 1, ('Pushya', 'Vishakha'): 2, ('Pushya', 'Anuradha'): 3,
        ('Pushya', 'Jyeshtha'): 2, ('Pushya', 'Mula'): 1, ('Pushya', 'Purva Ashadha'): 2, ('Pushya', 'Uttara Ashadha'): 3,
        ('Pushya', 'Shravana'): 2, ('Pushya', 'Dhanishta'): 1, ('Pushya', 'Shatabhisha'): 2, ('Pushya', 'Purva Bhadrapada'): 3,
        ('Pushya', 'Uttara Bhadrapada'): 2, ('Pushya', 'Revati'): 1,

        ('Ashlesha', 'Ashwini'): 2, ('Ashlesha', 'Bharani'): 3, ('Ashlesha', 'Krittika'): 1, ('Ashlesha', 'Rohini'): 2,
        ('Ashlesha', 'Mrigashirsha'): 2, ('Ashlesha', 'Ardra'): 1, ('Ashlesha', 'Punarvasu'): 3, ('Ashlesha', 'Pushya'): 3,
        ('Ashlesha', 'Magha'): 2, ('Ashlesha', 'Purva Phalguni'): 1, ('Ashlesha', 'Uttara Phalguni'): 2, ('Ashlesha', 'Hasta'): 3,
        ('Ashlesha', 'Chitra'): 2, ('Ashlesha', 'Swati'): 3, ('Ashlesha', 'Vishakha'): 4, ('Ashlesha', 'Anuradha'): 3,
        ('Ashlesha', 'Jyeshtha'): 2, ('Ashlesha', 'Mula'): 1, ('Ashlesha', 'Purva Ashadha'): 2, ('Ashlesha', 'Uttara Ashadha'): 3,
        ('Ashlesha', 'Shravana'): 2, ('Ashlesha', 'Dhanishta'): 3, ('Ashlesha', 'Shatabhisha'): 4, ('Ashlesha', 'Purva Bhadrapada'): 2,
        ('Ashlesha', 'Uttara Bhadrapada'): 3, ('Ashlesha', 'Revati'): 2,

        ('Magha', 'Ashwini'): 3, ('Magha', 'Bharani'): 2, ('Magha', 'Krittika'): 2, ('Magha', 'Rohini'): 3,
        ('Magha', 'Mrigashirsha'): 2, ('Magha', 'Ardra'): 2, ('Magha', 'Punarvasu'): 2, ('Magha', 'Pushya'): 2,
        ('Magha', 'Ashlesha'): 2, ('Magha', 'Purva Phalguni'): 3, ('Magha', 'Uttara Phalguni'): 2, ('Magha', 'Hasta'): 3,
        ('Magha', 'Chitra'): 2, ('Magha', 'Swati'): 2, ('Magha', 'Vishakha'): 2, ('Magha', 'Anuradha'): 2,
        ('Magha', 'Jyeshtha'): 2, ('Magha', 'Mula'): 2, ('Magha', 'Purva Ashadha'): 3, ('Magha', 'Uttara Ashadha'): 2,
        ('Magha', 'Shravana'): 2, ('Magha', 'Dhanishta'): 2, ('Magha', 'Shatabhisha'): 2, ('Magha', 'Purva Bhadrapada'): 2,
        ('Magha', 'Uttara Bhadrapada'): 2, ('Magha', 'Revati'): 2,
        
         ('Purva Phalguni', 'Swati'): 3, ('Purva Phalguni', 'Vishakha'): 4, ('Purva Phalguni', 'Anuradha'): 3,
        ('Purva Phalguni', 'Jyeshtha'): 2, ('Purva Phalguni', 'Mula'): 1, ('Purva Phalguni', 'Purva Ashadha'): 2,
        ('Purva Phalguni', 'Uttara Ashadha'): 3, ('Purva Phalguni', 'Shravana'): 2, ('Purva Phalguni', 'Dhanishta'): 3,
        ('Purva Phalguni', 'Shatabhisha'): 4, ('Purva Phalguni', 'Purva Bhadrapada'): 3, ('Purva Phalguni', 'Uttara Bhadrapada'): 2,
        ('Purva Phalguni', 'Revati'): 3,

        ('Uttara Phalguni', 'Ashwini'): 1, ('Uttara Phalguni', 'Bharani'): 2, ('Uttara Phalguni', 'Krittika'): 2, ('Uttara Phalguni', 'Rohini'): 3,
        ('Uttara Phalguni', 'Mrigashirsha'): 2, ('Uttara Phalguni', 'Ardra'): 2, ('Uttara Phalguni', 'Punarvasu'): 3, ('Uttara Phalguni', 'Pushya'): 2,
        ('Uttara Phalguni', 'Ashlesha'): 3, ('Uttara Phalguni', 'Magha'): 2, ('Uttara Phalguni', 'Purva Phalguni'): 4, ('Uttara Phalguni', 'Hasta'): 3,
        ('Uttara Phalguni', 'Chitra'): 2, ('Uttara Phalguni', 'Swati'): 1, ('Uttara Phalguni', 'Vishakha'): 2, ('Uttara Phalguni', 'Anuradha'): 3,
        ('Uttara Phalguni', 'Jyeshtha'): 2, ('Uttara Phalguni', 'Mula'): 3, ('Uttara Phalguni', 'Purva Ashadha'): 2, ('Uttara Phalguni', 'Uttara Ashadha'): 3,
        ('Uttara Phalguni', 'Shravana'): 2, ('Uttara Phalguni', 'Dhanishta'): 1, ('Uttara Phalguni', 'Shatabhisha'): 2, ('Uttara Phalguni', 'Purva Bhadrapada'): 3,
        ('Uttara Phalguni', 'Uttara Bhadrapada'): 2, ('Uttara Phalguni', 'Revati'): 1,
    }
    return yoni_compatibility.get((nakshatra_data[rashi1], nakshatra_data[rashi2]), 0)

def get_graha_maitri(rashi1, rashi2):
    # Example logic for Graha Maitri (based on Rashi lords)
    graha_maitri_compatibility = {
        ('Aries', 'Aries'): 5, ('Aries', 'Taurus'): 5, ('Taurus', 'Aries'): 5,
        ('Aries', 'Gemini'): 3, ('Gemini', 'Aries'): 3,
        ('Aries', 'Leo'): 5, ('Leo', 'Aries'): 5,
        ('Aries', 'Virgo'): 1, ('Virgo', 'Aries'): 1,
        ('Aries', 'Libra'): 5, ('Libra', 'Aries'): 5,
        ('Aries', 'Scorpio'): 1, ('Scorpio', 'Aries'): 1,
        ('Aries', 'Sagittarius'): 5, ('Sagittarius', 'Aries'): 5,
        ('Aries', 'Capricorn'): 5, ('Capricorn', 'Aries'): 5,
        ('Aries', 'Aquarius'): 5, ('Aquarius', 'Aries'): 5,
        ('Aries', 'Pisces'): 3, ('Pisces', 'Aries'): 3,

        ('Taurus', 'Taurus'): 5, ('Taurus', 'Gemini'): 3, ('Gemini', 'Taurus'): 3,
        ('Taurus', 'Leo'): 3, ('Leo', 'Taurus'): 3,
        ('Taurus', 'Virgo'): 5, ('Virgo', 'Taurus'): 5,
        ('Taurus', 'Libra'): 1, ('Libra', 'Taurus'): 1,
        ('Taurus', 'Scorpio'): 3, ('Scorpio', 'Taurus'): 3,
        ('Taurus', 'Sagittarius'): 1, ('Sagittarius', 'Taurus'): 1,
        ('Taurus', 'Capricorn'): 3, ('Capricorn', 'Taurus'): 3,
        ('Taurus', 'Aquarius'): 3, ('Aquarius', 'Taurus'): 3,
        ('Taurus', 'Pisces'): 5, ('Pisces', 'Taurus'): 5,

        ('Gemini', 'Gemini'): 5, ('Gemini', 'Leo'): 3, ('Leo', 'Gemini'): 3,
        ('Gemini', 'Virgo'): 3, ('Virgo', 'Gemini'): 3,
        ('Gemini', 'Libra'): 5, ('Libra', 'Gemini'): 5,
        ('Gemini', 'Scorpio'): 1, ('Scorpio', 'Gemini'): 1,
        ('Gemini', 'Sagittarius'): 3, ('Sagittarius', 'Gemini'): 3,
        ('Gemini', 'Capricorn'): 1, ('Capricorn', 'Gemini'): 1,
        ('Gemini', 'Aquarius'): 3, ('Aquarius', 'Gemini'): 3,
        ('Gemini', 'Pisces'): 3, ('Pisces', 'Gemini'): 3,

        ('Leo', 'Leo'): 5, ('Leo', 'Virgo'): 5, ('Virgo', 'Leo'): 5,
        ('Leo', 'Libra'): 5, ('Libra', 'Leo'): 5,
        ('Leo', 'Scorpio'): 3, ('Scorpio', 'Leo'): 3,
        ('Leo', 'Sagittarius'): 5, ('Sagittarius', 'Leo'): 5,
        ('Leo', 'Capricorn'): 5, ('Capricorn', 'Leo'): 5,
        ('Leo', 'Aquarius'): 5, ('Aquarius', 'Leo'): 5,
        ('Leo', 'Pisces'): 3, ('Pisces', 'Leo'): 3,

        ('Virgo', 'Virgo'): 5, ('Virgo', 'Libra'): 1, ('Libra', 'Virgo'): 1,
        ('Virgo', 'Scorpio'): 3, ('Scorpio', 'Virgo'): 3,
        ('Virgo', 'Sagittarius'): 1, ('Sagittarius', 'Virgo'): 1,
        ('Virgo', 'Capricorn'): 3, ('Capricorn', 'Virgo'): 3,
        ('Virgo', 'Aquarius'): 3, ('Aquarius', 'Virgo'): 3,
        ('Virgo', 'Pisces'): 5, ('Pisces', 'Virgo'): 5,

        ('Libra', 'Libra'): 5, ('Libra', 'Scorpio'): 3, ('Scorpio', 'Libra'): 3,
        ('Libra', 'Sagittarius'): 3, ('Sagittarius', 'Libra'): 3,
        ('Libra', 'Capricorn'): 5, ('Capricorn', 'Libra'): 5,
        ('Libra', 'Aquarius'): 1, ('Aquarius', 'Libra'): 1,
        ('Libra', 'Pisces'): 3, ('Pisces', 'Libra'): 3,

        ('Scorpio', 'Scorpio'): 5, ('Scorpio', 'Sagittarius'): 1, ('Sagittarius', 'Scorpio'): 1,
        ('Scorpio', 'Capricorn'): 3, ('Capricorn', 'Scorpio'): 3,
        ('Scorpio', 'Aquarius'): 3, ('Aquarius', 'Scorpio'): 3,
        ('Scorpio', 'Pisces'): 5, ('Pisces', 'Scorpio'): 5,

        ('Sagittarius', 'Sagittarius'): 5, ('Sagittarius', 'Capricorn'): 5, ('Capricorn', 'Sagittarius'): 5,
        ('Sagittarius', 'Aquarius'): 5, ('Aquarius', 'Sagittarius'): 5,
        ('Sagittarius', 'Pisces'): 3, ('Pisces', 'Sagittarius'): 3,

        ('Capricorn', 'Capricorn'): 5, ('Capricorn', 'Aquarius'): 3, ('Aquarius', 'Capricorn'): 3,
        ('Capricorn', 'Pisces'): 5, ('Pisces', 'Capricorn'): 5,

        ('Aquarius', 'Aquarius'): 5, ('Aquarius', 'Pisces'): 3, ('Pisces', 'Aquarius'): 3,

        ('Pisces', 'Pisces'): 5,
    }

    if rashi1 == rashi2:
        return graha_maitri_compatibility.get((rashi1, rashi2), 0)
    
    return graha_maitri_compatibility.get((rashi1, rashi2), graha_maitri_compatibility.get((rashi2, rashi1), 0))


def get_gana(rashi1, rashi2):
    # Example logic for Gana (based on Nakshatra)
    gana_compatibility = {
        ('Ashwini', 'Bharani'): 6, ('Ashwini', 'Krittika'): 4, ('Ashwini', 'Rohini'): 5,
        ('Ashwini', 'Mrigashirsha'): 6, ('Ashwini', 'Ardra'): 4, ('Ashwini', 'Punarvasu'): 5,
        ('Ashwini', 'Pushya'): 6, ('Ashwini', 'Ashlesha'): 4, ('Ashwini', 'Magha'): 5,
        ('Ashwini', 'Purva Phalguni'): 6, ('Ashwini', 'Uttara Phalguni'): 4, ('Ashwini', 'Hasta'): 5,
        ('Ashwini', 'Chitra'): 6, ('Ashwini', 'Swati'): 4, ('Ashwini', 'Vishakha'): 5,
        ('Ashwini', 'Anuradha'): 6, ('Ashwini', 'Jyeshtha'): 4, ('Ashwini', 'Mula'): 5,
        ('Ashwini', 'Purva Ashadha'): 6, ('Ashwini', 'Uttara Ashadha'): 4, ('Ashwini', 'Shravana'): 5,
        ('Ashwini', 'Dhanishta'): 6, ('Ashwini', 'Shatabhisha'): 4, ('Ashwini', 'Purva Bhadrapada'): 5,
        ('Ashwini', 'Uttara Bhadrapada'): 6, ('Ashwini', 'Revati'): 4,

        ('Bharani', 'Krittika'): 6, ('Bharani', 'Rohini'): 4, ('Bharani', 'Mrigashirsha'): 5,
        ('Bharani', 'Ardra'): 6, ('Bharani', 'Punarvasu'): 4, ('Bharani', 'Pushya'): 5,
        ('Bharani', 'Ashlesha'): 6, ('Bharani', 'Magha'): 4, ('Bharani', 'Purva Phalguni'): 5,
        ('Bharani', 'Uttara Phalguni'): 6, ('Bharani', 'Hasta'): 4, ('Bharani', 'Chitra'): 5,
        ('Bharani', 'Swati'): 6, ('Bharani', 'Vishakha'): 4, ('Bharani', 'Anuradha'): 5,
        ('Bharani', 'Jyeshtha'): 6, ('Bharani', 'Mula'): 4, ('Bharani', 'Purva Ashadha'): 5,
        ('Bharani', 'Uttara Ashadha'): 6, ('Bharani', 'Shravana'): 4, ('Bharani', 'Dhanishta'): 5,
        ('Bharani', 'Shatabhisha'): 6, ('Bharani', 'Purva Bhadrapada'): 4, ('Bharani', 'Uttara Bhadrapada'): 5,
        ('Bharani', 'Revati'): 6,

        ('Krittika', 'Rohini'): 6, ('Krittika', 'Mrigashirsha'): 4, ('Krittika', 'Ardra'): 5,
        ('Krittika', 'Punarvasu'): 6, ('Krittika', 'Pushya'): 4, ('Krittika', 'Ashlesha'): 5,
        ('Krittika', 'Magha'): 6, ('Krittika', 'Purva Phalguni'): 4, ('Krittika', 'Uttara Phalguni'): 5,
        ('Krittika', 'Hasta'): 6, ('Krittika', 'Chitra'): 4, ('Krittika', 'Swati'): 5,
        ('Krittika', 'Vishakha'): 6, ('Krittika', 'Anuradha'): 4, ('Krittika', 'Jyeshtha'): 5,
        ('Krittika', 'Mula'): 6, ('Krittika', 'Purva Ashadha'): 4, ('Krittika', 'Uttara Ashadha'): 5,
        ('Krittika', 'Shravana'): 6, ('Krittika', 'Dhanishta'): 4, ('Krittika', 'Shatabhisha'): 5,
        ('Krittika', 'Purva Bhadrapada'): 6, ('Krittika', 'Uttara Bhadrapada'): 4, ('Krittika', 'Revati'): 5,

        ('Rohini', 'Mrigashirsha'): 6, ('Rohini', 'Ardra'): 4, ('Rohini', 'Punarvasu'): 5,
        ('Rohini', 'Pushya'): 6, ('Rohini', 'Ashlesha'): 4, ('Rohini', 'Magha'): 5,
        ('Rohini', 'Purva Phalguni'): 6, ('Rohini', 'Uttara Phalguni'): 4, ('Rohini', 'Hasta'): 5,
        ('Rohini', 'Chitra'): 6, ('Rohini', 'Swati'): 4, ('Rohini', 'Vishakha'): 5,
        ('Rohini', 'Anuradha'): 6, ('Rohini', 'Jyeshtha'): 4, ('Rohini', 'Mula'): 5,
        ('Rohini', 'Purva Ashadha'): 6, ('Rohini', 'Uttara Ashadha'): 4, ('Rohini', 'Shravana'): 5,
        ('Rohini', 'Dhanishta'): 6, ('Rohini', 'Shatabhisha'): 4, ('Rohini', 'Purva Bhadrapada'): 5,
        ('Rohini', 'Uttara Bhadrapada'): 6, ('Rohini', 'Revati'): 4,

        ('Mrigashirsha', 'Ardra'): 6, ('Mrigashirsha', 'Punarvasu'): 4, ('Mrigashirsha', 'Pushya'): 5,
        ('Mrigashirsha', 'Ashlesha'): 6, ('Mrigashirsha', 'Magha'): 4, ('Mrigashirsha', 'Purva Phalguni'): 5,
        ('Mrigashirsha', 'Uttara Phalguni'): 6, ('Mrigashirsha', 'Hasta'): 4, ('Mrigashirsha', 'Chitra'): 5,
        ('Mrigashirsha', 'Swati'): 6, ('Mrigashirsha', 'Vishakha'): 4, ('Mrigashirsha', 'Anuradha'): 5,
        ('Mrigashirsha', 'Jyeshtha'): 6, ('Mrigashirsha', 'Mula'): 4, ('Mrigashirsha', 'Purva Ashadha'): 5,
        ('Mrigashirsha', 'Uttara Ashadha'): 6, ('Mrigashirsha', 'Shravana'): 4, ('Mrigashirsha', 'Dhanishta'): 5,
        ('Mrigashirsha', 'Shatabhisha'): 6, ('Mrigashirsha', 'Purva Bhadrapada'): 4, ('Mrigashirsha', 'Uttara Bhadrapada'): 5,
        ('Mrigashirsha', 'Revati'): 6,

        ('Ardra', 'Punarvasu'): 6, ('Ardra', 'Pushya'): 4, ('Ardra', 'Ashlesha'): 5,
        ('Ardra', 'Magha'): 6, ('Ardra', 'Purva Phalguni'): 4, ('Ardra', 'Uttara Phalguni'): 5,
        ('Ardra', 'Hasta'): 6, ('Ardra', 'Chitra'): 4, ('Ardra', 'Swati'): 5,
        ('Ardra', 'Vishakha'): 6, ('Ardra', 'Anuradha'): 4, ('Ardra', 'Jyeshtha'): 5,
        ('Ardra', 'Mula'): 6, ('Ardra', 'Purva Ashadha'): 4, ('Ardra', 'Uttara Ashadha'): 5,
        ('Ardra', 'Shravana'): 6, ('Ardra', 'Dhanishta'): 4, ('Ardra', 'Shatabhisha'): 5,
        ('Ardra', 'Purva Bhadrapada'): 6, ('Ardra', 'Uttara Bhadrapada'): 4, ('Ardra', 'Revati'): 5,

        ('Punarvasu', 'Pushya'): 6, ('Punarvasu', 'Ashlesha'): 4, ('Punarvasu', 'Magha'): 5,
        ('Punarvasu', 'Purva Phalguni'): 6, ('Punarvasu', 'Uttara Phalguni'): 4, ('Punarvasu', 'Hasta'): 5,
        ('Punarvasu', 'Chitra'): 6, ('Punarvasu', 'Swati'): 4, ('Punarvasu', 'Vishakha'): 5,
        ('Punarvasu', 'Anuradha'): 6, ('Punarvasu', 'Jyeshtha'): 4, ('Punarvasu', 'Mula'): 5,
        ('Punarvasu', 'Purva Ashadha'): 6, ('Punarvasu', 'Uttara Ashadha'): 4, ('Punarvasu', 'Shravana'): 5,
        ('Punarvasu', 'Dhanishta'): 6, ('Punarvasu', 'Shatabhisha'): 4, ('Punarvasu', 'Purva Bhadrapada'): 5,
        ('Punarvasu', 'Uttara Bhadrapada'): 6, ('Punarvasu', 'Revati'): 4,

        ('Pushya', 'Ashlesha'): 6, ('Pushya', 'Magha'): 4, ('Pushya', 'Purva Phalguni'): 5,
        ('Pushya', 'Uttara Phalguni'): 6, ('Pushya', 'Hasta'): 4, ('Pushya', 'Chitra'): 5,
        ('Pushya', 'Swati'): 6, ('Pushya', 'Vishakha'): 4, ('Pushya', 'Anuradha'): 5,
        ('Pushya', 'Jyeshtha'): 6, ('Pushya', 'Mula'): 4, ('Pushya', 'Purva Ashadha'): 5,
        ('Pushya', 'Uttara Ashadha'): 6, ('Pushya', 'Shravana'): 4, ('Pushya', 'Dhanishta'): 5,
        ('Pushya', 'Shatabhisha'): 6, ('Pushya', 'Purva Bhadrapada'): 4, ('Pushya', 'Uttara Bhadrapada'): 5,
        ('Pushya', 'Revati'): 6,

        ('Ashlesha', 'Magha'): 6, ('Ashlesha', 'Purva Phalguni'): 4, ('Ashlesha', 'Uttara Phalguni'): 5,
        ('Ashlesha', 'Hasta'): 6, ('Ashlesha', 'Chitra'): 4, ('Ashlesha', 'Swati'): 5,
        ('Ashlesha', 'Vishakha'): 6, ('Ashlesha', 'Anuradha'): 4, ('Ashlesha', 'Jyeshtha'): 5,
        ('Ashlesha', 'Mula'): 6, ('Ashlesha', 'Purva Ashadha'): 4, ('Ashlesha', 'Uttara Ashadha'): 5,
        ('Ashlesha', 'Shravana'): 6, ('Ashlesha', 'Dhanishta'): 4, ('Ashlesha', 'Shatabhisha'): 5,
        ('Ashlesha', 'Purva Bhadrapada'): 6, ('Ashlesha', 'Uttara Bhadrapada'): 4, ('Ashlesha', 'Revati'): 5,

        ('Magha', 'Purva Phalguni'): 6, ('Magha', 'Uttara Phalguni'): 4, ('Magha', 'Hasta'): 5,
        ('Magha', 'Chitra'): 6, ('Magha', 'Swati'): 4, ('Magha', 'Vishakha'): 5,
        ('Magha', 'Anuradha'): 6, ('Magha', 'Jyeshtha'): 4, ('Magha', 'Mula'): 5,
        ('Magha', 'Purva Ashadha'): 6, ('Magha', 'Uttara Ashadha'): 4, ('Magha', 'Shravana'): 5,
        ('Magha', 'Dhanishta'): 6, ('Magha', 'Shatabhisha'): 4, ('Magha', 'Purva Bhadrapada'): 5,
        ('Magha', 'Uttara Bhadrapada'): 6, ('Magha', 'Revati'): 4,

        ('Purva Phalguni', 'Uttara Phalguni'): 6, ('Purva Phalguni', 'Hasta'): 4, ('Purva Phalguni', 'Chitra'): 5,
        ('Purva Phalguni', 'Swati'): 6, ('Purva Phalguni', 'Vishakha'): 4, ('Purva Phalguni', 'Anuradha'): 5,
        ('Purva Phalguni', 'Jyeshtha'): 6, ('Purva Phalguni', 'Mula'): 4, ('Purva Phalguni', 'Purva Ashadha'): 5,
        ('Purva Phalguni', 'Uttara Ashadha'): 6, ('Purva Phalguni', 'Shravana'): 4, ('Purva Phalguni', 'Dhanishta'): 5,
        ('Purva Phalguni', 'Shatabhisha'): 6, ('Purva Phalguni', 'Purva Bhadrapada'): 4, ('Purva Phalguni', 'Uttara Bhadrapada'): 5,
        ('Purva Phalguni', 'Revati'): 6,

        ('Uttara Phalguni', 'Hasta'): 6, ('Uttara Phalguni', 'Chitra'): 4, ('Uttara Phalguni', 'Swati'): 5,
        ('Uttara Phalguni', 'Vishakha'): 6, ('Uttara Phalguni', 'Anuradha'): 4, ('Uttara Phalguni', 'Jyeshtha'): 5,
        ('Uttara Phalguni', 'Mula'): 6, ('Uttara Phalguni', 'Purva Ashadha'): 4, ('Uttara Phalguni', 'Uttara Ashadha'): 5,
        ('Uttara Phalguni', 'Shravana'): 6, ('Uttara Phalguni', 'Dhanishta'): 4, ('Uttara Phalguni', 'Shatabhisha'): 5,
        ('Uttara Phalguni', 'Purva Bhadrapada'): 6, ('Uttara Phalguni', 'Uttara Bhadrapada'): 4, ('Uttara Phalguni', 'Revati'): 5,
    }
    return gana_compatibility.get((nakshatra_data[rashi1], nakshatra_data[rashi2]), 0)

def get_bhakoot(rashi1, rashi2):
    # Example logic for Bhakoot (based on Rashi)
    bhakoot_compatibility = {
        ('Aries', 'Aries'): 7, ('Aries', 'Taurus'): 0, ('Aries', 'Gemini'): 7, ('Aries', 'Cancer'): 7,
        ('Aries', 'Leo'): 0, ('Aries', 'Virgo'): 0, ('Aries', 'Libra'): 7, ('Aries', 'Scorpio'): 0,
        ('Aries', 'Sagittarius'): 0, ('Aries', 'Capricorn'): 7, ('Aries', 'Aquarius'): 7, ('Aries', 'Pisces'): 0,

        ('Taurus', 'Taurus'): 7, ('Taurus', 'Gemini'): 0, ('Taurus', 'Cancer'): 7, ('Taurus', 'Leo'): 7,
        ('Taurus', 'Virgo'): 0, ('Taurus', 'Libra'): 0, ('Taurus', 'Scorpio'): 7, ('Taurus', 'Sagittarius'): 0,
        ('Taurus', 'Capricorn'): 0, ('Taurus', 'Aquarius'): 7, ('Taurus', 'Pisces'): 7,

        ('Gemini', 'Gemini'): 7, ('Gemini', 'Cancer'): 0, ('Gemini', 'Leo'): 7, ('Gemini', 'Virgo'): 7,
        ('Gemini', 'Libra'): 0, ('Gemini', 'Scorpio'): 0, ('Gemini', 'Sagittarius'): 7, ('Gemini', 'Capricorn'): 0,
        ('Gemini', 'Aquarius'): 0, ('Gemini', 'Pisces'): 7,

        ('Cancer', 'Cancer'): 7, ('Cancer', 'Leo'): 0, ('Cancer', 'Virgo'): 7, ('Cancer', 'Libra'): 7,
        ('Cancer', 'Scorpio'): 0, ('Cancer', 'Sagittarius'): 0, ('Cancer', 'Capricorn'): 7, ('Cancer', 'Aquarius'): 0,
        ('Cancer', 'Pisces'): 0,

        ('Leo', 'Leo'): 7, ('Leo', 'Virgo'): 0, ('Leo', 'Libra'): 7, ('Leo', 'Scorpio'): 7,
        ('Leo', 'Sagittarius'): 0, ('Leo', 'Capricorn'): 0, ('Leo', 'Aquarius'): 7, ('Leo', 'Pisces'): 0,

        ('Virgo', 'Virgo'): 7, ('Virgo', 'Libra'): 0, ('Virgo', 'Scorpio'): 7, ('Virgo', 'Sagittarius'): 7,
        ('Virgo', 'Capricorn'): 0, ('Virgo', 'Aquarius'): 0, ('Virgo', 'Pisces'): 7,

        ('Libra', 'Libra'): 7, ('Libra', 'Scorpio'): 0, ('Libra', 'Sagittarius'): 7, ('Libra', 'Capricorn'): 7,
        ('Libra', 'Aquarius'): 0, ('Libra', 'Pisces'): 0,

        ('Scorpio', 'Scorpio'): 7, ('Scorpio', 'Sagittarius'): 0, ('Scorpio', 'Capricorn'): 7, ('Scorpio', 'Aquarius'): 7,
        ('Scorpio', 'Pisces'): 0,

        ('Sagittarius', 'Sagittarius'): 7, ('Sagittarius', 'Capricorn'): 0, ('Sagittarius', 'Aquarius'): 7,
        ('Sagittarius', 'Pisces'): 7,

        ('Capricorn', 'Capricorn'): 7, ('Capricorn', 'Aquarius'): 0, ('Capricorn', 'Pisces'): 7,

        ('Aquarius', 'Aquarius'): 7, ('Aquarius', 'Pisces'): 0,

        ('Pisces', 'Pisces'): 7,
    }
    return bhakoot_compatibility.get((rashi1, rashi2), 0)

# Nadi compatibility matrix
nadi_compatibility = {
    ('Aadi', 'Aadi'): 0, ('Aadi', 'Madhya'): 8, ('Aadi', 'Antya'): 8,
    ('Madhya', 'Aadi'): 8, ('Madhya', 'Madhya'): 0, ('Madhya', 'Antya'): 8,
    ('Antya', 'Aadi'): 8, ('Antya', 'Madhya'): 8, ('Antya', 'Antya'): 0,
}

def get_nadi(boy_rashi, girl_rashi):
    # Get the Nakshatras for the given Rashis
    boy_nakshatra = nakshatra_data.get(boy_rashi)
    girl_nakshatra = nakshatra_data.get(girl_rashi)

    # Get the Nadi types for the Nakshatras
    boy_nadi = nakshatra_to_nadi.get(boy_nakshatra)
    girl_nadi = nakshatra_to_nadi.get(girl_nakshatra)

    # Check compatibility
    if boy_nadi and girl_nadi:
        return nadi_compatibility.get((boy_nadi, girl_nadi), nadi_compatibility.get((girl_nadi, boy_nadi), 0))
    else:
        return 0

# Example usage
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
