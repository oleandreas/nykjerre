export interface Car {
  id: string
  finnkode: string
  finnUrl: string
  merke: string
  modell: string
  variant: string
  modellaar: number
  km: number
  pris: number
  effektHk: number
  batteriKwh: number | null
  rekkeviddeWltpKm: number
  ladehastighetKw: number // maks DC, ca./modelltypisk
  ladetid10til80Min: number // ca./modelltypisk
  hengervektKg: number
  bagasjeromL: number
  frunkL: number // ca./modelltypisk
  bagasjeromSeterNedL: number // ca./modelltypisk
  seter: number
  hjuldrift: string
  multimedia: string
  kjoreassistanse: string
  setemuligheter: string
  garantiMnd: number | null
  garantiKm: number | null
  garantiNotat: string
  vurdering: number // 1-10, 10 = beste kjop
  vurderingBegrunnelse: string
}

// Kilde: FINN-annonser (favorittliste). Felt merket "ca." er modelltypiske
// spesifikasjoner der FINN ikke oppgir verdien i annonsen.
export const cars: Car[] = [
  {
    id: 'xpeng-g6',
    finnkode: '464138002',
    finnUrl: 'https://www.finn.no/mobility/item/464138002',
    merke: 'XPeng',
    modell: 'G6',
    variant: 'AWD Performance Facelift',
    modellaar: 2025,
    km: 14000,
    pris: 459900,
    effektHk: 486,
    batteriKwh: 80,
    rekkeviddeWltpKm: 510,
    ladehastighetKw: 280,
    ladetid10til80Min: 20,
    hengervektKg: 1500,
    bagasjeromL: 647,
    frunkL: 70,
    bagasjeromSeterNedL: 1375,
    seter: 5,
    hjuldrift: 'Firehjulsdrift',
    multimedia: '15\" touchskjerm, Apple CarPlay, DAB, Bluetooth, navigasjon, OTA-oppdateringer',
    kjoreassistanse: 'XPILOT: adaptiv cruise, 360-kamera, blindsonevarsling, filholder, auto park',
    setemuligheter: 'El. seter m/minne, varme og ventilasjon, skinn, delt nedfellbart baksete',
    garantiMnd: 76,
    garantiKm: 160000,
    garantiNotat: 'Resterende nybilgaranti (76 md. / 160 000 km)',
    vurdering: 9,
    vurderingBegrunnelse: 'Lav km, svaert lang gjenvaerende garanti, god plass og rekkevidde til en konkurransedyktig pris. Sterkeste totalpakke.'
  },
  {
    id: 'changan-deepal-s05',
    finnkode: '452375850',
    finnUrl: 'https://www.finn.no/mobility/item/452375850',
    merke: 'Changan',
    modell: 'Deepal S05',
    variant: 'Aurora+ AWD',
    modellaar: 2026,
    km: 3000,
    pris: 419900,
    effektHk: 435,
    batteriKwh: 56,
    rekkeviddeWltpKm: 445,
    ladehastighetKw: 93,
    ladetid10til80Min: 30,
    hengervektKg: 1600,
    bagasjeromL: 492,
    frunkL: 0,
    bagasjeromSeterNedL: 1000,
    seter: 5,
    hjuldrift: 'Bakhjulsdrift',
    multimedia: 'Stor touchskjerm, Apple CarPlay, Android Auto, navigasjon, appstyring, head-up display',
    kjoreassistanse: 'Adaptiv cruise, 360-kamera, parkeringssensorer, 5 stjerner Euro NCAP',
    setemuligheter: 'Skinnseter m/varme og kjoling, oppvarmet ratt, panorama glasstak',
    garantiMnd: 78,
    garantiKm: 160000,
    garantiNotat: 'Nybilgaranti (78 md. / 160 000 km)',
    vurdering: 8,
    vurderingBegrunnelse: 'Billigst i utvalget, praktisk talt ny og enorm garanti. Trekkes for mindre batteri/rekkevidde og kun bakhjulsdrift.'
  },
  {
    id: 'mg-im6',
    finnkode: '459593332',
    finnUrl: 'https://www.finn.no/mobility/item/459593332',
    merke: 'MG',
    modell: 'IM6',
    variant: '100kWh AWD',
    modellaar: 2025,
    km: 12000,
    pris: 528000,
    effektHk: 751,
    batteriKwh: 100,
    rekkeviddeWltpKm: 505,
    ladehastighetKw: 396,
    ladetid10til80Min: 17,
    hengervektKg: 1500,
    bagasjeromL: 665,
    frunkL: 32,
    bagasjeromSeterNedL: 1700,
    seter: 5,
    hjuldrift: 'Firehjulsdrift',
    multimedia: 'Stor panoramaskjerm, 800V-arkitektur, Apple CarPlay, DAB, navigasjon',
    kjoreassistanse: 'Adaptiv cruise, 360-kamera, blindsoneassistent, auto park, firehjulsstyring',
    setemuligheter: 'El. skinnseter, varme, delt nedfellbart baksete',
    garantiMnd: 80,
    garantiKm: 138000,
    garantiNotat: 'Nybilgaranti (80 md. / 138 000 km)',
    vurdering: 8,
    vurderingBegrunnelse: 'Voldsom ytelse, 800V superlading, mye plass og lang garanti. Litt hoyere pris demper scoren noe.'
  },
  {
    id: 'smart-5-brabus',
    finnkode: '464543492',
    finnUrl: 'https://www.finn.no/mobility/item/464543492',
    merke: 'Smart',
    modell: '#5',
    variant: 'Brabus',
    modellaar: 2026,
    km: 999,
    pris: 557505,
    effektHk: 646,
    batteriKwh: 94,
    rekkeviddeWltpKm: 540,
    ladehastighetKw: 400,
    ladetid10til80Min: 18,
    hengervektKg: 1600,
    bagasjeromL: 630,
    frunkL: 70,
    bagasjeromSeterNedL: 1530,
    seter: 5,
    hjuldrift: 'Firehjulsdrift',
    multimedia: 'Tre skjermer, Apple CarPlay, DAB, navigasjon, gjenfinningssystem',
    kjoreassistanse: 'Adaptiv cruise, 360-kamera, blindsoneassistent, auto park, fjernlysassistent',
    setemuligheter: 'El. sportsseter, skinn/alcantara, delt baksete',
    garantiMnd: 48,
    garantiKm: 100000,
    garantiNotat: 'Tilnaermet ny - full nybilgaranti (ca. 48 md. / 100 000 km)',
    vurdering: 7,
    vurderingBegrunnelse: 'Toppmodell med lengst rekkevidde og rask lading, men ligger i ovre prissjikt.'
  },
  {
    id: 'exlantix-es',
    finnkode: '459249281',
    finnUrl: 'https://www.finn.no/mobility/item/459249281',
    merke: 'Exlantix',
    modell: 'ES',
    variant: '77kWh Luxury AWD',
    modellaar: 2025,
    km: 50,
    pris: 465000,
    effektHk: 480,
    batteriKwh: 77,
    rekkeviddeWltpKm: 500,
    ladehastighetKw: 250,
    ladetid10til80Min: 20,
    hengervektKg: 1500,
    bagasjeromL: 450,
    frunkL: 0,
    bagasjeromSeterNedL: 1100,
    seter: 5,
    hjuldrift: 'Firehjulsdrift',
    multimedia: 'Stor touchskjerm, Bluetooth, frontkamera, keyless go, forsterkerenhet',
    kjoreassistanse: 'Adaptiv cruise, 360-kamera, frontkamera, antiskrens/antispinn',
    setemuligheter: 'El. seter m/minne, skinn, panorama, mork-tonede vinduer bak',
    garantiMnd: 84,
    garantiKm: 150000,
    garantiNotat: 'Nybilgaranti fra 1. gang reg. (84 md. / 150 000 km)',
    vurdering: 7,
    vurderingBegrunnelse: 'Lengst garanti av alle og praktisk talt ny, men ukjent merke og sedan-format gjor den mindre fleksibel.'
  },
  {
    id: 'byd-sealion-7',
    finnkode: '459748816',
    finnUrl: 'https://www.finn.no/mobility/item/459748816',
    merke: 'BYD',
    modell: 'Sealion 7',
    variant: '4x4',
    modellaar: 2024,
    km: 23300,
    pris: 439505,
    effektHk: 218,
    batteriKwh: 82,
    rekkeviddeWltpKm: 502,
    ladehastighetKw: 150,
    ladetid10til80Min: 32,
    hengervektKg: 1500,
    bagasjeromL: 520,
    frunkL: 58,
    bagasjeromSeterNedL: 1789,
    seter: 5,
    hjuldrift: 'Firehjulsdrift',
    multimedia: 'Roterende touchskjerm, Apple CarPlay, DAB, navigasjon',
    kjoreassistanse: 'Adaptiv cruise, 360-kamera, blindsoneassistent',
    setemuligheter: 'El. seter, varme, delt nedfellbart baksete',
    garantiMnd: 48,
    garantiKm: null,
    garantiNotat: 'Nybilgaranti (48 md.)',
    vurdering: 7,
    vurderingBegrunnelse: 'God pris, solid garanti og rekkevidde. Denne varianten har lavere effekt (218 hk) enn de andre.'
  },
  {
    id: 'xpeng-g9',
    finnkode: '462775888',
    finnUrl: 'https://www.finn.no/mobility/item/462775888',
    merke: 'XPeng',
    modell: 'G9',
    variant: 'LR 4WD Performance',
    modellaar: 2023,
    km: 57000,
    pris: 519000,
    effektHk: 551,
    batteriKwh: 98,
    rekkeviddeWltpKm: 520,
    ladehastighetKw: 300,
    ladetid10til80Min: 20,
    hengervektKg: 1500,
    bagasjeromL: 660,
    frunkL: 71,
    bagasjeromSeterNedL: 1576,
    seter: 5,
    hjuldrift: 'Firehjulsdrift',
    multimedia: 'Tre skjermer, Apple CarPlay, DAB, navigasjon, OTA, gjenfinningssystem',
    kjoreassistanse: 'Adaptiv cruise, 360-kamera, blindsoneassistent, auto park, filholder',
    setemuligheter: 'El. seter, skinn, korsryggstotte, delt nedfellbart baksete',
    garantiMnd: 24,
    garantiKm: 120000,
    garantiNotat: 'Nybilgaranti - ca. rest (5 ars merkegaranti fra 2023)',
    vurdering: 6,
    vurderingBegrunnelse: 'Stor og kraftig premium-SUV, men hoy km og hoyere pris gjor den til et svakere kjop enn G6.'
  },
  {
    id: 'voyah-free',
    finnkode: '455255112',
    finnUrl: 'https://www.finn.no/mobility/item/455255112',
    merke: 'VOYAH',
    modell: 'FREE',
    variant: 'Premium AWD',
    modellaar: 2023,
    km: 66300,
    pris: 399000,
    effektHk: 489,
    batteriKwh: 100,
    rekkeviddeWltpKm: 500,
    ladehastighetKw: 100,
    ladetid10til80Min: 45,
    hengervektKg: 2000,
    bagasjeromL: 560,
    frunkL: 0,
    bagasjeromSeterNedL: 1320,
    seter: 5,
    hjuldrift: 'Firehjulsdrift',
    multimedia: 'Flere store skjermer, Apple CarPlay, DAB, navigasjon',
    kjoreassistanse: 'Adaptiv cruise, 360-kamera, massasje, nattsyn',
    setemuligheter: 'El. skinnseter m/minne, massasje, luftfjaering, panorama',
    garantiMnd: 19,
    garantiKm: 100000,
    garantiNotat: 'Resterende nybilgaranti (19 md. / 100 000 km)',
    vurdering: 6,
    vurderingBegrunnelse: 'Billigst totalt, kraftig og hoyest hengervekt (2000 kg), men hoy km og kort gjenvaerende garanti.'
  }
]

export const merker = (): string[] =>
  Array.from(new Set(cars.map((c) => c.merke))).sort()

export const modellerForMerke = (merke: string): string[] =>
  Array.from(new Set(cars.filter((c) => !merke || c.merke === merke).map((c) => c.modell))).sort()
