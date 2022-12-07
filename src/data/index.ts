
import { Map, Chapter, Character, Installment, Series, MediaType, DataBundle } from 'character-journey-map/models';
import map from '../assets/MAP.png';

const mapData: Map = {
  image: map,
  dimensions: [1873 , 3458 ],
  source: 'https://fma.fandom.com/wiki/Amestris?file=MAP.png'
};

// <> denotes an appearance, not destination
// ! denotes destination, not an appearance
// * denotes unconfirmed path destination
const part1: Chapter[] = [
  { altName: `Fullmetal Alchemist`, chapter: 1 },
  // Central City, <Liore>
  { altName: `The First Day`, chapter: 2 },
  // Edward | Alphonse: Central City - Liore, Roy: Central City - !East City, <Resembool>
  { altName: `City of Heresy`, chapter: 3 },
  // Edward | Alphonse: Liore
  { altName: `An Alchemist's Anguish`, chapter: 4 },
  // Edward | Alphonse: !Liore - East City, <Central City>
  { altName: `Rain of Sorrows`, chapter: 5 },
  // Edward | Alphonse, Roy: East City, <Liore>
  { altName: `Road of Hope`, chapter: 6 },
  // Edward | Alphonse: East City - Resembool - !Central City, Roy: East City
  { altName: `Hidden Truths`, chapter: 7 },
  // Edward | Alphonse: Central City, Roy: East City
  { altName: `The Fifth Laboratory`, chapter: 8 },
  // Edward | Alphonse: Central City
  { altName: `Created Feelings`, chapter: 9 },
  // Edward | Alphonse: Central City, Winry: Resembool - Central City, East City
  { altName: `Separate Destinations`, chapter: 10 },
  // Edward | Alphonse | Winry: Central City - !Rush Valley, Roy: East City - Central City
  { altName: `Miracle at Rush Valley`, chapter: 11 },
  // Edward | Alphonse | Winry: Rush Valley
  { altName: `One Is All, All Is One`, chapter: 12 },
  // Edward | Alphonse: !Rush Valley - Dublith, <Resembool>
  { altName: `Beasts of Dublith`, chapter: 13 },
  // Edward | Alphonse: Dublith, Roy: !Central City - East City
];

const part2: Chapter[] = [
  { altName: `Those Who Lurk Underground`, chapter: 14 },
  // Edward | Alphonse: Dublith, Roy: !East City - Central City
  { altName: `The Envoy From the East`, chapter: 15 },
  // Edward | Alphonse: !Dublith - Rush Valley, Winry: Rush Valley, Mei: East City - !Central City, Roy: Central City, Ling: !Xing - !Xerxes - Rush Valley
  { altName: `Footsteps of a Comrade-in-Arms`, chapter: 16 },
  // Edward | Alphonse | Winry | Ling: !Rush Valley - Central City, Roy: Central City
  { altName: `Cold Flame`, chapter: 17 },
  // Edward | Alphonse | Winry | Roy | Ling: Central City
  { altName: `The Arrogant Palm of a Small Human`, chapter: 18 },
  // Edward: Central City - Resembool - Xerxes, Alphonse | Winry | Roy | Ling: Central City
  { altName: `Death of the Undying`, chapter: 19 },
  // Edward: !Xerxes - Resembool, Alphonse | Winry | Roy | Ling: Central City
  { altName: `Father Before the Grave`, chapter: 20 },
  // Edward: Resembool - Central City, Alphonse | Winry | Roy | Ling: Central City, <Dublith>
  { altName: `Advance of the Fool`, chapter: 21 },
  // Edward | Alphonse | Winry | Roy | Ling: Central City, <Nameless Village>
  { altName: `Backs in the Distance`, chapter: 22 },
  // Edward | Alphonse | Winry | Roy | Ling: Central City, <Ishval>
  { altName: `Girl On the Battlefield`, chapter: 23 },
  // Edward | Alphonse | Roy | Ling | Mei: Central City, Winry: Central City - !Rush Valley
  { altName: `Inside the Belly`, chapter: 24 },
  // Edward | Alphonse | Roy | Ling | Mei: Central City
  { altName: `Doorway of Darkness`, chapter: 25 },
  // Edward | Alphonse | Roy | Ling | Mei: Central City, <Ishval>
  { altName: `Reunion`, chapter: 26 },
  // Edward | Alphonse | Roy | Ling | Mei: Central City
];

