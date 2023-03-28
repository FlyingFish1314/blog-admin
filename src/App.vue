<template>
  <el-config-provider :size="globalComSize" :locale="zhCn">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view> </router-view>
  </el-config-provider>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useSettingStore } from '@/store/modules/setting'
// 配置element中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const SettingStore = useSettingStore()
// 配置全局组件大小
const globalComSize = computed(
  (): string => SettingStore.themeConfig.globalComSize
)
</script>

<style lang="scss"></style>
