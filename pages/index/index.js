Page({
  data: {
    code: "",
    start_date:"",
    end_date:"",
    codeUrl:""
  },

  bindStartChange: function(e) {
    this.setData({
      start_date:e.detail.value
    })
  },

  bindEndChange: function(e) {
    this.setData({
      end_date:e.detail.value
    })
  },

  bindKeyInput: function(e) {
    this.setData({
      code:e.detail.value
    })
  },

  search:function() {
    let that = this
    wx.request({
      url: 'http://33d853884q.oicp.vip/search/?code='+this.data.code+'&start_date='+this.data.start_date+'&end_date='+this.data.end_date,
      method:"GET",
      responseType:"arraybuffer",
      success:function(resp) {
        console.log(resp)
        let url = 'data:image/png;base64,' +wx.arrayBufferToBase64(resp.data)
        that.setData({
          codeUrl :url,
          show :true
        })
      }
    })
  },

  clickImg:function(event){
    let that = this
    wx.previewImage({
      current:that.data.codeUrl,
      urls:[that.data.codeUrl]
    })
  }
})