const part3: Chapter[] = [
  { altName: `Interlude Party`, chapter: 27 },
  // <Resembool>
  { altName: `Father`, chapter: 28 },
  // Edward | Alphonse | Roy | Ling | Mei: Central City
  { altName: `Struggle of the Fool`, chapter: 29 },
  // Edward | Alphonse | Roy | Ling | Mei: Central City
  { altName: `The Ishvalan War of Extermination`, chapter: 30 },
  // Edward | Alphonse | Roy | Ling | Mei: Central City, <Ishval>
  { altName: `The 520 Cens Promise`, chapter: 31 },
  // Edward | Alphonse | Roy | Ling: Central City, Mei: Central City - !East City
  { altName: `The Führer's Son`, chapter: 32 },
  // Roy | Ling: Central City, Mei: !East City - !Northern Wilderness, Edward | Alphonse: Central City - !North City
  { altName: `The Northern Wall of Briggs`, chapter: 33 },
  // Mei: Northern Wilderness - Briggs Mountain Range (Scar's Hut), Edward | Alphonse: North City - Fort Briggs, Winry: Rush Valley
  { altName: `Ice Queen`, chapter: 34 },
  // Edward | Alphonse: Fort Briggs
  { altName: `The Shape of This Country`, chapter: 35 },
  // Mei: Briggs Mountain Range (Scar's Hut), Edward | Alphonse: Fort Briggs, <North City>
  { altName: `Family Portrait`, chapter: 36 },
  // Mei: Briggs Mountain Range (Scar's Hut) - Baschool, Edward | Alphonse: Fort Briggs, Winry: Rush Valley - Central City - North City - Fort Briggs, Roy: Central City, <Resembool>
  { altName: `The First Homunculus`, chapter: 37 },
  // Edward | Alphonse | Winry: Fort Briggs, Roy: Central City
  { altName: `Conflict at Baschool`, chapter: 38 },
  // Edward | Alphonse | Winry: !Fort Briggs - Baschool, Mei: Baschool, Roy: Central City, <Fort Briggs>
  { altName: `Daydream`, chapter: 39 },
  // Edward | Alphonse | Winry | Mei: Baschool, <Central City>
];

const part4: Chapter[] = [
  { altName: `The Dwarf in the Flask`, chapter: 40 },
  // Edward | Alphonse | Winry | Mei: Baschool, Roy: Central City, <Xerxes>, <Liore>
  { altName: `The Abyss`, chapter: 41 },
  // Edward: Baschool, Alphonse | Winry | Mei: Baschool - Asbec
  { altName: `Signs of a Counteroffensive`, chapter: 42 },
  // Alphonse | Winry | Mei: Asbec, <Baschool>, <Liore>, <Fort Briggs>
  { altName: `Bite of the Ant`, chapter: 43 },
  // Alphonse | Winry: Asbec - Liore, Mei: Asbec - !Youswell, <Fort Briggs>, <Dublith>, <Central City>
  { altName: `Revving at Full Throttle`, chapter: 44 },
  // Alphonse | Winry: Liore, Ling: Central City, Edward: !Baschool - North City, 
  { altName: `The Promised Day`, chapter: 45 },
  // Alphonse | Winry: Liore, Ling: Central City, Mei: Youswell - !Central City, <Dublith>, <North City>, <Fort Briggs>,
  { altName: `Looming Shadows`, chapter: 46 },
  // Winry: !Liore - Resembool, Edward: !North City - Resembool, Alphonse: !Liore - Central City, Ling: !Central City - Resembool, <Liore>, <East City>, Roy: Central City, 
  { altName: `Emissary of Darkness`, chapter: 47 },
  // Alphonse | Roy: Central City, Edward | Ling: Resembool - Kanama
  { altName: `The Oath in the Tunnel`, chapter: 48 },
  // Alphonse | Edward | Ling: Kanama, Roy: Central City
  { altName: `Filial Affection`, chapter: 49 },
  // Alphonse | Edward | Ling: Kanama, Roy: Central City
  { altName: `Upheaval in Central`, chapter: 50 },
  // Alphonse: Kanama, Edward | Ling: Kanama - Central City, Roy | Mei: Central City
  { altName: `The Immortal Legion`, chapter: 51 },
  // Alphonse: Kanama, Edward | Ling | Roy | Mei: Central City
  { altName: `Combined Strength`, chapter: 52 },
  // Alphonse: Kanama, Edward | Ling | Roy | Mei: Central City
];

