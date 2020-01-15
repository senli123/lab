<template>
    <div id="dataset" >
      <el-row style="height:40px"></el-row>
    <el-row>
      <el-col :span="12">
        <el-card  class="buttom">
          <img :src="require('../assets/data/BLVD.png')" style="height:300px;width: 100%;display: block;">
          <div style="padding: 14px;">
            <span style=" font-family:Georgia,serif;font-size:18px">5D Semantics Benchmark for Autonomous Driving (ICRA, 2019) [<a style="color:#ff0000" href="https://github.com/VCCIV/BLVD/">Datasets</a>]</span>

          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card  class="buttom">
          <img :src="require('../assets/data/TIE.png')" style="height:300px;width: 100%;display: block;">
          <div style="padding: 14px;">
            <span style=" font-family:Georgia,serif;font-size:18px">Tunnel Brightness Compensation (IEEE-TIE, 2018) [<a style="color:#ff0000" href="https://pan.baidu.com/s/1yJGj2vFDCAk-dTiFkamkrA">Datasets and Results</a>]</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-card  class="buttom">
          <img :src="require('../assets/data/AAAI.png')" class="image">
          <div style="padding: 14px;">
            <span style=" font-family:Georgia,serif;font-size:18px">Multi-saliency Detection (AAAI,2018;JEI,2017) [<a style="color:#ff0000" href="https://pan.baidu.com/s/1c20FLao">Datasets</a>]</span>
    
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card  class="buttom">
          <img :src="require('../assets/data/VReID.png')" class="image">
          <div style="padding: 14px;">
            <span style=" font-family:Georgia,serif;font-size:18px">Tunnel-VReID-dataset (NEURUCOM,2020) [<a style="color:#ff0000" href="https://github.com/ZHU912010/Tunnel-VReID-dataset">Datasets</a>]</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
     <el-row>
      <el-col :span="12">
        <el-card  class="buttom">
          <img :src="require('../assets/data/DADA.png')" style="height:300px;width: 100%;display: block;">
          <div style="padding: 14px;">
            <span style=" font-family:Georgia,serif;font-size:18px">DADA-2000 (ITSC,2019) [<a style="color:#ff0000" href="https://pan.baidu.com/s/1c20FLao">Datasets</a>]</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card  class="buttom">
          <img :src="require('../assets//data/sensor.png')" style="height:300px;width: 100%;display: block;">
          <div style="padding: 14px;">
            <span style=" font-family:Georgia,serif;font-size:18px">Drive-Anomaly-106 (Sensors,2019) [<a style="color:#ff0000" href="https://github.com/ZHU912010/Driving-Anomaly-Detection">Datasets</a>]</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
      <!-- <el-row>
            <el-col :span="3">
             <div class="grid-content">
                  <el-button type="danger">Selected Publications</el-button>
             </div>
            </el-col>
        </el-row>
        <el-row style="height:60px"></el-row>
        <ol>
            <li class="grid-content2">5D Semantics Benchmark for Autonomous Driving [<a style="color:#ff0000" href="https://github.com/VCCIV/BLVD/">Datasets</a>]</li>
            <li class="grid-content2">JTunnel Brightness Compensation [<a style="color:#ff0000" href="https://pan.baidu.com/s/1yJGj2vFDCAk-dTiFkamkrA">Datasets and Results</a>]</li>
            <li class="grid-content2">Multi-saliency Detection [<a style="color:#ff0000" href="https://pan.baidu.com/s/1c20FLao">Datasets</a>]</li>
           
        </ol> 
        </div> -->
    </div>
</template>

<script>

export default {
  data() {
    return {
currentDate: new Date()

    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
 .bottom {
    padding: '0px';
    margin-top: 13px;
    line-height: 12px;
  }


  .image {
    height:400px ;
    width: 100%;
    display: block;
  }
  .bottom {
    margin-top: 1px;
    line-height: 5px;
  }
 .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>
