import type { SacredItem } from '../types/sacred';

export const sacredData: SacredItem[] = [
  {
    id: 'om',
    type: 'mantra',
    name: 'Om',
    alternateNames: ['Aum'],
    transliteration: 'Om',
    meaning: 'The primordial sound associated with consciousness, unity, and inner stillness.',
    description:
      'Om is a foundational mantra used in meditation and spiritual practice to center the mind and calm the breath.',
    symbolism: 'Represents the totality of existence: waking, dreaming, deep sleep, and pure awareness.',
    category: 'calm',
    image: '/images/om-symbol.png',
    audio: '/audio/om.mp3',
    associatedYantra: 'Om Symbol',
    associatedMantra: 'Om',
    breathing: {
      id: 'equal-breathing',
      name: 'Equal Ratio Breathing',
      pattern: '4-4-4-4',
      duration: '3–5 minutes',
      purpose: 'Balances the nervous system and improves focus.',
      steps: [
        'Inhale gently through the nose for 4 counts.',
        'Hold the breath for 4 counts without strain.',
        'Exhale slowly through the nose for 4 counts.',
        'Pause for 4 counts and repeat.'
      ]
    }
  },
  {
    id: 'sri-yantra',
    type: 'yantra',
    name: 'Sri Yantra',
    meaning: 'A sacred geometric diagram associated with harmony, divine order, and contemplative awareness.',
    description:
      'Sri Yantra is used as a visual meditation aid and is often linked with spiritual expansion, balance, and subtle concentration.',
    symbolism: 'Interlocking triangles symbolize the union of masculine and feminine energies.',
    category: 'focus',
    image: '/images/sri-yantra.png',
    audio: '/audio/lalitha-sahasranam.mp3',
    associatedYantra: 'Sri Yantra',
    associatedMantra: 'Lalitha Sahasranam',
    breathing: {
      id: 'soft-rhythm-breathing',
      name: 'Soft Rhythm Breathing',
      pattern: '4 in / 4 out',
      duration: '40–50 minutes',
      purpose: 'Balances attention and supports meditative visual concentration.',
      steps: [
        'Relax the jaw, shoulders, and face.',
        'Inhale for 4 counts through the nose.',
        'Exhale for 4 counts through the nose.',
        'Keep the breath soft and even while gazing at the yantra.'
      ]
    }
  },
];