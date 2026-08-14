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
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: "living_lounge",
    title: "Private Lounge & Elevator Foyer",
    subtitle: "Direct elevator entrance with Italian white oak millwork",
    category: "interior",
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: "kitchen",
    title: "Gaggenau Chef's Kitchen",
    subtitle: "Calacatta Gold marble island, wine pillar & hidden butler's pantry",
    category: "interior",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: "terrace",
    title: "1,200 sq. ft. Private Heated Terrace",
    subtitle: "Outdoor fireplace, summer kitchen and south-facing city panorama",
    category: "terrace",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: "primary_suite",
    title: "Primary Master Suite",
    subtitle: "Private balcony access, dual boutique dressing closets & fireplace",
    category: "interior",
    url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: "primary_bath",
    title: "Spa Primary Ensuite",
    subtitle: "Freestanding soaking tub overlooking sunset, radiant heated marble floors",
    category: "interior",
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: "wine_cellar",
    title: "Climate Controlled Glass Wine Vault",
    subtitle: "Custom steel wine wall housing up to 200 reserve vintages",
    category: "amenities",
    url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1600"
  }
];

export const AMENITIES_LIST: AmenityItem[] = [
  {
    id: "concierge",
    category: "Services",
    title: "24/7 White-Glove Concierge & Porter",
    description: "Dedicated valet, luggage assistance, package vaulting, and private jet coordination assistance.",
    icon: "ShieldCheck"
  },
  {
    id: "elevator",
    category: "Security",
    title: "Direct Private Elevator Access",
    description: "Keycard-coded high-speed elevator opening exclusively into your private suite foyer.",
    icon: "Lock"
  },
  {
    id: "wine",
    category: "Luxury Feature",
    title: "Sommelier Glass Wine Vault",
    description: "Temperature & humidity-controlled glass vault housing 200 bottles with LED accent lighting.",
    icon: "Wine"
  },
  {
    id: "smart_home",
    category: "Technology",
    title: "Lutron HomeWorks Automation",
    description: "Integrated motor shade control, biometric entry, climate zones, and Bang & Olufsen sound.",
    icon: "Cpu"
  },
  {
    id: "spa_pool",
    category: "Building Amenities",
    title: "Private Wellness Club & Pool",
    description: "Saltwater infinity lap pool, hydrotherapy jet spa, Finnish sauna, and private massage rooms.",
    icon: "Waves"
  },
  {
    id: "parking_ev",
    category: "Parking",
    title: "3 Enclosed EV Charging Bays",
    description: "Private subterranean parking garage module with dual 240V hyper-chargers and detailing bay.",
    icon: "Zap"
  }
];

export const NEIGHBORHOOD_SPOTS: NeighborhoodSpot[] = [
  {
    name: "Four Seasons Hotel Toronto & Cafe Boulud",
    category: "Luxury Hotel & Dining",
    distance: "2 min walk (180m)",
    description: "World-class dining by Chef Daniel Boulud and ultra-luxury holistic spa wellness club."
  },
  {
    name: "Bloor Street 'Mink Mile' Boutiques",
    category: "High Fashion Shopping",
    distance: "3 min walk (250m)",
    description: "Flagship boutiques including Hermès, Chanel, Gucci, Louis Vuitton, and Tiffany & Co."
  },
  {
    name: "Royal Ontario Museum (ROM)",
    category: "Culture & Arts",
    distance: "6 min walk (500m)",
    description: "Canada's largest museum of art, culture and natural history featuring the iconic Crystal wing."
  },
  {
    name: "Sassafraz & ONE Restaurant",
    category: "Celebrity Dining",
    distance: "4 min walk (350m)",
    description: "Historic Yorkville landmark dining spots frequented by film festival stars and international elite."
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
