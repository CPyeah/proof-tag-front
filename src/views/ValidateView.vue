<template>
    <v-app>
      <v-main>
        <v-container class="main-container">
          <div class="container">
          <div class="header">
            <v-img
              src="https://hatscripts.github.io/circle-flags/flags/cn.svg"
              class="flag"
              contain
            ></v-img>
          </div>
          <div class="content">
            <v-card class="card">
              <h1 class="card-title">请填写控制字段</h1>
              <p class="code">验证码：{{ CID }}</p>
              <h3>CCP</h3>
              <p class="instruction">
                5个字母数字字符（要求一个数字，一个小字母和一个大写字母）或（要求一个数字和一个字母）。
              </p>
              <input type="text" class="input-field" placeholder="XXXXX" v-model="code">
              <v-btn @click="handleSubmit">Check</v-btn>
            </v-card>
          </div>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
    import axios from 'axios'; // 引入 axios
    export default {
      name: 'ValidateView',
      data() {
        return {
          code: '',
          CID: ''
        };
      },
      mounted() {
        this.CID = this.$route.query.CID || '';
      },
      methods: {

        async handleSubmit() {
            if (!this.CID || !this.code) {
              alert('CID 和输入字段都不能为空');
              return;
            }
            try {
            // https://proof-tag-server.onrender.com/check?code=0RF9x&CID=OU6BX1QGNTSOMR
            const response = await axios.get(`https://proof-tag-server.onrender.com/check?code=${this.code}&CID=${this.CID}`);
            // console.log(response);
            if (response.data.result == 0) {
              // console.log(response.data.data);
              response.data.data.CID = this.CID;
              this.$router.push({ name: 'success', query: { responseData: JSON.stringify(response.data.data) } });
              // this.$router.push({ name: 'success', params: { responseData: response.data.data. } });
            } else {
              alert('验证失败');
            }
          } catch (error) {
            console.error(error);
            alert('验证失败');
          }
        }

        }
      }
    
  </script>
  
  <style>
  .main-container {
    text-align: center;
    margin-top: 5px;
  }

  .container {
    margin: 10px;
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
  