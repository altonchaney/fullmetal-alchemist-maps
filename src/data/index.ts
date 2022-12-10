
import { Map, Chapter, Character, Installment, Series, MediaType, DataBundle } from 'character-journey-map/models';
import map from '../assets/MAP.webp';

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
  description: `Fullmetal Alchemist takes place in an alternate Edwardian Era-themed history, in the fictional country of Amestris. In the world, alchemy is one of the most-practiced sciences; Alchemists who work for the government are known as State Alchemist, and automatically are given the rank of Major in the military.`,
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
      image: 'https://static.wikia.nocookie.net/fma/images/e/e4/Eastcommand_day.png',
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
      description: `East City is a city in the eastern region of Amestris, which serves as the military command base for the area. For most of the series' first arc, East City is where Colonel Roy Mustang and his subordinates are stationed as well as the point where Edward Elric must make his official reports.`,
      wikiLink: 'https://fma.fandom.com/wiki/East_City',
      confirmed: true
    },
    {
      title: 'Resembool',
      coordinates: [398, 2118],
      type: 'town',
      image: 'https://static.wikia.nocookie.net/fma/images/9/94/Rockbells-house.png',
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
      description: `Resembool is a rural town in the southeastern region of Amestris on the banks of the Rain River. Though small and relatively isolated, Resembool is well known in the region as a sheep-farming town and chiefly exports wool to be used in the manufacture of military uniforms. As such, the town had begun to grow in size due to its various successes, but in 1907, during the Ishval Civil War, Ishvalan terrorists attacked Resembool with explosives due to its military connections and reportedly destroyed everything for several blocks surrounding the train station.`,
      wikiLink: 'https://fma.fandom.com/wiki/Resembool',
      confirmed: true
    },
    {
      title: 'Rush Valley',
      coordinates: [645, 1682.5],
      type: 'town',
      image: 'https://static.wikia.nocookie.net/fma/images/5/52/RushValley.jpg',
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
      description: `Rush Valley is a city in southern Amestris, just north of Dublith. Due to its rapid growth in recent years as the center of Automail production, it is commonly known as "The Boomtown of the Broken-Down". The multitude of automail engineers in Rush Valley cheerfully celebrate their craft and walk the streets in droves, holding automail-related competitions and pushing their wares on unsuspecting passersby. As a result, it becomes a bit of a hassle to walk through the city with automail, as the vendors will go to great lengths to either sell upgrades or closely scrutinize whatever appendages happen to be prosthetic.`,
      wikiLink: 'https://fma.fandom.com/wiki/Rush_Valley',
      confirmed: true
    },
    {
      title: 'Dublith',
      coordinates: [510, 1693.5],
      type: 'town',
      image: 'https://static.wikia.nocookie.net/fma/images/6/65/Dublith.png',
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
      description: `Dublith is the town where Izumi Curtis and her husband, Sig Curtis, live and work. It is located in the center of the southern region of Amestris and like most of the south, boasts relatively high temperatures. According to Izumi, Dublith's main tourist attraction is Kauroy Lake, in the middle of which is Yock Island, the place where Edward and Alphonse learned the meaning behind the alchemical concept "One is all, All is one" after a month of survival training.`,
      wikiLink: 'https://fma.fandom.com/wiki/Dublith',
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
      image: 'https://static.wikia.nocookie.net/fma/images/6/6c/Ruins.png',
      appearances: {
        [InstallmentIndex.part2 + 1]: [
          18
        ].map(i => (part2[part2.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part4 + 1]: [
          40
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: `Xerxes, was an ancient country that existed in the Great Desert to the east of Amestris four hundred years before the start of the series. Despite having had a remarkably advanced society for their era, the entire population of Xerxes mysteriously vanished, and was left behind only in the fragmented legends of neighboring countries.`,
      wikiLink: 'https://fma.fandom.com/wiki/Xerxes',
      confirmed: true
    },
    {
      title: 'Nameless Village',
      coordinates: [477, 2114.5],
      type: 'town',
      image: 'https://static.wikia.nocookie.net/fma/images/d/db/Nameless-village.png',
      appearances: {
        [InstallmentIndex.part1 + 1]: [
          6
        ].map(i => (part1[part1.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part2 + 1]: [
          21
        ].map(i => (part2[part2.findIndex(c => (c.chapter === i))])),
      },
      description: `The Nameless Village is a village in the Eastern region of Amestris located somewhere between East City and Resembool. The train station placards are depicted as blank and though included on a map of the country in Perfect Guidebook 3, the town is labeled simply "The Town with No Name".`,
      wikiLink: 'https://fma.fandom.com/wiki/Nameless_Village',
      confirmed: false
    },
    {
      title: 'Ishval',
      coordinates: [307, 2282],
      type: 'region',
      image: 'https://static.wikia.nocookie.net/fma/images/f/f6/Ishval-people.png',
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
      description: `Ishval is a region of Southeastern Amestris on the border of the Eastern Desert. Presumably, once its own nation, owing to the vastly different cultural practices of Ishval's people and the general populace of greater Amestris as a whole, Ishval was likely absorbed as a part of the country's expansionist policies. However, the region remained a point of contention and was ultimately razed as a result of the Ishval Civil War.`,
      wikiLink: 'https://fma.fandom.com/wiki/Ishval',
      confirmed: true
    },
    {
      title: 'North City',
      coordinates: [1399, 1682],
      type: 'city',
      image: 'https://static.wikia.nocookie.net/fma/images/2/2d/North-city0.png',
      appearances: {
        [InstallmentIndex.part3 + 1]: [
          33, 35, 36
        ].map(i => (part3[part3.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part4 + 1]: [
          44, 45,
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: `North City is a city in the Northern region of Amestris and serves as the State Military command center for the area. Located to the south of the Briggs Mountain Range, North City is a picturesque town blanketed in snow for much of the year, belying the fact that the sinister dealings of Central Command have taken deep roots there.`,
      wikiLink: 'https://fma.fandom.com/wiki/North_City',
      confirmed: true
    },
    {
      title: 'Fort Briggs',
      coordinates: [1602, 1710],
      type: 'point of interest',
      image: 'https://static.wikia.nocookie.net/fma/images/c/c6/Fort.png',
      appearances: {
        [InstallmentIndex.part3 + 1]: [
          33, 34, 35, 36, 37, 38
        ].map(i => (part3[part3.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part4 + 1]: [
          42, 43, 45
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: `Fort Briggs is an Amestrian Military installation that lies on the border between the countries of Amestris and Drachma.`,
      wikiLink: 'https://fma.fandom.com/wiki/Fort_Briggs',
      confirmed: true
    },
    {
      title: 'Baschool',
      coordinates: [1620.5, 1985],
      type: 'town',
      image: 'https://static.wikia.nocookie.net/fma/images/3/31/Episode_38_-_13.jpg',
      appearances: {
        [InstallmentIndex.part3 + 1]: [
          36, 38, 39
        ].map(i => (part3[part3.findIndex(c => (c.chapter === i))])),
        [InstallmentIndex.part4 + 1]: [
          40, 41, 42
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: `Baschool is an abandoned mining town in the northern area of Amestris, east of Fort Briggs. It is in this town that Solf J. Kimblee's team—which includes the Elric brothers, Darius, Heinkel, Zampano, Jerso, Winry Rockbell and a platoon of Briggs soldiers led by Major Miles—begins its north area search for Scar.`,
      wikiLink: 'https://fma.fandom.com/wiki/Baschool',
      confirmed: false
    },
    {
      title: 'Asbec',
      coordinates: [1700, 1931],
      type: 'town',
      image: 'https://static.wikia.nocookie.net/fma/images/b/b9/Asbec.png',
      appearances: {
        [InstallmentIndex.part4 + 1]: [
          41, 42, 43
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: `Asbec is a town in northern Amestris, near the Briggs mountain range. A nearby slum is one of the many havens for Ishvalan refugees and is home to a sizeable Ishvalan community. When Winry Rockbell's party is forced to hide from Solf J. Kimblee in the North Area, they use Asbec as their place of refuge.`,
      wikiLink: 'https://fma.fandom.com/wiki/Asbec',
      confirmed: false
    },
    {
      title: 'Youswell',
      coordinates: [879, 2633],
      type: 'town',
      image: 'https://static.wikia.nocookie.net/fma/images/c/c1/Youswell.png',
      appearances: {
        [InstallmentIndex.part4 + 1]: [
          45
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: `Youswell is a coal mining town in Eastern Amestrian frontier and the nearest inhabited area to the desert border. For some time, the land upon which the town and mines are built belongs to Lieutenant Yoki, who exploits the townspeople by frequently raising taxes while simultaneously lowering wages in order to line his own pockets.`,
      wikiLink: 'https://fma.fandom.com/wiki/Youswell',
      confirmed: true
    },
    {
      title: 'Kanama',
      coordinates: [926, 1767],
      type: 'town',
      image: 'https://static.wikia.nocookie.net/fma/images/4/4e/Kanama.png',
      appearances: {
        [InstallmentIndex.part4 + 1]: [
          47, 48, 49, 50, 51, 52
        ].map(i => (part4[part4.findIndex(c => (c.chapter === i))])),
      },
      description: `Kanama is a small slum on the outskirts of Central City. Edward's party first encounters and battles the Homunculus Pride along with Gluttony in the dense forest outside of the slum. During the battle, Edward knocked out power to the village in order to keep Pride's shadow at bay, causing grief for the residents.`,
      wikiLink: 'https://fma.fandom.com/wiki/Kanama',
      confirmed: false
    },
  ],
  paths: [
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
    // CENTRAL CITY - EAST CITY
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
    // East City - Resembool - !Central City
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part1],
      chapter: part1[part1.findIndex(c => (c.chapter === 6))],
      confirmed: true,
      coordinates: [
        [670, 2142], // East City
        [542, 2114],
        [476, 2114],
        [398, 2118], // Resembool
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
        [976, 1742.5], // Central City
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
    // CENTRAL CITY - RUSH VALLEY
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
    // EAST CITY - CENTRAL CITY
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
    // part 2
    {
      character: characters[CharacterIndex.Roy],
      installment: installments[InstallmentIndex.part2],
      chapter: part2[part2.findIndex(c => (c.chapter === 14))],
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
      character: characters[CharacterIndex.Mei],
      installment: installments[InstallmentIndex.part2],
      chapter: part2[part2.findIndex(c => (c.chapter === 15))],
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
      installment: installments[InstallmentIndex.part2],
      chapter: part2[part2.findIndex(c => (c.chapter === 15))],
      confirmed: true,
      coordinates: [
        [510, 1693.5],
        [535, 1707],
        [553, 1724],
        [586, 1734],
        [613, 1705],
        [645, 1682.5],
      ],
    },
    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part2],
      chapter: part2[part2.findIndex(c => (c.chapter === 15))],
      confirmed: true,
      coordinates: [
        [510, 1693.5],
        [535, 1707],
        [553, 1724],
        [586, 1734],
        [613, 1705],
        [645, 1682.5],
      ],
    },
    {
      character: characters[CharacterIndex.Ling],
      installment: installments[InstallmentIndex.part2],
      chapter: part2[part2.findIndex(c => (c.chapter === 15))],
      confirmed: false,
      coordinates: [
        [780, 3348],
        [628, 2928],
        [514, 2532],
        [498, 2444],
        [502, 2396],
        [516, 2338],
        [514, 2302],
        [506, 2270],
        [508, 2242],
        [578, 2192],
        [670, 2142],
        [614, 2084],
        [582, 2066],
        [536, 2038],
        [526, 2022],
        [518, 2000],
        [522, 1982],
        [526, 1964],
        [522, 1946],
        [520, 1930],
        [526, 1918],
        [548, 1902],
        [576, 1876],
        [582, 1858],
        [578, 1846],
        [582, 1830],
        [582, 1800],
        [578, 1772],
        [584, 1736],
        [606, 1712],
        [645, 1682.5]
      ]
    },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part2],
      chapter: part2[part2.findIndex(c => (c.chapter === 16))],
      confirmed: true,
      coordinates: [
        [645, 1682.5],
        [695, 1692],
        [736, 1702],
        [792, 1700],
        [860, 1702],
        [895, 1708],
        [919, 1726],
        [976, 1742.5],
      ],
    },
    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part2],
      chapter: part2[part2.findIndex(c => (c.chapter === 16))],
      confirmed: true,
      coordinates: [
        [645, 1682.5],
        [695, 1692],
        [736, 1702],
        [792, 1700],
        [860, 1702],
        [895, 1708],
        [919, 1726],
        [976, 1742.5],
      ],
    },
    {
      character: characters[CharacterIndex.Winry],
      installment: installments[InstallmentIndex.part2],
      chapter: part2[part2.findIndex(c => (c.chapter === 16))],
      confirmed: true,
      coordinates: [
        [645, 1682.5],
        [695, 1692],
        [736, 1702],
        [792, 1700],
        [860, 1702],
        [895, 1708],
        [919, 1726],
        [976, 1742.5],
      ],
    },
    {
      character: characters[CharacterIndex.Ling],
      installment: installments[InstallmentIndex.part2],
      chapter: part2[part2.findIndex(c => (c.chapter === 16))],
      confirmed: true,
      coordinates: [
        [645, 1682.5],
        [695, 1692],
        [736, 1702],
        [792, 1700],
        [860, 1702],
        [895, 1708],
        [919, 1726],
        [976, 1742.5],
      ],
    },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part2],
      chapter: part2[part2.findIndex(c => (c.chapter === 18))],
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
        [542, 2114],
        [476, 2114],
        [398, 2118], // resembool
      ],
    },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part2],
      chapter: part2[part2.findIndex(c => (c.chapter === 18))],
      confirmed: false,
      coordinates: [
        [398, 2118], // resembool
        [422, 2226],
        [450, 2350],
        [458, 2522],
        [496, 2786],
        [594, 3068],
        [700, 3286],
        [780, 3348], // xerxes
      ],
    },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part2],
      chapter: part2[part2.findIndex(c => (c.chapter === 19))],
      confirmed: false,
      coordinates: [
        [780, 3348], // xerxes
        [700, 3286],
        [594, 3068],
        [496, 2786],
        [458, 2522],
        [450, 2350],
        [422, 2226],
        [398, 2118], // resembool
      ],
    },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part2],
      chapter: part2[part2.findIndex(c => (c.chapter === 20))],
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
      character: characters[CharacterIndex.Winry],
      installment: installments[InstallmentIndex.part2],
      chapter: part2[part2.findIndex(c => (c.chapter === 23))],
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
    // part 3
    {
      character: characters[CharacterIndex.Mei],
      installment: installments[InstallmentIndex.part3],
      chapter: part3[part3.findIndex(c => (c.chapter === 31))],
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
      installment: installments[InstallmentIndex.part3],
      chapter: part3[part3.findIndex(c => (c.chapter === 32))],
      confirmed: true,
      coordinates: [
        [976, 1742.5],
        [1045.5, 1708],
        [1093, 1696.5],
        [1160, 1705],
        [1279, 1720],
        [1299.5, 1715],
        [1316, 1706],
        [1347.5, 1692],
        [1399, 1682]
      ],
    },
    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part3],
      chapter: part3[part3.findIndex(c => (c.chapter === 32))],
      confirmed: true,
      coordinates: [
        [976, 1742.5],
        [1045.5, 1708],
        [1093, 1696.5],
        [1160, 1705],
        [1279, 1720],
        [1299.5, 1715],
        [1316, 1706],
        [1347.5, 1692],
        [1399, 1682]
      ],
    },
    {
      character: characters[CharacterIndex.Mei],
      installment: installments[InstallmentIndex.part3],
      chapter: part3[part3.findIndex(c => (c.chapter === 32))],
      confirmed: false,
      coordinates: [
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
        [1215, 2320],
        [1245, 2321],
        [1275, 2311],
        [1335, 2275],
        [1395, 2254],
        [1429, 2228],
        [1458, 2192],
        [1500, 2158],
        [1535, 2130],
      ],
    },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part3],
      chapter: part3[part3.findIndex(c => (c.chapter === 33))],
      confirmed: true,
      coordinates: [
        [1399, 1682],
        [1466, 1694],
        [1512, 1710],
        [1541, 1717],
        [1567, 1716],
        [1602, 1710]
      ],
    },
    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part3],
      chapter: part3[part3.findIndex(c => (c.chapter === 33))],
      confirmed: true,
      coordinates: [
        [1399, 1682],
        [1466, 1694],
        [1512, 1710],
        [1541, 1717],
        [1567, 1716],
        [1602, 1710]
      ],
    },
    {
      character: characters[CharacterIndex.Mei],
      installment: installments[InstallmentIndex.part3],
      chapter: part3[part3.findIndex(c => (c.chapter === 33))],
      confirmed: false,
      coordinates: [
        [1535, 2130],
        [1560, 2076],
        [1560, 2014]
      ],
    },
    {
      character: characters[CharacterIndex.Mei],
      installment: installments[InstallmentIndex.part3],
      chapter: part3[part3.findIndex(c => (c.chapter === 36))],
      confirmed: false,
      coordinates: [
        [1560, 2014],
        [1620.5, 1985]
      ],
    },
    {
      character: characters[CharacterIndex.Winry],
      installment: installments[InstallmentIndex.part3],
      chapter: part3[part3.findIndex(c => (c.chapter === 36))],
      confirmed: true,
      coordinates: [
        [645, 1682.5],
        [695, 1692],
        [736, 1702],
        [792, 1700],
        [860, 1702],
        [895, 1708],
        [919, 1726],
        [976, 1742.5],
        [1045.5, 1708],
        [1093, 1696.5],
        [1160, 1705],
        [1279, 1720],
        [1299.5, 1715],
        [1316, 1706],
        [1347.5, 1692],
        [1399, 1682],
        [1466, 1694],
        [1512, 1710],
        [1541, 1717],
        [1567, 1716],
        [1602, 1710]
      ],
    },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part3],
      chapter: part3[part3.findIndex(c => (c.chapter === 38))],
      confirmed: true,
      coordinates: [
        [1602, 1710],
        [1598, 1787],
        [1602, 1857],
        [1615, 1945],
        [1620.5, 1985]
      ],
    },
    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part3],
      chapter: part3[part3.findIndex(c => (c.chapter === 38))],
      confirmed: true,
      coordinates: [
        [1602, 1710],
        [1598, 1787],
        [1602, 1857],
        [1615, 1945],
        [1620.5, 1985]
      ],
    },
    {
      character: characters[CharacterIndex.Winry],
      installment: installments[InstallmentIndex.part3],
      chapter: part3[part3.findIndex(c => (c.chapter === 38))],
      confirmed: true,
      coordinates: [
        [1602, 1710],
        [1598, 1787],
        [1602, 1857],
        [1615, 1945],
        [1620.5, 1985]
      ],
    },
    // part 4
    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 41))],
      confirmed: true,
      coordinates: [
        [1620.5, 1985],
        [1700, 1931]
      ],
    },
    {
      character: characters[CharacterIndex.Winry],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 41))],
      confirmed: true,
      coordinates: [
        [1620.5, 1985],
        [1700, 1931]
      ],
    },
    {
      character: characters[CharacterIndex.Mei],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 41))],
      confirmed: true,
      coordinates: [
        [1620.5, 1985],
        [1700, 1931]
        
      ],
    },
    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 43))],
      confirmed: true,
      coordinates: [
        [1700, 1931],
        [1684, 1983],
        [1689, 2036],
        [1680, 2064],
        [1678, 2103],
        [1668, 2132],
        [1657, 2142],
        [1626, 2151],
        [1593, 2153],
        [1579, 2146],
        [1570, 2135],
        [1535, 2130],
        [1500, 2158],
        [1458, 2192],
        [1429, 2228],
        [1395, 2254],
        [1335, 2275],
        [1275, 2311],
        [1245, 2321],
        [1215, 2320],
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
      character: characters[CharacterIndex.Winry],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 43))],
      confirmed: true,
      coordinates: [
        [1700, 1931],
        [1684, 1983],
        [1689, 2036],
        [1680, 2064],
        [1678, 2103],
        [1668, 2132],
        [1657, 2142],
        [1626, 2151],
        [1593, 2153],
        [1579, 2146],
        [1570, 2135],
        [1535, 2130],
        [1500, 2158],
        [1458, 2192],
        [1429, 2228],
        [1395, 2254],
        [1335, 2275],
        [1275, 2311],
        [1245, 2321],
        [1215, 2320],
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
      character: characters[CharacterIndex.Mei],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 43))],
      confirmed: true,
      coordinates: [
        [1700, 1931],
        [1684, 1983],
        [1689, 2036],
        [1680, 2064],
        [1678, 2103],
        [1668, 2132],
        [1657, 2142],
        [1626, 2151],
        [1593, 2153],
        [1579, 2146],
        [1570, 2135],
        [1535, 2130],
        [1500, 2158],
        [1458, 2192],
        [1429, 2228],
        [1395, 2254],
        [1335, 2275],
        [1275, 2311],
        [1245, 2321],
        [1215, 2320],
        [1178, 2322],
        [1135, 2316],
        [1071, 2287],
        [1062, 2275],
        [1011, 2234],
        [999, 2262],
        [971, 2299],
        [941, 2328],
        [941, 2385],
        [938, 2446],
        [936, 2469],
        [925, 2506],
        [908, 2538],
        [891, 2568],
        [885, 2598],
        [879, 2633]
      ],
    },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 44))],
      confirmed: true,
      coordinates: [
        [1620.5, 1985],
        [1615, 1945],
        [1602, 1857],
        [1598, 1787],
        [1602, 1710],
        [1567, 1716],
        [1541, 1717],
        [1512, 1710],
        [1466, 1694],
        [1399, 1682],
      ],
    },

    {
      character: characters[CharacterIndex.Mei],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 45))],
      confirmed: true,
      coordinates: [
        [879, 2633],
        [885, 2598],
        [891, 2568],
        [908, 2538],
        [925, 2506],
        [936, 2469],
        [938, 2446],
        [941, 2385],
        [941, 2328],
        [971, 2299],
        [999, 2262],
        [1011, 2234],
        [1031, 2181],
        [1030, 2104],
        [1027, 1914],
        [1028, 1851],
        [1051, 1786],
        [1056, 1740],
        [1043, 1709]
      ],
    },

    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 46))],
      confirmed: true,
      coordinates: [
        [1399, 1682],
        [1347.5, 1692],
        [1316, 1706],
        [1299.5, 1715],
        [1279, 1720],
        [1160, 1705],
        [1093, 1696.5],
        [1045.5, 1708],
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
        [542, 2114],
        [476, 2114],
        [398, 2118],
      ],
    },

    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 46))],
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
      character: characters[CharacterIndex.Ling],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 46))],
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
        [542, 2114],
        [476, 2114],
        [398, 2118],
      ],
    },
    {
      character: characters[CharacterIndex.Winry],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 46))],
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
        [670, 2142], // East City
        [542, 2114],
        [476, 2114],
        [398, 2118],
      ],
    },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 47))],
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
        [926, 1767]
      ],
    },
    {
      character: characters[CharacterIndex.Ling],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 47))],
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
        [926, 1767]
      ],
    },
    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 48))],
      confirmed: true,
      coordinates: [
        [976, 1742.5],
        [926, 1767]
      ],
    },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 50))],
      confirmed: true,
      coordinates: [
        [926, 1767],
        [976, 1742.5]
      ],
    },
    {
      character: characters[CharacterIndex.Ling],
      installment: installments[InstallmentIndex.part4],
      chapter: part4[part4.findIndex(c => (c.chapter === 50))],
      confirmed: true,
      coordinates: [
        [926, 1767],
        [976, 1742.5]
      ],
    },
    // part 5
    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part5],
      chapter: part5[part5.findIndex(c => (c.chapter === 55))],
      confirmed: true,
      coordinates: [
        [926, 1767],
        [976, 1742.5]
      ],
    },
    {
      character: characters[CharacterIndex.Edward],
      installment: installments[InstallmentIndex.part5],
      chapter: part5[part5.findIndex(c => (c.chapter === 64))],
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
        [542, 2114],
        [476, 2114],
        [398, 2118],
      ],
    },
    {
      character: characters[CharacterIndex.Alphonse],
      installment: installments[InstallmentIndex.part5],
      chapter: part5[part5.findIndex(c => (c.chapter === 64))],
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
        [542, 2114],
        [476, 2114],
        [398, 2118],
      ],
    },
  ]
};
