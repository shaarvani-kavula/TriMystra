export type ItemType = 'mantra' | 'yantra';

export type BreathingTechnique = {
  id: string;
  name: string;
  pattern: string;
  duration: string;
  steps: string[];
  purpose: string;
};

export type SacredItem = {
  id: string;
  type: ItemType;
  name: string;
  alternateNames?: string[];
  transliteration?: string;
  meaning: string;
  description: string;
  symbolism?: string;
  category: string;
  image: string;
  audio: string;
  associatedYantra: string;
  associatedMantra: string;
  breathing: BreathingTechnique;
};