<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <div class="container">
      <h1>⚡ Ny kjerre – elbil-oversikt</h1>
      <p>Aktuelle kandidater fra FINN-favorittene. Filtrer på merke og modell, og se vurderingen (1–10⭐, der 10 = beste kjop).</p>
    </div>
  </header>
  <main class="container">
    <RouterView />
  </main>
</template>
