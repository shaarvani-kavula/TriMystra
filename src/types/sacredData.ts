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
    image: '/images/om-symbol.jpg',
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
    id: 'gayatri-mantra',
    type: 'mantra',
    name: 'Gayatri Mantra',
    alternateNames: ['Savitri Mantra'],
    transliteration: 'Om Bhur Bhuvah Svah...',
    meaning: 'A prayer for illumination, wisdom, and spiritual clarity.',
    description:
      'Gayatri Mantra is traditionally chanted for insight, purity of thought, and awakened intelligence.',
    symbolism: 'Associated with light, divine wisdom, and the radiance of higher consciousness.',
    category: 'clarity',
    image: '/images/sri-yantra.jpg',
    audio: '/audio/gayatri.mp3',
    associatedYantra: 'Sri Yantra',
    associatedMantra: 'Gayatri Mantra',
    breathing: {
      id: 'diaphragmatic-breathing',
      name: 'Deep Diaphragmatic Breathing',
      pattern: '5 in / 5 out',
      duration: '5–7 minutes',
      purpose: 'Encourages calm concentration and deeper vocal resonance during chanting.',
      steps: [
        'Sit upright and relax your shoulders.',
        'Inhale deeply into the belly for 5 counts.',
        'Exhale slowly for 5 counts.',
        'Continue with a steady rhythm while chanting softly or mentally.'
      ]
    }
  },
  {
    id: 'shreem',
    type: 'mantra',
    name: 'Shreem',
    alternateNames: ['Shreem Bija'],
    transliteration: 'Shreem',
    meaning: 'A bija mantra associated with abundance, beauty, harmony, and Lakshmi energy.',
    description:
      'Shreem is often used in devotional and meditative practice to cultivate receptivity, gratitude, and prosperity consciousness.',
    symbolism: 'Represents nourishment, fullness, grace, and spiritual abundance.',
    category: 'abundance',
    image: '/images/lakshmi-yantra.jpg',
    audio: '/audio/shreem.mp3',
    associatedYantra: 'Lakshmi Yantra',
    associatedMantra: 'Shreem',
    breathing: {
      id: 'heart-centered-breathing',
      name: 'Heart-Centered Breathing',
      pattern: '4 in / 6 out',
      duration: '4–6 minutes',
      purpose: 'Supports emotional ease, devotional focus, and soft relaxation.',
      steps: [
        'Place one hand over the heart space.',
        'Inhale gently for 4 counts.',
        'Exhale softly for 6 counts.',
        'Repeat while chanting or listening with awareness in the chest area.'
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
    image: '/images/sri-yantra.jpg',
    audio: '/audio/gayatri.mp3',
    associatedYantra: 'Sri Yantra',
    associatedMantra: 'Gayatri Mantra',
    breathing: {
      id: 'alternate-nostril',
      name: 'Alternate Nostril Breathing',
      pattern: 'Alternating cycles',
      duration: '3–5 minutes',
      purpose: 'Balances attention and supports meditative visual concentration.',
      steps: [
        'Close the right nostril and inhale through the left.',
        'Close the left nostril and exhale through the right.',
        'Inhale through the right nostril.',
        'Close the right nostril and exhale through the left. Repeat gently.'
      ]
    }
  },
  {
    id: 'lakshmi-yantra',
    type: 'yantra',
    name: 'Lakshmi Yantra',
    meaning: 'A yantra associated with prosperity, beauty, auspiciousness, and devotional alignment.',
    description:
      'Lakshmi Yantra is used as a visual focus for practices related to gratitude, abundance, and graceful inward attention.',
    symbolism: 'Represents fullness, auspicious growth, and sacred receptivity.',
    category: 'abundance',
    image: '/images/lakshmi-yantra.jpg',
    audio: '/audio/shreem.mp3',
    associatedYantra: 'Lakshmi Yantra',
    associatedMantra: 'Shreem',
    breathing: {
      id: 'soft-rhythm-breathing',
      name: 'Soft Rhythm Breathing',
      pattern: '4 in / 4 out',
      duration: '4–5 minutes',
      purpose: 'Builds gentle rhythm and steadiness for devotional concentration.',
      steps: [
        'Relax the jaw, shoulders, and face.',
        'Inhale for 4 counts through the nose.',
        'Exhale for 4 counts through the nose.',
        'Keep the breath soft and even while gazing at the yantra.'
      ]
    }
  },
  {
    id: 'om-symbol',
    type: 'yantra',
    name: 'Om Symbol',
    meaning: 'A visual form of the sacred syllable Om used for meditation and centering.',
    description:
      'The Om symbol can serve as a focal point in meditation, especially when combined with chanting and steady breathing.',
    symbolism: 'Represents sound as form and awareness taking visual expression.',
    category: 'calm',
    image: '/images/om-symbol.jpg',
    audio: '/audio/om.mp3',
    associatedYantra: 'Om Symbol',
    associatedMantra: 'Om',
    breathing: {
      id: 'box-breathing',
      name: 'Box Breathing',
      pattern: '4-4-4-4',
      duration: '3–4 minutes',
      purpose: 'Improves steadiness, grounding, and meditative rhythm.',
      steps: [
        'Inhale through the nose for 4 counts.',
        'Hold for 4 counts.',
        'Exhale for 4 counts.',
        'Pause for 4 counts before the next inhale.'
      ]
    }
  }
];