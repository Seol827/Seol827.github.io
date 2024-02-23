<script lang="ts" setup>
import { EditPen, Loading, Message, Box } from '@element-plus/icons-vue';
import { Vue3Lottie } from 'vue3-lottie';

const redirectToURL = (url: string) => {
  window.open(url, '_blank');
};

const profileUrl = '/assets/profile2.jpg';
</script>

<template>
  <client-only>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu active-text-color="#ffd04b" class="el-menu-vertical-demo" default-active="1" text-color="#fff">
          <div class="w-full flex flex-col items-center justify-center pt-10 pb-5">
            <el-avatar :size="150" :src="profileUrl" />
            <div class="mt-3 font-honk text-[30px]">SEORA</div>
            <div class="mt-2 font-protest text-white">Front-end Developer</div>
          </div>
          <el-menu-item index="1">
            <el-icon><EditPen /></el-icon>
            <span class="font-semibold">Logs</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><Loading /></el-icon>
            <span class="font-semibold">Trouble Shooting</span>
          </el-menu-item>
          <div id="icons" class="text-white flex items-center">
            <img
              src="/icons/github-mark-white.png"
              class="w-8 h-8 opacity-70 hover:opacity-100 hover:cursor-pointer"
              alt=""
              @click="redirectToURL('https://github.com/Seol827')"
            />
            <el-icon
              :size="31"
              class="ml-5 opacity-70 hover:opacity-100 hover:cursor-pointer"
              @click="
                redirectToURL(
                  'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=seorachoi08@gmail.com&su=Important:%20[Brief Summary]&body=To.%20Seora',
                )
              "
              ><Message
            /></el-icon>
            <el-popover placement="top-start" trigger="hover" content="legacy blog 🚀">
              <template #reference>
                <el-icon
                  :size="31"
                  class="ml-5 opacity-70 hover:opacity-100 hover:cursor-pointer"
                  @click="redirectToURL('https://velog.io/@stella08/posts')"
                  ><Box
                /></el-icon>
              </template>
            </el-popover>
          </div>
        </el-menu>
      </el-col>
    </el-row>
    <Vue3Lottie
      animation-link="https://lottie.host/1eed891a-44c0-4f3d-8e9b-3def0166fdf7/MrIYRm9KLe.json"
      :height="200"
      :width="200"
    />
  </client-only>
</template>

<style lang="postcss" scoped>
.el-menu {
  height: 100vh !important;
  width: 250px;

  --el-menu-border-color: none !important;
  --el-menu-bg-color: none !important;
  --el-menu-hover-bg-color: none !important;
}

#icons {
  position: absolute;
  bottom: 3%;
  padding: 0 3px 0 3px;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
