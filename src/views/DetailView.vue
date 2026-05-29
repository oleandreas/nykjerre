<script setup lang="ts">
import { computed } from 'vue'
import { cars } from '../data/cars'
import StarRating from '../components/StarRating.vue'

const props = defineProps<{ id: string }>()
const car = computed(() => cars.find((c) => c.id === props.id))

const kr = (n: number) => n.toLocaleString('no-NO') + ' kr'

function garantiTekst(mnd: number | null, kmGr: number | null): string {
  if (!mnd) return 'Se annonse'
  const aar = Math.floor(mnd / 12)
  const restMnd = mnd % 12
  const tid = aar > 0 ? aar + ' år' + (restMnd ? ' ' + restMnd + ' md' : '') : mnd + ' md'
  return kmGr ? tid + ' / ' + kmGr.toLocaleString('no-NO') + ' km' : tid
}
</script>

<template>
  <RouterLink class="back-link" :to="{ name: 'list' }">← Tilbake til oversikten</RouterLink>

  <div v-if="car" class="detail">
    <div class="card-top">
      <div>
        <h1>{{ car.merke }} {{ car.modell }}</h1>
        <div class="sub">{{ car.variant }} · {{ car.modellaar }} · {{ car.km.toLocaleString('no-NO') }} km</div>
      </div>
      <div class="price">{{ kr(car.pris) }}</div>
    </div>

    <div class="assessment">
      <div class="rating">
        <strong>Vurdering:</strong>
        <StarRating :value="car.vurdering" />
      </div>
      <p style="margin-top: 10px">{{ car.vurderingBegrunnelse }}</p>
    </div>

    <div class="detail-grid">
      <div class="detail-block">
        <h3>Batteri &amp; rekkevidde</h3>
        <div class="kv"><span>Rekkevidde (WLTP)</span><span>{{ car.rekkeviddeWltpKm }} km</span></div>
        <div class="kv"><span>Batteri</span><span>{{ car.batteriKwh ? car.batteriKwh + ' kWh' : 'Se annonse' }}</span></div>
        <div class="kv"><span>Ladehastighet</span><span>~{{ car.ladehastighetKw }} kW (DC)</span></div>
        <div class="kv"><span>Ladetid 10–80%</span><span>~{{ car.ladetid10til80Min }} min</span></div>
      </div>

      <div class="detail-block">
        <h3>Ytelse</h3>
        <div class="kv"><span>Effekt</span><span>{{ car.effektHk }} hk</span></div>
        <div class="kv"><span>Hjuldrift</span><span>{{ car.hjuldrift }}</span></div>
        <div class="kv"><span>Hengervekt (maks)</span><span>{{ car.hengervektKg }} kg</span></div>
        <div class="kv"><span>Seter</span><span>{{ car.seter }}</span></div>
      </div>

      <div class="detail-block">
        <h3>Bagasje &amp; plass</h3>
        <div class="kv"><span>Bagasjerom</span><span>{{ car.bagasjeromL }} L</span></div>
        <div class="kv"><span>Frunk</span><span>{{ car.frunkL ? '~' + car.frunkL + ' L' : 'Ingen / ukjent' }}</span></div>
        <div class="kv"><span>Seter nedfelt</span><span>~{{ car.bagasjeromSeterNedL }} L</span></div>
      </div>

      <div class="detail-block">
        <h3>Garanti (rest)</h3>
        <div class="kv"><span>Tid / km</span><span>{{ garantiTekst(car.garantiMnd, car.garantiKm) }}</span></div>
        <p style="margin-top: 8px; color: var(--muted); font-size: 13px">{{ car.garantiNotat }}</p>
      </div>

      <div class="detail-block">
        <h3>Multimediasystem</h3>
        <p>{{ car.multimedia }}</p>
      </div>

      <div class="detail-block">
        <h3>Kjoreassistanse</h3>
        <p>{{ car.kjoreassistanse }}</p>
      </div>

      <div class="detail-block">
        <h3>Setemuligheter</h3>
        <p>{{ car.setemuligheter }}</p>
      </div>
    </div>

    <p style="margin-top: 22px">
      <a class="btn secondary" :href="car.finnUrl" target="_blank" rel="noopener" style="display: inline-block; max-width: 220px">Se annonsen på FINN ↗</a>
    </p>

    <p class="note">
      Felt merket med “~” (ladehastighet, ladetid, frunk og volum med seter nedfelt) er modelltypiske
      tall der FINN-annonsen ikke oppgir verdien. Oppgitte priser, km, garanti, rekkevidde og bagasjerom er
      hentet fra FINN-annonsen. Sjekk alltid den enkelte annonsen for endelig spesifikasjon.
    </p>
  </div>

  <div v-else class="detail">
    <p>Fant ikke bilen. <RouterLink :to="{ name: 'list' }">Gå tilbake</RouterLink></p>
  </div>
</template>
