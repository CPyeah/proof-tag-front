<template>
  <div class="header">
    <div class="left-buttons">
      <button class="icon-button">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path fill="currentColor" d="M280.37 148.26L96 300.11V464c0 26.51 21.49 48 48 48h112v-96c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16v96h112c26.51 0 48-21.49 48-48V300.11l-184.37-151.85c-7.66-6.31-18.69-6.31-26.35 0zM571.6 251.47l-26.6-21.81V44.01c0-6.63-5.37-12-12-12h-72c-6.63 0-12 5.37-12 12v51.82L318.47 9.37c-18.74-15.42-45.2-15.42-63.94 0L4.34 251.47c-7.09 5.83-8.02 16.19-2.19 23.28l25.5 30.97c5.83 7.09 16.19 8.02 23.28 2.19L288 72.6l237.06 235.31c7.09 5.83 17.45 4.9 23.28-2.19l25.5-30.97c5.83-7.09 4.9-17.45-2.19-23.28z"></path>
        </svg>
      </button>
      <button class="icon-button">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M502.3 190.8L327.4 338.1c-22.1 19.2-53.8 19.2-75.9 0L9.7 190.8c-10.9-9.5-27.3-8.5-36.8 2.4s-8.5 27.3 2.4 36.8l241.3 210c28.7 25 70.6 25 99.3 0l241.3-210c10.9-9.5 11.9-25.9 2.4-36.8s-25.9-11.9-36.8-2.4zM64 480h384c35.3 0 64-28.7 64-64V192c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v224c0 35.3 28.7 64 64 64z"></path>
        </svg>
      </button>
    </div>
    <input type="text" class="search-input" placeholder="下一个认证" />
    <div class="right-button">
      <button class="icon-button">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7l-99.6-99.6c28.3-35.3 45.6-79.7 45.6-128.4C451 97.2 353.8 0 231 0S11 97.2 11 214.7 108.2 429.3 231 429.3c48.7 0 93.1-17.3 128.4-45.6l99.6 99.6c10.1 10.1 26.6 10.1 36.8 0l9.2-9.2c10.1-10.1 10.1-26.6 0-36.8zM231 370.7c-86 0-155.9-69.9-155.9-155.9S145 58.8 231 58.8s155.9 69.9 155.9 155.9-69.9 155.9-155.9 155.9z"></path>
        </svg>
      </button>
    </div>
  </div>
  <div class="container">
    <div class="main-content">
      <div class="fiber-tag">
        FiberTag®
      </div>
      <div class="verify">
        FEU10AAAA19569
      </div>
      <div class="product-image">
        <v-img src="../assets/validate-img.png" alt="FiberTag"/>
      </div>
      <div class="product-image product-image-card">
        <v-img src="../assets/ethereum.png" alt="Ethereum"/>
      </div>
      <div class="product-info">
        <h1>PROFHILO® 五点逆龄提升针</h1>
        <p style="font-weight: 800;">五点逆龄提升针</p>
      </div>
    </div>
    <div class="verification-details">
      <h2>IBSA PROFHILO®</h2>
      <p style="margin-top: 20px;">基于稳定透明质酸，旨在进行皮肤重塑和治疗皮肤松弛，而不仅仅是填充皱纹和细纹。</p>
      <p style="margin-top: 20px;" class="check-desc">查看以下结果获得您的产品验证信息。</p>
      <ul style="margin-top: 20px;">
        <li>防伪编号: FEU10AAAA19569</li>
        <li>防伪激活日期: 19/03/2024</li>
        <li>已验证次数: 0</li>
        <li>EAN 码:</li>
        <li>网站域名: prooftag.com</li>
      </ul>
      <p>警告！</p>
      <div class="check-desc" style="margin-top: 30px;">如出现以下情况请报告至官方防伪验证中心：</div>
      <ul class="check-desc-li">
        <li>此网页显示的防伪编号与实物不一致。</li>
        <li>验证次数不为0。</li>
        <li>网页域名不是 prooftag.com.</li>
      </ul>
      <v-img src="../assets/product-box.png" alt="Product Box" class="product-box"/>
      <div class="footer">
        <p>EUFONTAINE CENTRE FOR MARKET SURVEILLANCE - 75008 PARIS - France</p>
        <p>电话：</p>
        <p>电子邮件：info@eu-mkts.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessView',
}
</script>

<style scoped>
.header {
  display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f8f8f8;
    padding: 6px 6px;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.left-buttons {
  display: flex;
  gap: 10px;
}

.right-button {
  display: flex;
  gap: 10px;
}

.icon-button {
  width: 40px;
  height: 40px;
  background-color: #d4a374;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
}

.icon-button svg {
  width: 20px;
  height: 20px;
  color: #fff;
}

.search-input {
  flex: 1;
    max-width: 300px;
    font-size: 20px;
    padding: 10px;
    border: none;
    border-radius: 20px;
    /* margin: 0 20px;
}

.container {
  padding-top: 60px !important; /* 根据 .header 的高度调整，防止内容被遮挡 */
  padding: 20px;
}

.fiber-tag {
  display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: black;
    margin-top: 88px;
    font-size: 50px;
}

.verify {
  display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 15px;
}

.nav {
  display: flex;
  gap: 10px;
}

.home-btn, .message-btn {
  width: 40px;
  height: 40px;
  background-color: #d8a15c;
  border: none;
  border-radius: 50%;
}

.verify {
  display: flex;
  align-items: center;
}

.verify-btn {
  background-color: #d8a15c;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
}

.main-content {
  text-align: center;
  margin-top: 5px;
  line-height: 1.8; /* 增加行间距 */
}

.product-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 50px;
}

.product-image-card {
  border-radius: 20px;
    box-shadow: 0 7px 8px rgba(0, 0, 0, 0.2);
    margin-top: 30px;
}

.product-image > .v-img {
  width: 70%;
}

.check-desc {
  font-size: 16px; /* 字体大小调整为16px */
  font-weight: bold; /* 字体加粗 */
}

.product-image img:first-child {
  width: 100%;
}

.ethereum-logo {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.product-info {
  margin-top: 20px;
  font-size: 12px; /* 字体大小调整为12px */
  text-align: left; /* 内容左对齐 */
  line-height: 1.5; /* 行间距为1.5倍的字体大小 */
  font-weight: bold; /* 字体加粗 */
  font-family: 'Heiti SC', 'Microsoft YaHei', sans-serif; /* 设置字体为黑体 */
}

.verification-details {
  margin-top: 20px;
  font-size: 14px; /* 调整字体大小为14px */
  line-height: 1.5; /* 行间距为1.5倍的字体大小 */
  text-align: left; /* 添加这一行 */
}

.verification-details ul {
  list-style: none;
  padding: 0;
}

.verification-details ul li {
  margin-bottom: 10px;
}
.check-desc-li {
  margin-top: 20px;
  margin-bottom: 20px;
  list-style: disc inside; /* 设置列表项前的标记为黑点 */
  margin-left: 30px; /* 设置列表项向左缩进，以便黑点可见 */
}

.product-box {
  display: block; /* 使img标签表现为块级元素，以便可以应用margin属性 */
  margin: 15px auto; /* 上下各15px空隙，左右自动（实现居中） */
}

.footer {
  text-align: center; /* 内容居中 */
  border-top: 1px solid #ccc; /* 在顶部添加一条灰色的横线 */
  padding-top: 20px; /* 在横线上方添加一些间距 */
}
</style>
