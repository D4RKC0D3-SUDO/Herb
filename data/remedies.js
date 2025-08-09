const remedies = [
  {
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
        prescription: "spironolactone",
        alternatives: [
          { name: "Dandelion Root", source: "Root", use: "Natural diuretic", dosage: "500mg twice daily" },
          { name: "Green Tea", source: "Leaves", use: "Reduces water retention", dosage: "2–3 cups daily" },
          { name: "Parsley Leaf", source: "Leaves", use: "Diuretic effect", dosage: "1 tsp extract or tea" },
          { name: "Corn Silk", source: "Maize silk", use: "Reduces fluid retention", dosage: "1–2g daily" },
          { name: "Nettle Leaf", source: "Leaf", use: "Supports kidney function", dosage: "1–2 cups tea daily" }
        ]
      }
      
    
   
  ]
  
  export default remedies
  