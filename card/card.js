// dist/cards/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    headerImg: String,
    title: String,
    time: String,
    img: String,
    context: String,
    moreText: String,
    isLiked: {
      type: Boolean,
      observer: function () { this.setData({ isLiked: this.properties.isLiked }); }
    },
    isShowShare: {
      type: Boolean,
      value: true,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isMoreText: false,
    isLiked: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showMoreText() {
      this.setData({ isMoreText: !this.data.isMoreText });
    },

    handleLike() {
      this.setData({ isLiked: !this.data.isLiked });
      this.triggerEvent('like');
    },

    handleShare() {
      this.triggerEvent('share');
    }
  }
})
