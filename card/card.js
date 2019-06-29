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
    isShowLike: Boolean,
    isLiked: {
      type: Boolean,
      observer: function () { this.setData({ isLiked: this.properties.isLiked }); }
    },
    likeNumber: Number,
    isShowUnlike: Boolean,
    unlikeNumber: Number,
    isUnliked: {
      type: Boolean,
      observer: function () { this.setData({ isUnliked: this.properties.isUnliked }); }
    },
    isShowDelete: Boolean,
    tag: String,
    tagColor: String,
    // ignore the property since hide the share button
    // isShowShare: {
    //   type: Boolean,
    //   value: true,
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isMoreText: false,
    isLiked: false,
    isUnlike: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showMoreText() {
      this.setData({ isMoreText: !this.data.isMoreText });
    },

    handleLike() {
      this.setData({ isLiked: !this.data.isLiked, likeNumber: this.data.likeNumber++ });
      this.triggerEvent('like', {isLiked: this.data.isLiked});
    },

    handleUnlike() {
      this.setData({ isUnliked: !this.data.isUnliked });
      this.triggerEvent('unlike', {isUnliked: this.data.isUnliked});
    },

    handleDelete() {
      this.triggerEvent('delete');
    }

    // ignore the function since the share button be hidden
    // handleShare() {
    //   this.triggerEvent('share');
    // }
  }
})
