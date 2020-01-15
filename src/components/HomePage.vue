<template>
  <div class="hello">
    <el-container>
        <el-header>
          <img :src="require('../assets/logo.jpg')" :style="{width: '300px', height: '60px'}">
        </el-header>
        <el-main>
        <!-- 菜单 -->
            <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#CD0000"
                text-color="#fff"
                active-text-color="#ffd04b"
               >
                <el-menu-item index="1" style="font-size:20px">Home</el-menu-item>
                <el-submenu index="2" >
                    <span slot="title" style="font-size:20px">People</span>
                    <el-menu-item index="21" style="font-size:20px; font-family:Georgia,serif;">Jianwu Fang</el-menu-item>
                    <el-menu-item index="22" style="font-size:20px;font-family:Georgia,serif;">Member</el-menu-item>
                </el-submenu>
                  <el-menu-item index="3" style="font-size:20px">Research</el-menu-item>
                  <el-menu-item index="4" style="font-size:20px">Publications</el-menu-item>
                  <el-menu-item index="5" style="font-size:20px">Data & Codes</el-menu-item>
                  <el-menu-item index="6" style="font-size:20px">News</el-menu-item>
            </el-menu>
            <!-- 老师信息 -->
            <div style="margin-left:15%;margin-right:15%" v-if="this.select ==='21'">
                <teacher/>
            </div>
            <!-- 学生信息 -->
            <div style="margin-left:15%;margin-right:15%" v-else-if="this.select ==='22'">
                <member />
            </div>
             <!-- 研究方向 -->
            <div style="margin-left:15%;margin-right:15%" v-else-if="this.select ==='3'">
                <research/>
            </div>
             <!-- 论文发表 -->
            <div style="margin-left:15%;margin-right:15%" v-else-if="this.select ==='4'">
                <paper/>
            </div>
             <!-- 数据集 -->
            <div style="margin-left:15%;margin-right:15%" v-else-if="this.select ==='5'">
                <dataset/>
            </div>
             <!-- 新闻 -->
            <div style="margin-left:15%;margin-right:15%" v-else-if="this.select ==='6'">
                <news/>
            </div>
             <!-- 主页 -->
             <div v-else >
                <el-carousel :interval="4000" type="card" :height="'470px'">
                  <el-carousel-item v-for="item in BannerImg" :key="item.id">
                     <img  :src="item.idView" class="bannerImg" />
                    <!-- <h3>{{ item }}</h3> -->
                  </el-carousel-item>
                </el-carousel>
                <el-row>
              <el-col :span="8">
                <p style="text-indent: 2em;line-height: 1.5;text-align: justify;margin-left:10%;  font-size: 20px; font-family:Georgia,serif;"><b>Lab of Traffic Vision Safety Research (<font color="#FF5151">L</font><font color="#02C874">O</font><font color="#46A3FF">T</font><font color="#FF8040">V</font><font color="#C07AB8">S</font>)</b> is committed to focus on the research of promising visual image/video analysis problems that can adapt to all-weather and multi weather conditions, and are oriented to <font color="#66B3FF">safe driving and visual surveillance systems</font>, such as the detection, tracking, interaction, re-identification, intention/trajectory prediction, abnormal event/accident detection/prediction involved dynamic traffic participants.</p>
              </el-col>
              <el-col :span="8" >
                  <ul>
                    <li class="grid-content2"><b>News:</b></li>
                  <ul>
                    <li class="grid-content3">We are hiring two students majoring in automation, computer science, mathematics for pursuing Master degree in 2020. </li>
                    <li class="grid-content3">One paper was accepted by Meurocomputing. Congratulations for Rixing Zhou.</li>
                    <li class="grid-content3">One paper was accepted by AAAI2020. Congratulations!</li>
                  </ul>
                  </ul>
              </el-col>
                  <el-row style="height:60px"></el-row>
               <el-col :span="8" class="rightbox">
                <ul>
                    <li class="grid-content2">Address: Nan'er Huan Rd, Xi'an 710064, Shaanxi, P.R. China</li>
                    <li class="grid-content2">Tel: (86) 029 82334880</li>
                    <li class="grid-content2">Email: j.w.fangit@gmail.com; fangjianwu@chd.edu.cn</li>
                    
                </ul>
              </el-col>
            </el-row>
            </div>
        </el-main>
         <el-footer><time class="time">{{ currentDate }}</time></el-footer>
    </el-container>
  </div>
</template>