const part5: Chapter[] = [
  { altName: `Flame of Vengeance`, chapter: 53 },
  // Edward | Ling | Roy | Mei: Central City
  { altName: `Beyond the Inferno`, chapter: 54 },
  // Edward | Ling | Roy | Mei: Central City, <Ishval>
  { altName: `The Adults' Way of Life`, chapter: 55 },
  // Alphonse: !Kanama - Central City, Edward | Ling | Roy | Mei: Central City
  { altName: `The Return of the Führer`, chapter: 56 },
  // Alphonse | Edward | Ling | Roy | Mei: Central City
  { altName: `Eternal Leave`, chapter: 57 },
  // Alphonse | Edward | Ling | Roy | Mei: Central City
  { altName: `Sacrifices`, chapter: 58 },
  // Alphonse | Edward | Ling | Roy | Mei: Central City
  { altName: `Lost Light`, chapter: 59 },
  // Alphonse | Edward | Ling | Roy | Mei: Central City
  { altName: `Eye of Heaven, Gateway of Earth`, chapter: 60 },
  // Alphonse | Edward | Ling | Roy | Mei: Central City
  { altName: `He Who Would Swallow God`, chapter: 61 },
  // Alphonse | Edward | Ling | Roy | Mei: Central City, <Resembool>, 
  { altName: `A Fierce Counterattack`, chapter: 62 },
  // Alphonse | Edward | Ling | Roy | Mei: Central City
  { altName: `The Other Side of the Gateway`, chapter: 63 },
  // Alphonse | Edward | Ling | Roy | Mei: Central City, <Resembool>
  { altName: `Journey's End`, chapter: 64 },
  // Alphonse | Edward: Central City - Resembool, Ling | Mei: Central City - !Xing, Roy: Central City
];

export const characters: Character[] =[
  {
    name: 'Edward',
    image: 'https://static.wikia.nocookie.net/fma/images/0/08/213254_1407532169190_full.png',
    color: 'rgb(225,175,60)',
    wikiLink: 'https://fma.fandom.com/wiki/Edward_Elric'
  },
  {
    name: 'Alphonse',
    image: 'https://static.wikia.nocookie.net/fma/images/5/51/Avatar_alphonse.png',
    color: 'rgb(153,8,8)',
    wikiLink: 'https://fma.fandom.com/wiki/Alphonse_Elric'
  },
  {
    name: 'Winry',
    image: 'https://static.wikia.nocookie.net/fma/images/9/90/Avatar_winry.png',
    color: 'rgb(110,150,115)',
    wikiLink: 'https://fma.fandom.com/wiki/Winry_Rockbell'
  },

  {
    name: 'Roy',
    image: 'https://static.wikia.nocookie.net/fma/images/b/bb/Avatar_roy.png',
    color: 'rgb(43,60,107)',
    wikiLink: 'https://fma.fandom.com/wiki/Roy_Mustang'
  },
  {
    name: 'Ling',
    image: 'https://static.wikia.nocookie.net/fma/images/b/b5/Ling-profile.png',
    color: 'rgb(125,60,150)',
    wikiLink: 'https://fma.fandom.com/wiki/Ling_Yao'
  },
  {
    name: 'Mei',
    image: 'https://static.wikia.nocookie.net/fma/images/b/b3/68082-meichang.jpg',
    color: 'rgb(200,130,200)',
    wikiLink: 'https://fma.fandom.com/wiki/Mei_Chang'
  },
];

