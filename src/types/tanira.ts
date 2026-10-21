export interface NavItem {
  label: string;
  href: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  badge: string;
  isPrimary: boolean;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  characteristics: {
    label: string;
    value: string;
  }[];
  usageIdeas: string[];
  storageTip: string;
  ordering: {
    availableForDirectOrder: boolean;
    availabilityNote: string;
    unitLabel?: string;
    estimatedPrice?: number;
  };
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  localTerm: string;
  description: string;
  keyDetail: string;
}

export interface PurityAdvantage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
}

export interface ComparisonRow {
  aspect: string;
  authenticAren: string;
  mixedSugar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LocationInfo {
  title: string;
  region: string;
  coordinatesLabel: string;
  latitude: number;
  longitude: number;
  googleMapsUrl: string;
  embedUrl: string;
  description: string;
}
