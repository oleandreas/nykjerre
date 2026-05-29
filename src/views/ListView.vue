<script setup lang="ts">
import { computed, ref } from 'vue'
import { cars, merker, modellerForMerke } from '../data/cars'
import StarRating from '../components/StarRating.vue'

const valgtMerke = ref('')
const valgtModell = ref('')
const sortering = ref<'vurdering' | 'pris' | 'rekkevidde'>('vurdering')

const tilgjengeligeModeller = computed(() => modellerForMerke(valgtMerke.value))

function nullstill() {
  valgtMerke.value = ''
  valgtModell.value = ''
}

function onMerkeEndret() {
  valgtModell.value = ''
}

const kr = (n: number) => n.toLocaleString('no-NO') + ' kr'
const km = (n: number) => n.toLocaleString('no-NO') + ' km'

const filtrerte = computed(() => {
  let liste = cars.filter((c) => {
    if (valgtMerke.value && c.merke !== valgtMerke.value) return false
    if (valgtModell.value && c.modell !== valgtModell.value) return false
    return true
  })
  liste = [...liste].sort((a, b) => {
    if (sortering.value === 'pris') return a.pris - b.pris
    if (sortering.value === 'rekkevidde') return b.rekkeviddeWltpKm - a.rekkeviddeWltpKm
    return b.vurdering - a.vurdering
  })
  return liste
})

function garantiTekst(mnd: number | null, kmGr: number | null): string {
  if (!mnd) return 'Se annonse'
  const aar = Math.floor(mnd / 12)
  const restMnd = mnd % 12
  const tid = aar > 0 ? aar + ' \u00e5r' + (restMnd ? ' ' + restMnd + ' md' : '') : mnd + ' md'
  return kmGr ? tid + ' / ' + kmGr.toLocaleString('no-NO') + ' km' : tid
}
</script>

<template>
  <section class="filters">
    <div class="filter-field">
      <label for="merke">Merke</label>
      <select id="merke" v-model="valgtMerke" @change="onMerkeEndret">
        <option value="">Alle merker</option>
        <option v-for="m in merker()" :key="m" :value="m">{{ m }}</option>
      </select>
    </div>
    <div class="filter-field">
      <label for="modell">Modell</label>
      <select id="modell" v-model="valgtModell">
        <option value="">Alle modeller</option>
        <option v-for="m in tilgjengeligeModeller" :key="m" :value="m">{{ m }}</option>
      </select>
    </div>
    <div class="filter-field">
      <label for="sort">Sorter etter</label>
      <select id="sort" v-model="sortering">
        <option value="vurdering">Beste kjop</option>
        <option value="pris">Lavest pris</option>
        <option value="rekkevidde">Lengst rekkevidde</option>
      </select>
    </div>
    <button class="reset" @click="nullstill">Nullstill</button>
    <span class="result-count">{{ filtrerte.length }} biler</span>
  </section>

  <section class="grid">
    <article v-for="car in filtrerte" :key="car.id" class="card">
      <div class="card-top">
        <div>
          <h2>{{ car.merke }} {{ car.modell }}</h2>
          <div class="sub">{{ car.variant }} \u00b7 {{ car.modellaar }} \u00b7 {{ km(car.km) }}</div>
        </div>
        <div class="price">{{ kr(car.pris) }}</div>
      </div>

      <div class="rating">
        <StarRating :value="car.vurdering" />
      </div>

      <div class="specs">
        <div class="spec"><span class="k">Rekkevidde</span><span>{{ car.rekkeviddeWltpKm }} km</span></div>
        <div class="spec"><span class="k">Lading</span><span>~{{ car.ladehastighetKw }} kW</span></div>
        <div class="spec"><span class="k">Effekt</span><span>{{ car.effektHk }} hk</span></div>
        <div class="spec"><span class="k">Hengervekt</span><span>{{ car.hengervektKg }} kg</span></div>
        <div class="spec"><span class="k">Bagasjerom</span><span>{{ car.bagasjeromL }} L</span></div>
        <div class="spec"><span class="k">Garanti</span><span>{{ garantiTekst(car.garantiMnd, car.garantiKm) }}</span></div>
      </div>

      <div class="card-actions">
        <RouterLink class="btn" :to="{ name: 'detail', params: { id: car.id } }">Detaljer</RouterLink>
        <a class="btn secondary" :href="car.finnUrl" target="_blank" rel="noopener">FINN</a>
      </div>
    </article>
  </section>

  <p v-if="filtrerte.length === 0" class="note">Ingen biler matcher filteret.</p>
</template>
