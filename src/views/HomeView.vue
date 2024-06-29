<template>
  <div class="proof-tag-view">
    <div class="header">
      <div class="flag-container">
        <v-img src="../assets/cn.svg" alt="China Flag" class="flag" />
      </div>
      <div class="menu-icon">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
    <div class="search-container">
      <input type="text" placeholder="参考资料来验证" class="search-input" />
      <button class="search-button">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div class="social-icons">
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-linkedin-in"></i>
    </div>
    <div class="footer">
      <v-img src="@/assets/prooftag-logo.png" alt="ProofTag Logo" class="logo" />
      <p>Copyright © 2022 • ALL RIGHTS RESERVED • PROOFTAG</p>
    </div>
    <div class="bubbles">
      <div v-for="n in 30" :key="n" class="bubble"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.proof-tag-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background: linear-gradient(to bottom, #4d57c7, #2a2a72);
  color: white;
  position: relative;
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: flex-start; /* 从左侧开始排列子元素 */
  align-items: center;
  width: 100%;
  padding: 20px;
}

.flag-container {
  flex-grow: 1; /* 使容器填充所有可用空间，推动其他元素到右侧 */
}

.flag {
  height: 60px; /* 增加旗帜的大小 */
}

.menu-icon {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #d4a374;
  border-radius: 50%;
  padding: 5px;
}

.bar {
  width: 70%;
  height: 3px;
  background: white;
}

.search-container {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.search-input {
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  width: 300px;
}

.search-button {
  margin-left: -40px;
  background: none;
  border: none;
  cursor: pointer;
  color: #d4a374;
  font-size: 16px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.social-icons i {
  font-size: 24px;
  height: 50px;
  color: #d4a374;
}

.footer {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  height: 40px;
}

.bubbles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}

.bubble {
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  position: absolute;
  animation: float 10s infinite;
}

.bubble:nth-child(odd) {
  animation-duration: 12s;
}

@keyframes float {
  0% {
    transform: translateY(0) scale(1);
  }
  100% {
    transform: translateY(-1000px) scale(0.5);
  }
}
</style>
