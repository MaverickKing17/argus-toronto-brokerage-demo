export interface PropertySpec {
  id: string;
  label: string;
  value: string;
  subtext?: string;
  iconName: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  category: 'interior' | 'views' | 'terrace' | 'amenities' | 'floorplan';
  url: string;
  aspectRatio?: string;
}

export interface AmenityItem {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent' | 'system';
  content: string;
  timestamp: string;
  badge?: string;
  actionCard?: {
    type: 'calendar_confirmation';
    slot: string;
    broker: string;
    location: string;
  };
}

export interface NeighborhoodSpot {
  name: string;
  category: string;
  distance: string;
  description: string;
}

export interface BrokerInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  license: string;
  avatar: string;
}
