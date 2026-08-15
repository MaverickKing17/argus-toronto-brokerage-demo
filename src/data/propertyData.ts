import { GalleryPhoto, PropertySpec, AmenityItem, NeighborhoodSpot, BrokerInfo, ChatMessage } from '../types';

export const BROKER_INFO: BrokerInfo = {
  name: "Victoria Sterling",
  title: "Senior Managing Partner & Luxury Specialist",
  phone: "+1 (416) 928-8800",
  email: "v.sterling@yorkvilleluxury.com",
  license: "RECO #4892011",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
};

export const PROPERTY_DETAILS = {
  title: "The Yorkville Penthouse Collection",
  address: "188 Bay Street, Suite 5200, Yorkville, Toronto, ON M5S 3A7",
  priceCAD: 4500000,
  priceUSD: 3320000,
  status: "Exclusive Active Listing",
  buildingName: "The Grand Yorkville Residences",
  yearBuilt: 2024,
  sqftInterior: 3850,
  sqftTerrace: 1200,
  bedrooms: 3,
  bathrooms: 4,
  parkingSpaces: 3,
  maintenanceFeeMonthly: 2850,
  propertyTaxAnnual: 34200,
  tagline: "Unrivaled Architectural Luxury Above Yorkville's Golden Mile",
  description: "Occupying the entire 52nd floor, this trophy residence represents the pinnacle of luxury living in Toronto's premier neighborhood. Designed by world-renowned interior architects, the suite features direct private elevator access into a grand marble foyer, 10-foot floor-to-ceiling glass wrapping around 270 degrees of panoramic city views, a custom Gaggenau chef's kitchen, and a 1,200 sq. ft. heated private terrace facing the CN Tower and Lake Ontario."
};

export const PROPERTY_SPECS: PropertySpec[] = [
  {
    id: "price",
    label: "Offered Price",
    value: "$4,500,000 CAD",
    subtext: "~$1,168 / sq.ft",
    iconName: "DollarSign"
  },
  {
    id: "beds_baths",
    label: "Bedrooms & Baths",
    value: "3 Beds · 4 Baths",
    subtext: "All ensuite + powder room",
    iconName: "Bed"
  },
  {
    id: "elevator",
    label: "Private Elevator",
    value: "Direct-to-Suite",
    subtext: "Biometric keycard security",
    iconName: "ArrowUpRight"
  },
  {
    id: "views",
    label: "Panoramic Views",
    value: "270° Skyline & Lake",
    subtext: "CN Tower, Yorkville & Sunset",
    iconName: "Compass"
  },
  {
    id: "space",
    label: "Total Living Space",
    value: "5,050 sq. ft.",
    subtext: "3,850 sq.ft int + 1,200 sq.ft terrace",
    iconName: "Maximize2"
  },
  {
    id: "parking",
    label: "Private Parking",
    value: "3 EV Bay Stalls",
    subtext: "Private secure garage room",
    iconName: "Car"
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "hero_penthouse",
    title: "Grand Living Suite",
    subtitle: "Floor-to-ceiling glass overlooking Toronto skyline & CN Tower",
    category: "interior",
    url: "https://i.ibb.co/GvSZs7mt/Chat-GPT-Image-Aug-14-2026-04-14-11-PM.png"
  },
  {
    id: "grand_salon",
    title: "Grand Salon & Living Vista",
    subtitle: "270° floor-to-ceiling panoramic glass, custom Calacatta fireplace & skyline vista",
    category: "interior",
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "kitchen",
    title: "Poliform Chef & Wine Gallery",
    subtitle: "Gaggenau 400 series suite, waterfall Calacatta island & sommelier wine vault",
    category: "interior",
    url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "primary_bath",
    title: "Primary Wing & Spa Bath",
    subtitle: "Boffi freestanding tub overlooking sunset horizon, heated bookmatched marble floors",
    category: "interior",
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "terrace",
    title: "1,200 Sq. Ft. Private Heated Terrace",
    subtitle: "High-rise glass balcony with integrated radiant heaters, gas fire table & Hestan grill",
    category: "terrace",
    url: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "primary_suite",
    title: "Primary Master Suite & Dressing Gallery",
    subtitle: "Private balcony access, Rimadesio glass dressing suite & biometric safe",
    category: "interior",
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "wine_cellar",
    title: "Climate-Controlled Glass Wine Vault",
    subtitle: "Custom architectural temperature-controlled steel and glass wine vault housing 200 reserve vintages",
    category: "amenities",
    url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=80"
  }
];

