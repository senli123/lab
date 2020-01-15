<template>
<div class="pdf">
  <pdf 
  style="width:100%"
    v-for="i in numPages"
    :key="i"
    :src="pdfUrl"
    :page="i">
  </pdf>
</div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  name: 'Pdf',
  components:{
      pdf
  },
  data(){
      return {
      pdfUrl: '../../static/CV.pdf',
      numPages:1,
      activeIndex:0,
      }
  },
  mounted: function() {
    this.pdfTask(this.pdfUrl)
  },
  methods: {
      pdfTask(pdfUrl){
        var self = this
        var loadingTask = pdf.createLoadingTask(pdfUrl)  
        loadingTask.then(pdf => {
          self.pdfUrl = loadingTask
          self.numPages = pdf.numPages
        }).catch((err) => {
          console.error('pdf加载失败')
      })
      },
    pdfClick(pdfUrl,index){
      if(index == this.activeIndex)return
      this.activeIndex = index
      this.pdfUrl = null
      this.pdfTask(pdfUrl)
    },
  }
}
</script>