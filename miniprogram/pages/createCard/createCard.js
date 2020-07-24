// miniprogram/pages/createCard/createCard.wxml.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  submitCard: function(event) {
    // event.detail.value returns object with name value pairs
    wx.cloud.callFunction({
      name: 'saveFlashCard',
      data: event, 
      success: (res) => {
        console.log(res);
        wx.navigateTo({
          url: '/pages/index/index',
        })
      },
      fail: console.error 
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})