<script>
import Teacher from '../components/teacher'
import Member from '../components/member'
import Dataset from '../components/dataset'
import Paper from '../components/paper'
import Research from '../components/research'
import News from '../components/news'
export default {
  components: {
    Teacher,
    Member,
    Dataset,
    Paper,
    Research,
    News
  },
  data () {
    return {
      select: '',
      activeIndex2: '1',
       currentDate: new Date(),
        bannerHeight:"",
       BannerImg:[
          {id:1,idView:require('../assets/home/logo1.jpg')},
           {id:2,idView:require('../assets/home/2020.png')},
            {id:3,idView:require('../assets/home/2019.jpg')},
             {id:4,idView:require('../assets/home/nanhu.png')},
             {id:5,idView:require('../assets/home/lijie.png')},
             {id:6,idView:require('../assets/home/DADA.png')}
        ]

    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.select = key
      console.log(this.select)
      if (key === '22') {
        this.getstu()
      }
    },
    // setSize: function () {					
    //    console.log(this.bannerHeight)				    
    //    this.bannerHeight = 740 / 2650 * this.screenWidth				    
    //    if(this.bannerHeight > 740) this.bannerHeight = 740				    
    //    if(this.bannerHeight < 600) this.bannerHeight = 600				  
    //    },
    // getstu() {
    //   this.$http.get('api/backdata/stu/').then(result => {
    //     //------------------------数据转换-----------------------
    //         var fdata=result.body
    //         var dic1 = {}
    //         var dic2 = {}
    //         for ( var i=0;i<fdata.length;i++){
    //         if (fdata[i]['year'][0]=="b"){
    //             var year=fdata[i]['year'].split("b")[1]
    //             if (dic1=={} || !dic1.hasOwnProperty(year)){
    //                dic1[year]=[fdata[i]]
    //             }
    //             else{
    //                   dic1[year].push(fdata[i])
    //             }
    //         }else{
    //             var year=fdata[i]['year'].split("s")[1]
    //             if (dic2=={} || !dic2.hasOwnProperty(year)){
    //                dic2[year]=[fdata[i]]
    //             }
    //             else{
    //                   dic2[year].push(fdata[i])
    //             }

    //         }
    //     }
    //      //------------------------html解析-----------------------
    //       var bh='<div class="box">'
    //        for ( var year in dic1){
    //            bh=bh+'<p>b'+year+'</p>'
    //            for( var i=0;i<dic1[year].length;i++){
    //                    if(i!=0){
    //                        bh=bh+'</ul>'
    //                    }
    //                    bh=bh+'<ul><li><img src="'+String(dic1[year][i]['site'])+'" width=200px height=300px ></li>'+ 
    //                    '<li><ul><b>'+dic1[year][i]['name']+'</b></ul><ul>study:'+dic1[year][i]['study']+'</ul></li>'
    //            }
    //            bh=bh+'</ul>'
    //        } 
    //         this.bdata=bh+'</div>'
    //       //------------------------html解析-----------------------
    //       var sh='<div class="box">'
    //        for ( var year in dic2){
    //            sh=sh+'<p>s'+year+'</p>'
    //            for( var i=0;i<dic2[year].length;i++){
    //                    if(i!=0){
    //                        sh=sh+'</ul>'
    //                    }
    //                    sh=sh+'<ul><li><img src="'+String(dic2[year][i]['site'])+'" width=200px height=300px ></li>'+ 
    //                    '<li><ul>name:'+dic2[year][i]['name']+'</ul><ul>study:'+dic2[year][i]['study']+'</ul></li>'
    //            }
    //            sh=sh+'</ul>'
    //        } 
    //         this.sdata=sh+'</div>'
    //   })
    // }
  },
   mounted(){
      //  this.setSize();				  
      //  const that = this;				  
      //  window.addEventListener('resize', function() {				    
      //    that.screenWidth = $(window).width();				    
      //    that.setSize();				  }, false);

      },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
    background-color: 	#FFFFFF;
    height: 100px;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
  .el-main {
    background-color: 	#FFFFFF;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-menu-demo{
    font-family:Georgia,serif;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .bannerImg{

    width: 100%;

    height: inherit;

    min-height: 300px;

    min-width: 1000px;

  }
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
         .grid-content3 {
            font-size: 20px;
    font-family:Georgia,serif;
    list-style-type:demical;
    text-align: left;
    line-height: 2;
    border-radius: 4px;
  }
           .grid-content2 {
              font-size: 20px;
    font-family:Georgia,serif;
    list-style-type:none;
    text-align: left;
    line-height: 2;
    border-radius: 4px;
  }
  .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.time {
  font-family:Georgia,serif;
    font-size: 15px;
    color: #999;
  }
.rightbox{
   font-size: 20px;
  font-family:Georgia,serif;
  background-color:#99a9bf
}
</style>
