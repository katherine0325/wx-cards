// dist/cards/title-card/title-card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img: String,
    title: String,
    titleSize: String,
    context: String,
    isShowBtns: {
      type: Boolean,
      value: false,
    },
    tag: String,
    tagColor: String,
    isShowLike: Boolean,
    likeNumber: Number,
    isLiked: {
      type: Boolean,
      value: false,
      observer: function () { this.setData({ isLiked: this.properties.isLiked }); }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLiked: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLike() {
      this.setData({ isLiked: !this.data.isLiked });
      this.triggerEvent('like');
    },
  }
})
