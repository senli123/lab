<template>
    <div id="member" style="font-family:Georgia,serif;">
        <el-row>
            <el-col :span="1">
             <div class="grid-content">
                  <el-button type="success">Ph.D</el-button>
             </div>
            </el-col>
        </el-row>
        <el-row>
          <el-col :span="3.5">
            <img :src="require('../assets/member/zhurixing.jpg')" width=200px height=300px class="image">
            <p style="line-height:10px; "><b>Rixing Zhu</b></p>
            <p style="line-height:10px;"><b>2014-2020</b></p>
          </el-col>
        </el-row>
         <el-row>
            <el-col :span="1">
             <div class="grid-content">
                  <el-button type="danger">Master</el-button>
             </div>
            </el-col>
        </el-row>
        <el-row>
          <el-col :span="3.5" >
            <img :src="require('../assets/member/lisen.jpg')" width=200px height=300px class="image">
            <p style="line-height:10px; "><b>Sen Li</b></p>
            <p style="line-height:10px; "><b>2017-2020</b></p>
          </el-col>
           <el-col :span="3.5" >
            <img :src="require('../assets/member/wanghe.jpg')" width=200px height=300px class="image">
            <p style="line-height:10px; "><b>He Wang</b></p>
            <p style="line-height:10px; "><b>2018-2021</b></p>
          </el-col>
          <el-col :span="3.5" >
            <img :src="require('../assets/member/yandingxin.jpg')" width=200px height=300px class="image">
            <p style="line-height:10px; "><b>Dingxin Yan</b></p>
            <p style="line-height:10px; "><b>2018-2021</b></p>
          </el-col>
          <el-col :span="3.5" >
            <img :src="require('../assets/member/qiao.jpg')" width=200px height=300px class="image">
            <p style="line-height:10px; "><b>Jiahuan Qiao</b></p>
            <p style="line-height:10px; "><b>2018-2021</b></p>
          </el-col>
          <el-col :span="3.5" >
            <img :src="require('../assets/member/zhangyu.jpg')" width=200px height=300px class="image">
            <p style="line-height:10px; "><b>Yu Zhang</b></p>
            <p style="line-height:10px; "><b>2019-2022</b></p>
          </el-col>
          <el-col :span="3.5" >
            <img :src="require('../assets/member/zhuchen.jpg')" width=200px height=300px class="image">
            <p style="line-height:10px; "><b>Chen Zhu</b></p>
            <p style="line-height:10px; "><b>2019-2022</b></p>
          </el-col>
        </el-row>
        <el-row>
            <el-col :span="1">
             <div class="grid-content">
                  <el-button type="primary">Research Collaborators (partial) </el-button>
             </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>

export default {
      // props:["fbdata","fsdata"],
    data() {
        return {
        };
    },
    methods:{
          
    },
    
};
</script>
<style lang="scss" scoped>
// .bg-purple-dark {
//     background: #99a9bf;
//   }
// .grid-content {
//     height:60px ;
//     border-radius: 4px;
   
  // }
// ul li { list-style: none; width:atuo; height:auto; display:inline-block;}
    // .box ul{
    //      height: auto;
    //      display: flex;
    //      flex-direction:row ;
    //      justify-content: center;
    //     }
     
    //  .box ul li{
    //       list-style: none;
    //     overflow:hidden;
    //     width:400px;
    //       }
    .image {
    display: block;
  }
</style>
