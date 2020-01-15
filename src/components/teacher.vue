<template>
    <div id="teacher" style="font-family:Georgia,serif;font-size:20px">
    <el-row>
        <el-col :span="6">
           <el-row style="height:80px"></el-row>
            <div>
             <img :src="require('../assets/fang.png')" :style="{width: '200px', height: '260px'}">
            </div>
        </el-col>
        <el-col :span="18">
            <el-row>
                <!-- <el-col ><div class="grid-content "><b>Jianwu Fang</b></div></el-col> -->
            </el-row>
            <el-row style="height:40px"></el-row>
             <el-row>
                <el-col ><p style="text-indent: 2em;line-height:30px;text-align: justify;">Jianwu Fang is an Associate Professor in School of Electronic and Control Engineering, 
                  Chang’an University, leading the LOTVS. He received the Ph.D. degree in SIP 
                  (signal and information processing) from Center of OPTical IMagery Analysis and Learning (OPTIMAL), 
                  University of Chinese Academy of Sciences, China in 2015 (supervisor: Prof Yuan Yuan 
                  (National Science Fund for Distinguished Young Scholars)), 
                  and joined into Chang’an University in July, 2015. 
                  From October in 2016 to December in 2019, he was a post-doctorial researcher and worked with Prof. 
                  Jianru Xue (Professor of Cheung Kong Scholars Programme of China) for about 3 years in the Institute of Artificial Intelligence and Robotics (IAIR), 
                  Xi’an Jiaotong University. His research interests include computer vision and pattern recognition. 
                  He has published over 30 papers on top-ranked journals and conferences, such as IEEE-TCYB, IEEE-TIE, IEEE-TCSVT, AAAI, ICRA, etc.
                  [ <router-link style="color:#ff0000" tag="a" target="_blank" to="/use">CV</router-link>]</p></el-col>
            </el-row>
            
        </el-col>
    </el-row>
    <el-row>
         <!-- Honors and Awards -->
        <!-- <el-row>
            <el-col :span="3">
             <div  class="grid-content">
                  <el-button type="success">Honors and Awards</el-button>
             </div>
            </el-col>
        </el-row>
        <el-row>
                <el-col :span="1"><div class="grid-content">•	2015</div></el-col>
                <el-col :span="12"><div class="grid-content">Outstanding Graduate of University of Chinese Academy and Sciences</div></el-col>
        </el-row>
	    <el-row>
                <el-col :span="1"><div class="grid-content">•	2014</div></el-col>
                <el-col :span="12"><div class="grid-content">Zhu Li Yuehua Outstanding Doctoral Scholarship, Chinese Academy of Sciences</div></el-col>
        </el-row>   -->
            <!-- Professional Activities -->
        <el-row>
            <el-col :span="3">
             <div  class="grid-content">
                  <el-button type="primary">Professional Activities</el-button>
             </div>
            </el-col>
        </el-row>
        <el-row style="height:60px"></el-row>
        <ul>
            <li class="grid-content3"><b>Membership:</b></li>
             <ul>
            <li class="grid-content3">Local Chair, Inaugural Meeting of Technical Committee on Hybrid-augmented intelligence, Chinese Association of Automation (CAA)</li>
            <li class="grid-content3">China Computer Federation (CCF) Member</li>
            <li class="grid-content3">Chinese Association for Artificial Intelligence Member</li>
             </ul>
              <li class="grid-content3"><b>Program Committee Member (15+ times)：</b></li>
            <ul>
            <li class="grid-content3">IJCAI-PRICAI,ICRA, ITSC, ICPR, ACMMM, BMVC...</li>
            </ul>
             <li class="grid-content3"><b>Regular Reviewer：</b></li>
            <ul>
            <li class="grid-content3">IEEE Transactions on Cybernetics (IEEE)</li>
            <li class="grid-content3">IEEE Transactions on Circuits and Systems for Video Technology (IEEE)</li>
            <li class="grid-content3">IEEE Transactions on Intelligent Transportation Systems (IEEE)</li>
            <li class="grid-content3">Neurocomputing (Elsevier)</li>
            <li class="grid-content3">IEEE Geoscience and Remote Sensing Letters (IEEE)</li>
            <li class="grid-content3">SCIENCE CHINA Information Sciences</li>
            <li class="grid-content3">International Journal of Image and Graphics</li>
            </ul>
        </ul>
         <!-- Grants (10+) -->
        <el-row>
            <el-col :span="3">
             <div  class="grid-content">
                  <el-button type="danger">Funded Grants</el-button>
             </div>
            </el-col>
        </el-row>
        <el-row style="height:60px"></el-row>
        <ul>
            <li class="grid-content3"><b>As a faculty at CHD:</b></li>
            <ul>
                <li class="grid-content3">1/2017-12/2019, ’Anomaly detection for multiple heterogeneous videos via constructively high-order context learning’, <b>National Natural Foundation of China</b>. Grant-61603057, RMB 220,000. <b>role: PI</b></li>
                <li class="grid-content3">1/2017-12/2018, ’Vehicle Re-identification in Tunnels Scenes with Group-wise Structure Modeling and Learning’, <b>Natural Science Foundation of Shaanxi Province</b>, Grant-2017JQ6041, RMB 30,000. <b>role: PI</b></li>
                <li class="grid-content3">1/2020-12/2021, ’Driving Anomaly Prediction Guided by Driver Attention’, <b>The Fundamental Research Funds for the Central Universities</b>, Grant, RMB 150,000. <b>role: PI</b></li>
            </ul>
            <li class="grid-content3"><b>As a Post Doctoral Researcher at XJTU:</b></li>
            <ul>
                <li class="grid-content3">01/2017-12/2018, ’Intention Prediction of Traffic Participants by Modeling the Context Evolution of Multi-source Vision Information’, <b>Chinese Postdoctoral Science Foundation</b>. Grant-2017M613152, RMB 50,000. <b>role: PI</b></li>
                <li class="grid-content3">06/2016-06/2020, ’Deep Perception of Big Vision Data’, <b>National Key Research and Development Project</b>. RMB 14.46 million, <b>role: Key PP</b></li>
                <li class="grid-content3">01/2018-12/2020, ’Human-like Understanding and Autonomous Driving in Complex Scenes’, <b>National Natural Key Foundation of China</b>. RMB 2.2 million, <b>role: Key PP</b></li>
               
            </ul>
        </ul>

    </el-row>
 
    </div>
</template>

<script>

export default {
    data() {
        return {
         activeName: 'second'

        };
    },
    methods:{
          handleClick(tab, event) {
        console.log(tab, event);
      },
      openpdf(){
        window.open('../assets/CV.pdf', "_blank")
      }


    }
};
</script>

<style lang="scss"  scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 20px;
    max-height: 20px
  }
   .grid-content1 {
    border-radius: 4px;
    min-height: 50px;
    max-height: 60px
  }
    .grid-content2 {
    list-style-type:demical;
    text-align: left;
    line-height: 2;
    border-radius: 4px;
    min-height: 50px;
    max-height: 60px
  }
      .grid-content3 {
    list-style-type:demical;
    text-align: left;
    line-height: 2;
    border-radius: 4px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .dbubble-text {
display: inline-block;
font-size: 14px;
color: #303030;
line-height: 2;
font-family: "微软雅黑";
width: 100%;
height: 30px;
text-align: left;
word-wrap: break-word;
word-break: break-all;
// overflow: hidden;
}
</style>
