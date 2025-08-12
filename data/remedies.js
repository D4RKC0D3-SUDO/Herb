const remedies = [
  {
    id: 1,
  prescription: "ibuprofen",
alternatives: [
    { name: "Turmeric", source: "Turmeric root", use: "Anti-inflammatory", dosage: "500mg twice daily" },
    { name: "Ginger", source: "Fresh root", use: "Pain relief", dosage: "1000mg daily" },
    { name: "Boswellia", source: "Frankincense", use: "Reduces arthritis symptoms", dosage: "300mg twice daily" },
    { name: "Omega-3", source: "Fish oil", use: "Joint health", dosage: "1000mg daily" },
    { name: "White Willow Bark", source: "Tree bark", use: "Natural aspirin", dosage: "240mg daily" }
  ]
},

    {
      id: 2,
      prescription: "antihistamine",
      alternatives: [
        { name: "Quercetin", source: "Onions, apples", use: "Reduces allergies", dosage: "500mg twice daily" },
        { name: "Vitamin C", source: "Citrus fruits", use: "Reduces histamine", dosage: "1000mg daily" },
        { name: "Stinging Nettle", source: "Nettle tea", use: "Blocks histamine", dosage: "300mg twice daily" },
        { name: "Butterbur", source: "Butterbur root", use: "Allergy relief", dosage: "50mg twice daily" },
        { name: "Bromelain", source: "Pineapple", use: "Anti-inflammatory", dosage: "200mg daily" }
      ]
    },
    { 
      id: 3,
      prescription: "acetaminophen",
      alternatives: [
        { name: "Willow Bark", source: "Tree bark", use: "Natural painkiller", dosage: "120mg daily" },
        { name: "Devil's Claw", source: "Root extract", use: "Joint pain", dosage: "600mg daily" },
        { name: "Capsaicin", source: "Chili peppers", use: "Pain relief cream", dosage: "Topical as needed" },
        { name: "Magnesium", source: "Supplements", use: "Relieves muscle cramps", dosage: "400mg daily" },
        { name: "CBD Oil", source: "Cannabis", use: "Chronic pain relief", dosage: "5–25mg as needed" }
      ]
    },
    { 
      id: 4,
      prescription: "metformin",
      alternatives: [
        { name: "Berberine", source: "Barberry root", use: "Blood sugar regulation", dosage: "500mg 3x daily" },
        { name: "Cinnamon", source: "Cinnamon bark", use: "Lowers glucose", dosage: "1 tsp daily" },
        { name: "Alpha Lipoic Acid", source: "Supplements", use: "Improves insulin sensitivity", dosage: "300mg daily" },
        { name: "Bitter Melon", source: "Fruit", use: "Lowers blood sugar", dosage: "50–100ml juice daily" },
        { name: "Gymnema Sylvestre", source: "Herb leaf", use: "Reduces sugar absorption", dosage: "400mg daily" }
      ]
    },
    {
      id: 5,
      prescription: "lisinopril",
      alternatives: [
        { name: "Garlic", source: "Raw cloves", use: "Lowers blood pressure", dosage: "1-2 cloves daily" },
        { name: "Hibiscus Tea", source: "Dried flowers", use: "Lowers systolic BP", dosage: "1-2 cups/day" },
        { name: "Beet Juice", source: "Beetroot", use: "Improves circulation", dosage: "250ml daily" },
        { name: "CoQ10", source: "Supplements", use: "Heart health", dosage: "100mg daily" },
        { name: "Omega-3", source: "Fish oil", use: "Lowers BP", dosage: "1000mg daily" }
      ]
    },
    {
        id: 6,
        prescription: "amoxicillin",
        alternatives: [
          { name: "Oregano Oil", source: "Oregano leaves", use: "Antibacterial", dosage: "2–3 drops diluted daily" },
          { name: "Echinacea", source: "Echinacea flower", use: "Boosts immune response", dosage: "400mg 3x daily" },
          { name: "Manuka Honey", source: "Manuka tree", use: "Kills bacteria", dosage: "1 tsp daily" },
          { name: "Garlic", source: "Raw cloves", use: "Natural antibiotic", dosage: "1-2 cloves daily" },
          { name: "Colloidal Silver", source: "Silver suspension", use: "Kills bacteria", dosage: "5ml daily" }
        ]
      },
      {
        id: 7,
        prescription: "omeprazole",
        alternatives: [
          { name: "Licorice Root (DGL)", source: "Licorice plant", use: "Reduces acid reflux", dosage: "400mg before meals" },
          { name: "Aloe Vera Juice", source: "Aloe plant", use: "Soothes stomach lining", dosage: "1/2 cup daily" },
          { name: "Ginger", source: "Root", use: "Reduces indigestion", dosage: "500mg after meals" },
          { name: "Slippery Elm", source: "Tree bark", use: "Coats stomach", dosage: "1 tsp powder in water" },
          { name: "Apple Cider Vinegar", source: "Fermented apples", use: "Balances stomach acid", dosage: "1 tbsp in water before meals" }
        ]
      },
      { 
        id: 8,
        prescription: "atorvastatin",
        alternatives: [
          { name: "Red Yeast Rice", source: "Fermented rice", use: "Lowers cholesterol", dosage: "600mg 2x daily" },
          { name: "Artichoke Extract", source: "Artichoke leaves", use: "Liver health", dosage: "320mg daily" },
          { name: "Garlic", source: "Cloves", use: "Reduces cholesterol", dosage: "1 clove daily" },
          { name: "Niacin (B3)", source: "Supplements", use: "Raises HDL", dosage: "100mg daily" },
          { name: "Fiber (Psyllium)", source: "Plant fiber", use: "Lowers LDL", dosage: "5g daily" }
        ]
      },
      {
        id: 9,
        prescription: "alprazolam",
        alternatives: [
          { name: "Ashwagandha", source: "Root", use: "Reduces anxiety", dosage: "300mg twice daily" },
          { name: "L-Theanine", source: "Green tea", use: "Promotes relaxation", dosage: "200mg daily" },
          { name: "Passionflower", source: "Flower extract", use: "Eases nervousness", dosage: "400mg at bedtime" },
          { name: "Valerian Root", source: "Root", use: "Natural sedative", dosage: "500mg before bed" },
          { name: "Magnesium", source: "Supplements", use: "Calms nerves", dosage: "400mg daily" }
        ]
      },
      {
        id: 10,
        prescription: "zolpidem",
        alternatives: [
          { name: "Melatonin", source: "Supplement", use: "Regulates sleep", dosage: "1–5mg before bed" },
          { name: "Chamomile Tea", source: "Chamomile flower", use: "Promotes sleep", dosage: "1 cup before bed" },
          { name: "Lavender Oil", source: "Lavender plant", use: "Relaxes mind", dosage: "Diffuser or pillow spray" },
          { name: "Valerian Root", source: "Root", use: "Sleep aid", dosage: "500mg before sleep" },
          { name: "Magnesium Glycinate", source: "Supplement", use: "Improves sleep quality", dosage: "200mg before bed" }
        ]
      },
      {
        id: 11,
        prescription: "sertraline",
        alternatives: [
          { name: "5-HTP", source: "Griffonia seed", use: "Boosts serotonin", dosage: "100mg daily" },
          { name: "St. John’s Wort", source: "Flowering plant", use: "Mild depression", dosage: "300mg 3x daily" },
          { name: "SAM-e", source: "Supplement", use: "Mood stabilizer", dosage: "400mg daily" },
          { name: "Omega-3", source: "Fish oil", use: "Mood support", dosage: "1000mg daily" },
          { name: "Rhodiola Rosea", source: "Root", use: "Reduces stress", dosage: "200mg daily" }
        ]
      },
      {
        id: 12,
        prescription: "albuterol",
        alternatives: [
          { name: "Lobelia", source: "Indian tobacco plant", use: "Bronchodilator", dosage: "100mg daily" },
          { name: "Thyme", source: "Herb", use: "Loosens mucus", dosage: "Tea or capsules" },
          { name: "Licorice Root", source: "Root", use: "Soothes airways", dosage: "200mg daily" },
          { name: "Magnesium", source: "Supplement", use: "Relaxes muscles", dosage: "400mg daily" },
          { name: "NAC (N-Acetylcysteine)", source: "Supplement", use: "Breaks mucus", dosage: "600mg twice daily" }
        ]
      },
      {
        id: 13,
        prescription: "levothyroxine",
        alternatives: [
          { name: "Iodine", source: "Seaweed", use: "Supports thyroid", dosage: "150mcg daily" },
          { name: "Selenium", source: "Brazil nuts", use: "Boosts T3 conversion", dosage: "200mcg daily" },
          { name: "Zinc", source: "Pumpkin seeds", use: "Supports thyroid enzymes", dosage: "30mg daily" },
          { name: "Ashwagandha", source: "Root", use: "Regulates thyroid hormones", dosage: "500mg daily" },
          { name: "Vitamin D", source: "Sunlight/supplements", use: "Balances hormones", dosage: "1000–2000 IU daily" }
        ]
      },
      {
        id: 14,
        prescription: "furosemide",
        alternatives: [
          { name: "Dandelion", source: "Leaves", use: "Natural diuretic", dosage: "500mg twice daily" },
          { name: "Parsley", source: "Leaf", use: "Promotes urination", dosage: "Tea or 1 tsp extract" },
          { name: "Hibiscus", source: "Flowers", use: "Lowers BP and acts as diuretic", dosage: "2 cups tea daily" },
          { name: "Green Tea", source: "Leaves", use: "Mild diuretic", dosage: "2–3 cups daily" },
          { name: "Celery Seed", source: "Celery", use: "Urine output", dosage: "500mg daily" }
        ]
      },
      {
        id: 15,
        prescription: "prednisone",
        alternatives: [
          { name: "Turmeric (Curcumin)", source: "Root", use: "Reduces inflammation", dosage: "1000mg daily" },
          { name: "Omega-3", source: "Fish oil", use: "Anti-inflammatory", dosage: "1000mg daily" },
          { name: "Boswellia", source: "Frankincense", use: "Joint relief", dosage: "300mg twice daily" },
          { name: "Licorice Root", source: "Root", use: "Adrenal support", dosage: "500mg daily" },
          { name: "Ginger", source: "Root", use: "Reduces swelling", dosage: "500–1000mg daily" }
        ]
      },
      {
        id: 16,
        prescription: "insulin (Type 2 diabetes)",
        alternatives: [
          { name: "Fenugreek", source: "Seeds", use: "Lowers blood sugar", dosage: "5–10g daily" },
          { name: "Ceylon Cinnamon", source: "Bark", use: "Improves insulin sensitivity", dosage: "1–2g daily" },
          { name: "Aloe Vera Gel", source: "Aloe plant", use: "Reduces fasting glucose", dosage: "1 tbsp daily" },
          { name: "Nopal Cactus", source: "Prickly pear", use: "Blood sugar control", dosage: "100–500mg daily" },
          { name: "Banaba Leaf", source: "Lagerstroemia plant", use: "Enhances glucose uptake", dosage: "24–48mg daily" }
        ]
      },
      {
        id: 17,
        prescription: "fluoxetine (Prozac)",
        alternatives: [
          { name: "Saffron", source: "Crocus flower", use: "Mood enhancement", dosage: "30mg daily" },
          { name: "Mucuna Pruriens", source: "Velvet bean", use: "Boosts dopamine", dosage: "200–500mg daily" },
          { name: "Vitamin B Complex", source: "Supplements", use: "Supports mental health", dosage: "Once daily" },
          { name: "Tryptophan", source: "Turkey, eggs", use: "Serotonin precursor", dosage: "500mg before bed" },
          { name: "Holy Basil", source: "Tulsi leaves", use: "Adaptogen, reduces stress", dosage: "500mg daily" }
        ]
      },
      {
        id: 18,
        prescription: "morphine",
        alternatives: [
          { name: "Kratom", source: "Mitragyna speciosa leaf", use: "Severe pain relief", dosage: "1–2g as needed" },
          { name: "Corydalis", source: "Root", use: "Painkiller, sedative", dosage: "100–200mg up to 3x daily" },
          { name: "Skullcap", source: "Scutellaria plant", use: "Pain + anxiety", dosage: "350mg before bed" },
          { name: "California Poppy", source: "Poppy flower", use: "Mild sedative", dosage: "300mg before sleep" },
          { name: "Hops", source: "Hop flowers", use: "Relaxant, pain relief", dosage: "1–2g dried flower infusion" }
        ]
      },
      {
        id: 19,
        prescription: "adderall",
        alternatives: [
          { name: "Ginseng", source: "Root", use: "Energy and focus", dosage: "200mg in morning" },
          { name: "Rhodiola Rosea", source: "Root", use: "Mental stamina", dosage: "100–200mg daily" },
          { name: "L-Tyrosine", source: "Amino acid", use: "Supports dopamine, focus", dosage: "500mg before tasks" },
          { name: "Ginkgo Biloba", source: "Leaf", use: "Brain circulation", dosage: "120mg daily" },
          { name: "Green Tea Extract", source: "Leaves", use: "Caffeine + L-theanine combo", dosage: "250mg daily" }
        ]
      },
      {
        id: 20,
        prescription: "clonazepam",
        alternatives: [
          { name: "Kava", source: "Root", use: "Calms nerves, reduces anxiety", dosage: "250mg before bed" },
          { name: "Blue Vervain", source: "Herb", use: "Muscle relaxant + anxiety aid", dosage: "1 tsp tincture daily" },
          { name: "Hops", source: "Flowers", use: "Nervous system relaxant", dosage: "200mg at night" },
          { name: "Skullcap", source: "Scutellaria", use: "Nervous tension relief", dosage: "350mg at night" },
          { name: "Magnesium Taurate", source: "Supplement", use: "Balances mood and nerves", dosage: "200mg daily" }
        ]
      },
      {
        id: 21,
        prescription: "methotrexate (RA/autoimmune)",
        alternatives: [
          { name: "Cat’s Claw", source: "Vine bark", use: "Anti-inflammatory", dosage: "250mg twice daily" },
          { name: "Turmeric (Curcumin)", source: "Root", use: "Autoimmune inflammation", dosage: "1000mg daily" },
          { name: "Omega-3", source: "Fish oil", use: "Lowers inflammation", dosage: "1000mg daily" },
          { name: "Boswellia", source: "Resin", use: "Joint health", dosage: "300mg twice daily" },
          { name: "Ginger", source: "Root", use: "Immune modulation", dosage: "500–1000mg daily" }
        ]
      },
      {
        id: 22,
        prescription: "clopidogrel",
        alternatives: [
          { name: "Ginger", source: "Root", use: "Natural blood thinner", dosage: "1000mg daily" },
          { name: "Garlic", source: "Raw cloves", use: "Prevents clotting", dosage: "1–2 cloves daily" },
          { name: "Ginkgo Biloba", source: "Leaves", use: "Improves circulation", dosage: "120mg daily" },
          { name: "Turmeric", source: "Root", use: "Anti-platelet effects", dosage: "500mg twice daily" },
          { name: "Vitamin E", source: "Nuts/seeds", use: "Supports heart health", dosage: "400 IU daily" }
        ]
      },
      {
        id: 23,
        prescription: "doxycycline",
        alternatives: [
          { name: "Neem", source: "Neem tree", use: "Antibacterial", dosage: "300mg twice daily" },
          { name: "Oregon Grape Root", source: "Root", use: "Antibiotic alternative", dosage: "500mg daily" },
          { name: "Usnea", source: "Lichen", use: "Natural antibiotic", dosage: "500mg twice daily" },
          { name: "Andrographis", source: "Herb", use: "Fights infection", dosage: "400mg daily" },
          { name: "Olive Leaf Extract", source: "Olive leaves", use: "Antiviral & antibacterial", dosage: "500mg daily" }
        ]
      },
      {
        id: 24,
        prescription: "amlodipine",
        alternatives: [
          { name: "Hawthorn Berry", source: "Berry", use: "Lowers blood pressure", dosage: "250–500mg daily" },
          { name: "CoQ10", source: "Supplement", use: "Supports heart muscle", dosage: "100mg daily" },
          { name: "Garlic", source: "Clove", use: "Improves blood flow", dosage: "1 clove daily" },
          { name: "Celery Seed Extract", source: "Celery", use: "Lowers BP", dosage: "75–150mg daily" },
          { name: "Beetroot Powder", source: "Beets", use: "Nitric oxide booster", dosage: "500mg–1g daily" }
        ]
      },
      {
        id: 25,
        prescription: "spironolactone",
        alternatives: [
          { name: "Dandelion Root", source: "Root", use: "Natural diuretic", dosage: "500mg twice daily" },
          { name: "Green Tea", source: "Leaves", use: "Reduces water retention", dosage: "2–3 cups daily" },
          { name: "Parsley Leaf", source: "Leaves", use: "Diuretic effect", dosage: "1 tsp extract or tea" },
          { name: "Corn Silk", source: "Maize silk", use: "Reduces fluid retention", dosage: "1–2g daily" },
          { name: "Nettle Leaf", source: "Leaf", use: "Supports kidney function", dosage: "1–2 cups tea daily" }
        ]
      },
      
    {
      id: 26,
  prescription: "hydrochlorothiazide",
  alternatives: [
    { name: "Hibiscus Tea", source: "Hibiscus flower", use: "Lowers blood pressure", dosage: "1–2 cups daily" },
    { name: "Celery Seed", source: "Seeds", use: "Diuretic and antihypertensive", dosage: "1 tsp extract daily" },
    { name: "Garlic", source: "Bulb", use: "Improves circulation", dosage: "600–1200mg daily" },
    { name: "Olive Leaf", source: "Leaves", use: "Supports heart health", dosage: "500mg twice daily" },
    { name: "Hawthorn Berry", source: "Berry", use: "Strengthens heart function", dosage: "250–500mg daily" }
  ]
},
{
  id: 27,
  prescription: "gabapentin",
  alternatives: [
    { name: "Valerian Root", source: "Root", use: "Calms nerve activity", dosage: "400–900mg before bed" },
    { name: "Passionflower", source: "Flower", use: "Reduces anxiety", dosage: "250–500mg daily" },
    { name: "Magnesium", source: "Mineral", use: "Supports nerve function", dosage: "200–400mg daily" },
    { name: "CBD Oil", source: "Cannabis extract", use: "Neuropathic pain relief", dosage: "10–25mg daily" },
    { name: "Skullcap", source: "Herb", use: "Soothes nervous system", dosage: "1–2g dried herb daily" }
  ]
},
{
  id: 28,
  prescription: "hydrocodone",
  alternatives: [
    { name: "Corydalis", source: "Root", use: "Natural pain relief", dosage: "200–400mg daily" },
    { name: "Kava", source: "Root", use: "Muscle relaxation", dosage: "250mg twice daily" },
    { name: "California Poppy", source: "Flower", use: "Mild sedative", dosage: "500mg before bed" },
    { name: "Turmeric", source: "Root", use: "Anti-inflammatory", dosage: "500mg twice daily" },
    { name: "Willow Bark", source: "Tree bark", use: "Natural analgesic", dosage: "240mg daily" }
  ]
},
{
  id: 30,
  prescription: "diazepam",
  alternatives: [
    { name: "Chamomile", source: "Flower", use: "Reduces anxiety", dosage: "1–2 cups tea daily" },
    { name: "Ashwagandha", source: "Root", use: "Adaptogen for stress", dosage: "300–600mg daily" },
    { name: "Lemon Balm", source: "Leaf", use: "Calming effect", dosage: "300–500mg daily" },
    { name: "Lavender", source: "Flower", use: "Promotes relaxation", dosage: "80mg extract daily" },
    { name: "Rhodiola", source: "Root", use: "Balances mood", dosage: "200–400mg daily" }
  ]
},
{
  id: 31,
  prescription: "pantoprazole",
  alternatives: [
    { name: "Slippery Elm", source: "Bark", use: "Soothes digestive tract", dosage: "1–2g powder daily" },
    { name: "Licorice Root (DGL)", source: "Root", use: "Protects stomach lining", dosage: "380mg before meals" },
    { name: "Marshmallow Root", source: "Root", use: "Reduces acid reflux", dosage: "2–5g daily" },
    { name: "Aloe Vera Juice", source: "Leaf gel", use: "Heals gut lining", dosage: "1/4 cup before meals" },
    { name: "Ginger", source: "Root", use: "Improves digestion", dosage: "1000mg daily" }
  ]
},

{
  id: 32,
  prescription: "tramadol",
  alternatives: [
    { name: "Devil’s Claw", source: "Root", use: "Pain relief", dosage: "600–1200mg daily" },
    { name: "Turmeric", source: "Root", use: "Anti-inflammatory", dosage: "500mg twice daily" },
    { name: "Boswellia", source: "Resin", use: "Joint pain relief", dosage: "300mg twice daily" },
    { name: "Ginger", source: "Root", use: "Muscle pain relief", dosage: "1000mg daily" },
    { name: "White Willow Bark", source: "Tree bark", use: "Natural analgesic", dosage: "240mg daily" }
  ]
},
{
  id: 33,
  prescription: "bupropion",
  alternatives: [
    { name: "St. John’s Wort", source: "Flowering tops", use: "Mood support", dosage: "300–600mg daily" },
    { name: "SAM-e", source: "Amino acid derivative", use: "Boosts mood", dosage: "400–1600mg daily" },
    { name: "Rhodiola Rosea", source: "Root", use: "Enhances focus", dosage: "200–400mg daily" },
    { name: "L-Theanine", source: "Green tea", use: "Promotes calm alertness", dosage: "100–200mg daily" },
    { name: "Mucuna Pruriens", source: "Seed", use: "Supports dopamine", dosage: "250–500mg daily" }
  ]
},
{
  id: 34,
  prescription: "trazodone",
  alternatives: [
    { name: "Valerian Root", source: "Root", use: "Sleep aid", dosage: "400–900mg before bed" },
    { name: "Melatonin", source: "Hormone supplement", use: "Regulates sleep cycle", dosage: "1–5mg before bed" },
    { name: "Chamomile", source: "Flower", use: "Promotes relaxation", dosage: "1–2 cups tea before bed" },
    { name: "Passionflower", source: "Flower", use: "Mild sedative", dosage: "250–500mg before bed" },
    { name: "Magnolia Bark", source: "Tree bark", use: "Reduces nighttime anxiety", dosage: "200–400mg before bed" }
  ]
},
{
  id: 35,
  prescription: "cyclobenzaprine",
  alternatives: [
    { name: "Kava", source: "Root", use: "Muscle relaxation", dosage: "250mg twice daily" },
    { name: "Magnesium", source: "Mineral", use: "Relieves muscle tension", dosage: "200–400mg daily" },
    { name: "CBD Oil", source: "Cannabis extract", use: "Eases muscle spasms", dosage: "10–25mg daily" },
    { name: "Skullcap", source: "Herb", use: "Calms nervous system", dosage: "1–2g dried herb daily" },
    { name: "Peppermint Oil", source: "Leaf extract", use: "Relieves muscle pain", dosage: "Topical application as needed" }
  ]
},
{
  id: 36,
  prescription: "topiramate",
  alternatives: [
    { name: "Butterbur", source: "Root", use: "Migraine prevention", dosage: "50–75mg twice daily" },
    { name: "Feverfew", source: "Leaf", use: "Reduces migraine frequency", dosage: "100–300mg daily" },
    { name: "Magnesium", source: "Mineral", use: "Supports brain function", dosage: "400mg daily" },
    { name: "Riboflavin (Vitamin B2)", source: "B-complex", use: "Migraine prevention", dosage: "400mg daily" },
    { name: "CoQ10", source: "Enzyme supplement", use: "Supports neurological health", dosage: "100mg three times daily" }
  ]
},

{
  id: 37,
  prescription: "propranolol",
  alternatives: [
    { name: "L-Theanine", source: "Green tea", use: "Reduces anxiety and heart rate", dosage: "100–200mg daily" },
    { name: "Magnesium", source: "Mineral", use: "Supports heart rhythm", dosage: "200–400mg daily" },
    { name: "Hawthorn", source: "Berry", use: "Improves cardiac function", dosage: "250–500mg daily" },
    { name: "Passionflower", source: "Flower", use: "Calms nervous system", dosage: "250–500mg daily" },
    { name: "Ashwagandha", source: "Root", use: "Adaptogen for stress", dosage: "300–600mg daily" }
  ]
},
{
  id: 38,
  prescription: "glipizide",
  alternatives: [
    { name: "Berberine", source: "Plant alkaloid", use: "Lowers blood sugar", dosage: "500mg twice daily" },
    { name: "Cinnamon", source: "Bark", use: "Improves insulin sensitivity", dosage: "1000–2000mg daily" },
    { name: "Gymnema Sylvestre", source: "Leaf", use: "Reduces sugar absorption", dosage: "400–600mg daily" },
    { name: "Bitter Melon", source: "Fruit", use: "Lowers glucose levels", dosage: "500mg twice daily" },
    { name: "Fenugreek", source: "Seed", use: "Improves glucose tolerance", dosage: "5–10g daily" }
  ]
},
{
  id: 39,
  prescription: "rosuvastatin",
  alternatives: [
    { name: "Red Yeast Rice", source: "Fermented rice", use: "Lowers cholesterol", dosage: "600–1200mg daily" },
    { name: "Artichoke Leaf", source: "Leaf", use: "Supports liver and cholesterol", dosage: "500mg twice daily" },
    { name: "Garlic", source: "Bulb", use: "Improves lipid profile", dosage: "600–1200mg daily" },
    { name: "Flaxseed", source: "Seed", use: "Reduces LDL", dosage: "1–2 tbsp daily" },
    { name: "Niacin (Vitamin B3)", source: "Vitamin", use: "Raises HDL", dosage: "500–2000mg daily" }
  ]
},
{
  id: 40,
  prescription: "montelukast",
  alternatives: [
    { name: "Quercetin", source: "Onions, apples", use: "Reduces inflammation", dosage: "500mg twice daily" },
    { name: "Stinging Nettle", source: "Leaf", use: "Blocks histamine", dosage: "300mg twice daily" },
    { name: "Butterbur", source: "Root", use: "Relieves respiratory inflammation", dosage: "50mg twice daily" },
    { name: "Boswellia", source: "Resin", use: "Anti-inflammatory for lungs", dosage: "300mg twice daily" },
    { name: "Vitamin C", source: "Citrus fruits", use: "Reduces histamine", dosage: "1000mg daily" }
  ]
},
{
  id: 41,
  prescription: "risedronate",
  alternatives: [
    { name: "Vitamin D3", source: "Sunlight, supplements", use: "Bone health", dosage: "1000–2000 IU daily" },
    { name: "Vitamin K2", source: "Fermented foods", use: "Directs calcium to bones", dosage: "90–120mcg daily" },
    { name: "Magnesium", source: "Mineral", use: "Supports bone density", dosage: "200–400mg daily" },
    { name: "Boron", source: "Mineral", use: "Improves calcium metabolism", dosage: "3–6mg daily" },
    { name: "Silica", source: "Horsetail extract", use: "Strengthens bones", dosage: "50–100mg daily" }
  ]
},
{
  id: 42,
  prescription: "aripiprazole",
  alternatives: [
    { name: "Lithium Orotate", source: "Mineral compound", use: "Mood stabilization", dosage: "5–10mg daily" },
    { name: "Omega-3", source: "Fish oil", use: "Supports brain function", dosage: "1000mg daily" },
    { name: "N-Acetylcysteine (NAC)", source: "Amino acid", use: "Reduces compulsive behavior", dosage: "600–1200mg daily" },
    { name: "Rhodiola Rosea", source: "Root", use: "Balances mood", dosage: "200–400mg daily" },
    { name: "L-Tyrosine", source: "Amino acid", use: "Supports dopamine levels", dosage: "500–1000mg daily" }
  ]
},
{
  id: 43,
  prescription: "omeprazole",
  alternatives: [
    { name: "Slippery Elm", source: "Bark", use: "Soothes digestive tract", dosage: "1–2g powder daily" },
    { name: "Licorice Root (DGL)", source: "Root", use: "Protects stomach lining", dosage: "380mg before meals" },
    { name: "Marshmallow Root", source: "Root", use: "Reduces acid reflux", dosage: "2–5g daily" },
    { name: "Aloe Vera Juice", source: "Leaf gel", use: "Heals gut lining", dosage: "1/4 cup before meals" },
    { name: "Ginger", source: "Root", use: "Improves digestion", dosage: "1000mg daily" }
  ]
},
{
  id: 44,
  prescription: "spiral contraceptives",
  alternatives: [
    { name: "Chasteberry (Vitex)", source: "Berry", use: "Balances hormones", dosage: "400–1000mg daily" },
    { name: "Maca Root", source: "Root", use: "Supports fertility and libido", dosage: "500–1000mg daily" },
    { name: "Black Cohosh", source: "Root", use: "Regulates menstrual cycles", dosage: "20–40mg twice daily" },
    { name: "Dong Quai", source: "Root", use: "Hormonal support", dosage: "500–1000mg daily" },
    { name: "Evening Primrose Oil", source: "Seed oil", use: "Eases PMS symptoms", dosage: "1000–2000mg daily" }
  ]
},
{
  id: 45,
  prescription: "isotretinoin",
  alternatives: [
    { name: "Zinc", source: "Mineral", use: "Reduces acne", dosage: "30–50mg daily" },
    { name: "Vitamin A", source: "Fat-soluble vitamin", use: "Skin regeneration", dosage: "5000–10000 IU daily" },
    { name: "Tea Tree Oil", source: "Leaf extract", use: "Antibacterial for skin", dosage: "Topical use as needed" },
    { name: "Spearmint Tea", source: "Leaves", use: "Hormonal acne support", dosage: "1–2 cups daily" },
    { name: "Burdock Root", source: "Root", use: "Detoxifies skin", dosage: "500mg twice daily" }
  ]
},
{
  id: 46,
  prescription: "levonorgestrel",
  alternatives: [
    { name: "Wild Yam", source: "Root", use: "Natural progesterone support", dosage: "500mg daily" },
    { name: "Red Clover", source: "Flower", use: "Phytoestrogen source", dosage: "40–80mg daily" },
    { name: "Flaxseed", source: "Seed", use: "Balances estrogen levels", dosage: "1–2 tbsp daily" },
    { name: "Licorice Root", source: "Root", use: "Supports hormonal balance", dosage: "200–400mg daily" },
    { name: "Schisandra Berry", source: "Berry", use: "Adaptogen for reproductive health", dosage: "500mg twice daily" }
  ]
},
{
  id: 47,
  prescription: "methocarbamol",
  alternatives: [
    { name: "Magnesium", source: "Mineral", use: "Relieves muscle tension", dosage: "200–400mg daily" },
    { name: "Valerian Root", source: "Root", use: "Muscle relaxation", dosage: "400–900mg before bed" },
    { name: "CBD Oil", source: "Cannabis extract", use: "Eases muscle spasms", dosage: "10–25mg daily" },
    { name: "Chamomile", source: "Flower", use: "Calms muscle activity", dosage: "1–2 cups tea daily" },
    { name: "Peppermint Oil", source: "Leaf extract", use: "Topical muscle relief", dosage: "Apply as needed" }
  ]
},
{
  id: 48,
  prescription: "metoprolol",
  alternatives: [
    { name: "Hawthorn Berry", source: "Berry", use: "Supports heart function", dosage: "250–500mg daily" },
    { name: "Garlic", source: "Bulb", use: "Lowers blood pressure", dosage: "600–1200mg daily" },
    { name: "Olive Leaf", source: "Leaf", use: "Improves circulation", dosage: "500mg twice daily" },
    { name: "CoQ10", source: "Enzyme supplement", use: "Supports cardiac energy", dosage: "100mg twice daily" },
    { name: "Motherwort", source: "Leaf", use: "Calms heart rhythm", dosage: "300–600mg daily" }
  ]
},
{
  id: 49,
  prescription: "azathioprine",
  alternatives: [
    { name: "Curcumin", source: "Turmeric root", use: "Anti-inflammatory for autoimmune conditions", dosage: "500mg twice daily" },
    { name: "Boswellia", source: "Resin", use: "Reduces inflammation", dosage: "300mg twice daily" },
    { name: "Omega-3", source: "Fish oil", use: "Modulates immune response", dosage: "1000mg daily" },
    { name: "Green Tea Extract", source: "Leaves", use: "Antioxidant immune support", dosage: "250–500mg daily" },
    { name: "Reishi Mushroom", source: "Fungus", use: "Immune modulation", dosage: "1000–2000mg daily" }
  ]
},
{
  id: 50,
  prescription: "lamotrigine",
  alternatives: [
    { name: "Magnesium Threonate", source: "Mineral compound", use: "Supports brain function", dosage: "1000–2000mg daily" },
    { name: "GABA", source: "Neurotransmitter supplement", use: "Calms neural activity", dosage: "250–750mg daily" },
    { name: "L-Theanine", source: "Green tea", use: "Promotes calm focus", dosage: "100–200mg daily" },
    { name: "Ashwagandha", source: "Root", use: "Balances mood and stress", dosage: "300–600mg daily" },
    { name: "Rhodiola Rosea", source: "Root", use: "Supports emotional resilience", dosage: "200–400mg daily" }
  ]
},
{
  id: 51,
  prescription: "tiotropium",
  alternatives: [
    { name: "Mullein Leaf", source: "Leaf", use: "Supports lung function", dosage: "1–2 cups tea daily" },
    { name: "Lobelia", source: "Herb", use: "Bronchodilator effect", dosage: "50–100mg daily" },
    { name: "Thyme", source: "Leaf", use: "Clears respiratory tract", dosage: "1 tsp dried herb in tea" },
    { name: "Licorice Root", source: "Root", use: "Soothes airways", dosage: "200–400mg daily" },
    { name: "Elecampane", source: "Root", use: "Expels mucus", dosage: "500mg twice daily" }
  ]
},
{
  id: 52,
  prescription: "pioglitazone",
  alternatives: [
    { name: "Berberine", source: "Plant alkaloid", use: "Improves insulin sensitivity", dosage: "500mg twice daily" },
    { name: "Cinnamon", source: "Bark", use: "Lowers blood sugar", dosage: "1000–2000mg daily" },
    { name: "Bitter Melon", source: "Fruit", use: "Reduces glucose levels", dosage: "500mg twice daily" },
    { name: "Fenugreek", source: "Seed", use: "Improves glucose tolerance", dosage: "5–10g daily" },
    { name: "Alpha Lipoic Acid", source: "Antioxidant", use: "Enhances insulin function", dosage: "300–600mg daily" }
  ]
},
{ 
  id: 53,
  prescription: "clonidine",
  alternatives: [
    { name: "Valerian Root", source: "Root", use: "Reduces blood pressure and anxiety", dosage: "400–900mg before bed" },
    { name: "Passionflower", source: "Flower", use: "Calms nervous system", dosage: "250–500mg daily" },
    { name: "Magnesium", source: "Mineral", use: "Supports vascular relaxation", dosage: "200–400mg daily" },
    { name: "Lemon Balm", source: "Leaf", use: "Mild sedative", dosage: "300–500mg daily" },
    { name: "CBD Oil", source: "Cannabis extract", use: "Reduces anxiety and blood pressure", dosage: "10–25mg daily" }
  ]
},
{
  id: 54,
  prescription: "methylphenidate",
  alternatives: [
    { name: "Ginkgo Biloba", source: "Leaf", use: "Improves attention span", dosage: "120mg daily" },
    { name: "Gotu Kola", source: "Leaf", use: "Enhances mental clarity", dosage: "300mg daily" },
    { name: "Green Oat Extract", source: "Oat tops", use: "Calms hyperactivity", dosage: "1 tsp tincture daily" },
    { name: "L-Tyrosine", source: "Amino acid", use: "Supports dopamine", dosage: "500mg before tasks" },
    { name: "Mucuna Pruriens", source: "Seed", use: "Boosts focus", dosage: "250mg daily" }
  ]
},
{
  id: 55,
  prescription: "metoprolol",
  alternatives: [
    { name: "Hawthorn Berry", source: "Fruit", use: "Supports heart rhythm", dosage: "250mg 2x daily" },
    { name: "Motherwort", source: "Leaf", use: "Calms heart rate", dosage: "300mg daily" },
    { name: "Celery Seed Extract", source: "Seed", use: "Lowers blood pressure", dosage: "150mg daily" },
    { name: "Reishi Mushroom", source: "Fungus", use: "Cardiovascular support", dosage: "500mg daily" },
    { name: "Olive Leaf", source: "Leaf", use: "Improves circulation", dosage: "500mg daily" }
  ]
},

{
  id: 56,
  prescription: "modafinil",
  alternatives: [
    { name: "Rhodiola Rosea", source: "Root", use: "Boosts mental stamina", dosage: "200–400mg in the morning" },
    { name: "Lion’s Mane", source: "Mushroom", use: "Supports cognitive function", dosage: "500mg daily" },
    { name: "Yerba Mate", source: "Leaf", use: "Natural stimulant", dosage: "1 cup tea in morning" },
    { name: "Panax Ginseng", source: "Root", use: "Enhances alertness", dosage: "200mg daily" },
    { name: "Bacopa Monnieri", source: "Herb", use: "Improves memory", dosage: "300mg daily" }
  ]
}


   
  ]
export default remedies