<template>
    <div id="researech">
    <el-row style="height:40px"></el-row>
    <el-row>
      <el-col :span="12">
        <el-card  class="buttom">
          <img :src="require('../assets/research/attention.jpg')" style="height:300px;width: 100%;display: block;">
          <div style="padding: 14px;">
            <span style=" font-family:Georgia,serif;font-size:18px"><b>Drver Attention Prediction</b></span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card  class="buttom">
          <img :src="require('../assets/research/accident.png')" style="height:300px;width: 100%;display: block;">
          <div style="padding: 14px;">
            <span style=" font-family:Georgia,serif;font-size:18px"><b>Video Anomaly Detection in Driving/Surveillance Systems</b></span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-card  class="buttom">
          <img :src="require('../assets/research/tra.png')" style="height:300px;width: 100%;display: block;">
          <div style="padding: 14px;">
            <span style=" font-family:Georgia,serif;font-size:18px"><b>Trajectory/Action Prediction in Traffic Scenes</b></span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card  class="buttom">
          <img :src="require('../assets/research/reid.png')" style="height:300px;width: 100%;display: block;">
          <div style="padding: 14px;">
            <span style=" font-family:Georgia,serif;font-size:18px"><b>Vehicle Re-identification</b></span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    </div>
</template>

<script>

export default {
    data() {
        return {
          
        };
    },
    methods:{
    }
};
</script>
<style lang="scss" scoped>
  
  .bottom {
    padding: '0px';
    margin-top: 13px;
    line-height: 12px;
  }


  .image {
    width: 100%;
    display: block;
  }
</style>