enum CharacterIndex {
  'Edward' = 0,
  'Alphonse' = 1,
  'Winry' = 2,
  'Roy' = 3,
  'Ling' = 4,
  'Mei' = 5
}

enum InstallmentIndex {
  'part1' = 0,
  'part2' = 1,
  'part3' = 2,
  'part4' = 3,
  'part5' = 4,
}

export const installments: Installment[] = [
  {
    title: 'Part One',
    type: MediaType.Television,
    image: 'https://static.wikia.nocookie.net/fma/images/4/42/Brotherhood_Part_1.jpg',
    chapters: part1
  },
  {
    title: 'Part Two',
    type: MediaType.Television,
    image: 'https://static.wikia.nocookie.net/fma/images/9/97/FullmetalBrotherhood2.jpg',
    chapters: part2
  },
  {
    title: 'Part Three',
    type: MediaType.Television,
    image: 'https://static.wikia.nocookie.net/fma/images/d/d1/Fullmetal_Alchemist_Brotherhood_DVD_3.jpg',
    chapters: part3
  },
  {
    title: 'Part Four',
    type: MediaType.Television,
    image: 'https://static.wikia.nocookie.net/fma/images/5/51/Fullmetal_Alchemist_Brotherhood_Vol_4.jpg',
    chapters: part4
  },
  {
    title: 'Part Five',
    type: MediaType.Television,
    image: 'https://static.wikia.nocookie.net/fma/images/f/f8/Fullmetal_Alchemist_Brotherhood_Vol_5.png',
    chapters: part5
  },
];

export const seriesData: Series = {
  title: 'Fullmetal Alchemist: Brotherhood',
  stub: 'fullmetalAlchemist',
  image: 'https://static.wikia.nocookie.net/starwars/images/c/c8/SW_franchise_mural_OT.jpg',
  timeframe: '1913 - 1915',
  description: `The Galactic Civil War, also referred to as the revolution or the rebellion, was a galactic power struggle in which the Alliance to Restore the Republic waged a rebellion against the ruling Galactic Empire in an attempt to restore democratic rule to the galaxy.`,
  color: 'rgb(139,53,29)',
  backgroundColor: 'rgb(216,192,155)',
  installments: installments,
  characters: characters
};

