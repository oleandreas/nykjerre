# nykjerre

Oversikt og vurdering av aktuelle elbiler fra en FINN-favorittliste. Filtrer paa merke og modell, sorter, og se en subjektiv vurdering fra 1-10 stjerner per bil (10 = beste kjop).

Bygget med Vue 3 + TypeScript + Vue Router (Vite).

## Funksjoner

- Filtrering paa merke og modell (modell-listen oppdateres etter valgt merke)
- Sortering paa beste kjop, lavest pris og lengst rekkevidde
- Detaljside per bil med multimedia, kjoreassistanse, setemuligheter, hengervekt, bagasjerom (inkl. frunk og seter nedfelt), rekkevidde, ladehastighet og gjenvaerende garanti (tid + km)
- Stjernevurdering 1-10 med kort begrunnelse
- Direkte lenke til FINN-annonsen

## Komme i gang

```bash
npm install
npm run dev
```

Bygg for produksjon:

```bash
npm run build
npm run preview
```

## Data og kilder

Bildataene ligger i src/data/cars.ts. Pris, aarsmodell, km, effekt, batteri, WLTP-rekkevidde, hengervekt, bagasjerom og garanti er hentet fra FINN-annonsene. Felt merket med tilde (~) i appen (ladehastighet, ladetid, frunk-volum og volum med seter nedfelt) er modelltypiske tall, da FINN-annonsene ikke oppgir disse konsekvent. Sjekk alltid den enkelte annonsen for endelig spesifikasjon.

Vurderingene er en subjektiv totalvurdering av pris mot verdi, gjenvaerende garanti, rekkevidde, praktiske egenskaper og kilometerstand - ment som et utgangspunkt, ikke en fasit.
