<template >
  <div
    class="invisible md:visible md:fixed md:z-[100] md:bottom-6 select-text text-sm mt-4 font-medium text-tertiary"
    :class="useStore().compactMode ? 'md:w-[100vw] text-center' : ' md:right-[28px] md:text-right'"
  >
    <p class="my-2">
      © 2020 - 2021 🍓
      <a
        href="http:///bad-strawberry.com"
        v-dot-hover
        target="_blank"
        class="decoration-none hover:underline"
      >Bad Strawberry</a>.
      <span>All rights reserved.</span>
    </p>
    <p>
      <a
        href="https://www.craft.do/s/Gi8HESIcZQsSIY"
        target="_blank"
        v-dot-hover
        class="decoration-none hover:underline"
      >用户协议</a> ·
      <a
        href="https://beian.miit.gov.cn/#/Integrated/index"
        target="_blank"
        v-dot-hover
        class="decoration-none hover:underline"
      >浙 ICP 备 2020033146 号 - 2</a>
    </p>
  </div>
</template>

<script setup lang='ts'>
import useStore from '../store/index'

</script>

<style lang='scss'>
</style>