export const AMENITIES_LIST: AmenityItem[] = [
  {
    id: "concierge",
    category: "Services",
    title: "24/7 White-Glove Concierge & Porter",
    description: "Dedicated valet, luggage assistance, package vaulting, and private jet coordination assistance.",
    icon: "ShieldCheck",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "elevator",
    category: "Security",
    title: "Direct Private Elevator Access",
    description: "Keycard-coded high-speed elevator opening exclusively into your private suite foyer.",
    icon: "Lock",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "wine",
    category: "Luxury Feature",
    title: "Sommelier Glass Wine Vault",
    description: "Temperature & humidity-controlled glass vault housing 200 bottles with LED accent lighting.",
    icon: "Wine",
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "smart_home",
    category: "Technology",
    title: "Lutron HomeWorks Automation",
    description: "Integrated motor shade control, biometric entry, climate zones, and Bang & Olufsen sound.",
    icon: "Cpu",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "spa_pool",
    category: "Building Amenities",
    title: "Private Wellness Club & Pool",
    description: "Saltwater infinity lap pool, hydrotherapy jet spa, Finnish sauna, and private massage rooms.",
    icon: "Waves",
    imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "parking_ev",
    category: "Parking",
    title: "3 Enclosed EV Charging Bays",
    description: "Private subterranean parking garage module with dual 240V hyper-chargers and detailing bay.",
    icon: "Zap",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80"
  }
];

export const NEIGHBORHOOD_SPOTS: NeighborhoodSpot[] = [
  {
    name: "Four Seasons Hotel Toronto & Cafe Boulud",
    category: "Luxury Hotel & Dining",
    distance: "2 min walk (180m)",
    description: "World-class dining by Chef Daniel Boulud and ultra-luxury holistic spa wellness club.",
    imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Bloor Street 'Mink Mile' Boutiques",
    category: "High Fashion Shopping",
    distance: "3 min walk (250m)",
    description: "Flagship boutiques including Hermès, Chanel, Gucci, Louis Vuitton, and Tiffany & Co.",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Royal Ontario Museum (ROM)",
    category: "Culture & Arts",
    distance: "6 min walk (500m)",
    description: "Canada's largest museum of art, culture and natural history featuring the iconic Crystal wing.",
    imageUrl: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sassafraz & ONE Restaurant",
    category: "Celebrity Dining",
    distance: "4 min walk (350m)",
    description: "Historic Yorkville landmark dining spots frequented by film festival stars and international elite.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  }
];

// Required EXACT pre-loaded dialog script for prompt compliance
export const REQUIRED_DEMO_SCRIPT: ChatMessage[] = [
  {
    id: "demo_msg_1",
    sender: "user",
    content: "Hi, is the penthouse on Bay Street still available for viewing this weekend?",
    timestamp: "10:42 AM"
  },
  {
    id: "demo_msg_2",
    sender: "agent",
    content: "Hello! Yes, it is. To help coordinate with our senior broker, what is your preferred timeframe and target budget?",
    timestamp: "10:42 AM"
  },
  {
    id: "demo_msg_3",
    sender: "user",
    content: "Looking around $4M+ and can view this Saturday.",
    timestamp: "10:43 AM"
  },
  {
    id: "demo_msg_4",
    sender: "agent",
    content: "Wonderful! You're qualified. I've secured a viewing slot for this Saturday at 2:00 PM and synced it with our calendar. You'll receive a confirmation shortly.",
    timestamp: "10:43 AM",
    badge: "VIP Slot Confirmed",
    actionCard: {
      type: "calendar_confirmation",
      slot: "Saturday, 2:00 PM EST",
      broker: "Victoria Sterling, Senior Managing Partner",
      location: "188 Bay St, Penthouse Suite 5200, Yorkville"
    }
  }
];
