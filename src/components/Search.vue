<template>
  <div
    class="flex flex-col gap-8 md:gap-6 min-w-[256px]"
    :style="
      { 'margin-top': useStore().compactMode ? '2rem' : 0 }
    "
    @keydown.tab.prevent="switchEngine($event)"
  >
    <div class="flex flex-row items-center" :class="useStore().compactMode ? 'mb-2' : ''">
      <div id="spacer" class="flex-1" v-if="useStore().compactMode"></div>
      <img
        :src="useStore().theme == Theme.light ? '/assets/quasar_logo.svg' : '/assets/quasar_logo_dark.svg'"
        class="w-40 md:w-60 select-none"
      />
      <div id="spacer" class="flex-1"></div>
      
    </div>
    <SearchBar
      :iconName="useStore().engine!.iconName"
      :url-pattern="useStore().engine!.urlPattern"
    />
    <EngineList v-if="!useStore().compactMode"></EngineList>
  </div>
</template>

<script setup lang='ts'>
import 'boxicons'
import SearchBar from './SearchBar.vue';
import EngineList from './EngineList.vue';
import useStore from '../store/index'
import router from '../router'
import { Theme } from '../model/Setting'
import boxIcon from '../widgets/box-icon.vue';

// 切换引擎
function switchEngine(event?: KeyboardEvent) {
  useStore().switchEngineByAdd(event?.shiftKey ? -1 : 1)
}



</script>