export const DATA: DataBundle = {
  ...seriesData,
  map: mapData,
  markers: [
    {
      title: 'Central City',
      coordinates: [976, 1742.5],
      type: 'city',
      image: 'https://static.wikia.nocookie.net/fma/images/d/d1/Centralcommand.png',
      appearances: {
        [InstallmentIndex.part1 + 1]: [
          1, 2, 4, 7, 8, 9, 10,
        ].map(i => (part1[part1.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part2 + 1]: [
          14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
        ].map(i => (part2[part2.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part3 + 1]: [
          28, 29, 30, 31, 32, 36, 37, 38, 39,
        ].map(i => (part3[part3.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part4 + 1]: [
          40, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part5 + 1]: [
          53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64
        ].map(i => (part5[part5.findIndex(c => (c.chapter === i))])),
      },
      description: `Central City is the official capital and also the seat of government in Amestris. The National Central Library, Central Command, the 5 National Laboratories, and Amestris' Parliament are all located in Central. Aside from its symbol as a military headquarters, Central is also a bustling metropolis and arguably Amestris' largest city, complete with nearly everything Amestrian society has to offer as well as a lasting and rarely disturbed sense of peace created by its proximity to the government's imposing presence.`,
      wikiLink: 'https://fma.fandom.com/wiki/Central_City',
      confirmed: true
    },
    {
      title: 'Liore',
      coordinates: [1186.5, 2515],
      type: 'town',
      image: 'https://static.wikia.nocookie.net/fma/images/4/4c/Lior0.png',
      appearances: {
        [InstallmentIndex.part1 + 1]: [
          1, 2, 3, 5, 
        ].map(i => (part1[part1.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part4 + 1]: [
          40, 42, 43, 45, 46
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: `Liore is one of the first places visited by the Elric brothers in their quest for the Philosopher's Stone. The State Military's lack of oversight in Liore, combined with the strong religious sense of the citizens (in this sense Liore is similar to Ishval), made it possible for an ambitious man named Father Cornello to institute a sort of theocratic government with himself as the unquestioned ruler.`,
      wikiLink: 'https://fma.fandom.com/wiki/Reole',
      confirmed: true
    },
    {
      title: 'East City',
      coordinates: [670, 2142],
      type: 'city',
      image: '',
      appearances: {
        [InstallmentIndex.part1 + 1]: [
          4, 5, 6, 7, 9, 10, 13
        ].map(i => (part1[part1.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part2 + 1]: [
          15
        ].map(i => (part2[part2.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part4 + 1]: [
          46
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: ``,
      wikiLink: '',
      confirmed: true
    },
    {
      title: 'Resembool',
      coordinates: [398, 2118],
      type: 'town',
      image: '',
      appearances: {
        [InstallmentIndex.part1 + 1]: [
          2, 6, 9, 12,
        ].map(i => (part1[part1.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part2 + 1]: [
          18, 19, 20,
        ].map(i => (part2[part2.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part3 + 1]: [
          27, 36,
        ].map(i => (part3[part3.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part4 + 1]: [
          46, 47,
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part5 + 1]: [
          61, 63, 64
        ].map(i => (part5[part5.findIndex(c => (c.chapter === i))])),
      },
      description: ``,
      wikiLink: '',
      confirmed: true
    },
    {
      title: 'Rush Valley',
      coordinates: [645, 1682.5],
      type: 'town',
      image: '',
      appearances: {
        [InstallmentIndex.part1 + 1]: [
          11,
        ].map(i => (part1[part1.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part2 + 1]: [
          15,
        ].map(i => (part2[part2.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part3 + 1]: [
          33, 36
        ].map(i => (part3[part3.findIndex(c => (c.chapter === i))])),
      },
      description: ``,
      wikiLink: '',
      confirmed: true
    },
    {
      title: 'Dublith',
      coordinates: [510, 1693.5],
      type: 'town',
      image: '',
      appearances: {
        [InstallmentIndex.part1 + 1]: [
          12, 13,
        ].map(i => (part1[part1.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part2 + 1]: [
          14, 20,
        ].map(i => (part2[part2.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part4 + 1]: [
          43, 45
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: ``,
      wikiLink: '',
      confirmed: true
    },
    {
      title: 'Xing',
      coordinates: [932, 3444],
      type: 'region',
      image: '',
      appearances: {},
      description: ``,
      wikiLink: '',
      confirmed: true
    },
    {
      title: 'Xerxes',
      coordinates: [780, 3348],
      type: 'point of interest',
      image: '',
      appearances: {
        [InstallmentIndex.part2 + 1]: [
          18
        ].map(i => (part2[part2.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part4 + 1]: [
          40
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: ``,
      wikiLink: '',
      confirmed: true
    },
    {
      title: 'Nameless Village',
      coordinates: [477, 2114.5],
      type: 'town',
      image: '',
      appearances: {
        [InstallmentIndex.part2 + 1]: [
          21
        ].map(i => (part2[part2.findIndex(c => (c.chapter === i))])),
      },
      description: ``,
      wikiLink: '',
      confirmed: true
    },
    {
      title: 'Ishval',
      coordinates: [307, 2282],
      type: 'region',
      image: '',
      appearances: {
        [InstallmentIndex.part2 + 1]: [
          22, 25
        ].map(i => (part2[part2.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part3 + 1]: [
          30
        ].map(i => (part3[part3.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part5 + 1]: [
          54
        ].map(i => (part5[part5.findIndex(c => (c.chapter === i))])),
      },
      description: ``,
      wikiLink: '',
      confirmed: true
    },
    {
      title: 'North City',
      coordinates: [1399, 1682],
      type: 'city',
      image: '',
      appearances: {
        [InstallmentIndex.part3 + 1]: [
          33, 35, 36
        ].map(i => (part3[part3.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part4 + 1]: [
          44, 45,
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: ``,
      wikiLink: '',
      confirmed: true
    },
    {
      title: 'Fort Briggs',
      coordinates: [1602, 1710],
      type: 'point of interest',
      image: '',
      appearances: {
        [InstallmentIndex.part3 + 1]: [
          33, 34, 35, 36, 37, 38
        ].map(i => (part3[part3.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part4 + 1]: [
          42, 43, 45
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: ``,
      wikiLink: '',
      confirmed: true
    },
    {
      title: 'Baschool',
      coordinates: [1620.5, 1985],
      type: 'town',
      image: '',
      appearances: {
        [InstallmentIndex.part3 + 1]: [
          36, 38, 39
        ].map(i => (part3[part3.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part4 + 1]: [
          40, 41, 42
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: ``,
      wikiLink: '',
      confirmed: false
    },
    {
      title: 'Asbec',
      coordinates: [1700, 1931],
      type: 'town',
      image: '',
      appearances: {
        [InstallmentIndex.part4 + 1]: [
          41, 42, 43
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: ``,
      wikiLink: '',
      confirmed: false
    },
    {
      title: 'Youswell',
      coordinates: [879, 2633],
      type: 'town',
      image: '',
      appearances: {
        [InstallmentIndex.part4 + 1]: [
          45
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: ``,
      wikiLink: '',
      confirmed: true
    },
    {
      title: 'Kanama',
      coordinates: [926, 1767],
      type: 'town',
      image: '',
      appearances: {
        [InstallmentIndex.part4 + 1]: [
          47, 48, 49, 50, 51, 52
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: ``,
      wikiLink: '',
      confirmed: false
    },
  ],
  paths: [
    // {
    //   character: characters[CharacterIndex.Alphonse],
    //   installment: installments[InstallmentIndex.part1],
    //   chapter: part1[part1.findIndex(c => (c.chapter === 2))],
    //   confirmed: true,
    //   coordinates: [
        
    //   ],
    // },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 2))],
      confirmed: true,
      coordinates: [
        [976, 1742.5],
        [903, 1833],
        [890, 1875],
        [867, 1892],
        [843, 1916],
        [831, 1945],
        [828, 1958],
        [812, 1986],
        [791, 2011],
        [720, 2079],
        [699, 2105],
        [670, 2142],
        [761, 2178],
        [815, 2206],
        [880, 2226],
        [937, 2229],
        [1011, 2234],
        [1062, 2275],
        [1071, 2287],
        [1135, 2316],
        [1178, 2322],
        [1210, 2377],
        [1216, 2417],
        [1216, 2441],
        [1248, 2488],
        [1257, 2521],
        [1186.5, 2515]
      ],
    },
    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 2))],
      confirmed: true,
      coordinates: [
        [976, 1742.5],
        [903, 1833],
        [890, 1875],
        [867, 1892],
        [843, 1916],
        [831, 1945],
        [828, 1958],
        [812, 1986],
        [791, 2011],
        [720, 2079],
        [699, 2105],
        [670, 2142],
        [761, 2178],
        [815, 2206],
        [880, 2226],
        [937, 2229],
        [1011, 2234],
        [1062, 2275],
        [1071, 2287],
        [1135, 2316],
        [1178, 2322],
        [1210, 2377],
        [1216, 2417],
        [1216, 2441],
        [1248, 2488],
        [1257, 2521],
        [1186.5, 2515]
      ],
    },
    {
      character: characters[CharacterIndex.Roy],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 2))],
      confirmed: true,
      coordinates: [
        [976, 1742.5],
        [903, 1833],
        [890, 1875],
        [867, 1892],
        [843, 1916],
        [831, 1945],
        [828, 1958],
        [812, 1986],
        [791, 2011],
        [720, 2079],
        [699, 2105],
        [670, 2142],
      ],
    },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 4))],
      confirmed: true,
      coordinates: [
        [1186.5, 2515],
        [1257, 2521],
        [1248, 2488],
        [1216, 2441],
        [1216, 2417],
        [1210, 2377],
        [1178, 2322],
        [1135, 2316],
        [1071, 2287],
        [1062, 2275],
        [1011, 2234],
        [937, 2229],
        [880, 2226],
        [815, 2206],
        [761, 2178],
        [670, 2142],
      ],
    },
    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 4))],
      confirmed: true,
      coordinates: [
        [1186.5, 2515],
        [1257, 2521],
        [1248, 2488],
        [1216, 2441],
        [1216, 2417],
        [1210, 2377],
        [1178, 2322],
        [1135, 2316],
        [1071, 2287],
        [1062, 2275],
        [1011, 2234],
        [937, 2229],
        [880, 2226],
        [815, 2206],
        [761, 2178],
        [670, 2142],
      ],
    },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 6))],
      confirmed: true,
      coordinates: [
        [670, 2142],
        [542, 2114],
        [476, 2114],
        [398, 2118],
        [476, 2114],
        [542, 2114],
        [670, 2142],
        [699, 2105],
        [720, 2079],
        [791, 2011],
        [812, 1986],
        [828, 1958],
        [831, 1945],
        [843, 1916],
        [867, 1892],
        [890, 1875],
        [903, 1833],
        [976, 1742.5],
      ],
    },
    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 6))],
      confirmed: true,
      coordinates: [
        [670, 2142],
        [542, 2114],
        [476, 2114],
        [398, 2118],
        [476, 2114],
        [542, 2114],
        [670, 2142],
        [699, 2105],
        [720, 2079],
        [791, 2011],
        [812, 1986],
        [828, 1958],
        [831, 1945],
        [843, 1916],
        [867, 1892],
        [890, 1875],
        [903, 1833],
        [976, 1742.5],
      ],
    },
    {
      character: characters[CharacterIndex.Winry],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 9))],
      confirmed: true,
      coordinates: [
        [398, 2118],
        [476, 2114],
        [542, 2114],
        [670, 2142],
        [699, 2105],
        [720, 2079],
        [791, 2011],
        [812, 1986],
        [828, 1958],
        [831, 1945],
        [843, 1916],
        [867, 1892],
        [890, 1875],
        [903, 1833],
        [976, 1742.5],
      ],
    },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 10))],
      confirmed: true,
      coordinates: [
        [976, 1742.5],
        [919, 1726],
        [895, 1708],
        [860, 1702],
        [792, 1700],
        [736, 1702],
        [695, 1692],
        [645, 1682.5]
      ],
    },
    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 10))],
      confirmed: true,
      coordinates: [
        [976, 1742.5],
        [919, 1726],
        [895, 1708],
        [860, 1702],
        [792, 1700],
        [736, 1702],
        [695, 1692],
        [645, 1682.5]
      ],
    },
    {
      character: characters[CharacterIndex.Winry],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 10))],
      confirmed: true,
      coordinates: [
        [976, 1742.5],
        [919, 1726],
        [895, 1708],
        [860, 1702],
        [792, 1700],
        [736, 1702],
        [695, 1692],
        [645, 1682.5]
      ],
    },
    {
      character: characters[CharacterIndex.Roy],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 10))],
      confirmed: true,
      coordinates: [
        [670, 2142],
        [699, 2105],
        [720, 2079],
        [791, 2011],
        [812, 1986],
        [828, 1958],
        [831, 1945],
        [843, 1916],
        [867, 1892],
        [890, 1875],
        [903, 1833],
        [976, 1742.5],
      ],
    },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 12))],
      confirmed: true,
      coordinates: [
        [645, 1682.5],
        [613, 1705],
        [586, 1734],
        [553, 1724],
        [535, 1707],
        [510, 1693.5]
      ],
    },
    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 12))],
      confirmed: true,
      coordinates: [
        [645, 1682.5],
        [613, 1705],
        [586, 1734],
        [553, 1724],
        [535, 1707],
        [510, 1693.5]
      ],
    },
    {
      character: characters[CharacterIndex.Roy],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 13))],
      confirmed: true,
      coordinates: [
        [976, 1742.5],
        [903, 1833],
        [890, 1875],
        [867, 1892],
        [843, 1916],
        [831, 1945],
        [828, 1958],
        [812, 1986],
        [791, 2011],
        [720, 2079],
        [699, 2105],
        [670, 2142],
      ],
    },
  ]
};
