// dist/cards/sale-card/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img: String,
    title: String,
    price: String,
    type: String,
    isShowDelete: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleDelete() {
      this.triggerEvent('delete');
    }
  }
})
