<template>
  <v-app>
    <v-main>
      <v-container class="main-container">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HomeView from './views/HomeView.vue';
import ValidateView from './views/ValidateView.vue';
import SuccessView from './views/SuccessView.vue';

export default {
  name: 'App',
  components: {
    HomeView,
    ValidateView,
    SuccessView
  },
}
</script>

<style>
.main-container {
  text-align: center;
  margin-top: 0px;
  padding: 0px;
}

.header {
  align-items: flex-start; /* 从 center 改为 flex-start 对齐到顶部 */
  justify-content: flex-start; /* 从 center 改为 flex-start 对齐到左边 */
  margin-bottom: 20px;
  width: 100%; /* 确保 header 宽度与父容器相同 */
}

.flag {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.title {
  color: #333;
  font-size: 24px;
}

.content {
  display: flex;
  justify-content: center;
}

.card {
  width: 350px; /* 将宽度从 400px 调整为 350px 使其小一点 */
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); /* 增加阴影深度 */
}

.card-title {
  color: #d88951;
  font-size: 24px;
  margin-bottom: 10px;
  text-shadow: rgb(0, 0, 0) 1px 1px 1px;
}

.code {
  color: #333;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: bold; /* 加黑加粗 */
}

.instruction {
  font-size: 14px; /* 字体大小从 16px 调整为 14px */
  margin-bottom: 20px;
  color: #757575; /* 颜色调整为灰色 */
}

.input-field {
  max-width: 300px;
  margin: 0 auto 20px auto;
  padding: 10px;
  border: 2px solid #dda778; /* 黄色边框 */
  outline: none;
}

.v-btn {
  max-width: 80px; /* 按钮更小 */
  margin: 0 auto;
  background-color: #dda778; /* 按钮背景为黄色 */
  color: white !important; /* 使用 !important 确保文字颜色为白色 */
  font-size: 12px; /* 字体大小调整为更小 */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 添加阴影 */
  text-transform: none; /* 阻止文本转换为大写 */
}
</style>
