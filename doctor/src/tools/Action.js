
let Action={
  on:function (name,fn) {
    this[name]=fn
  },
  //绑定函数


  emit:function (name,data) {
    this[name](data)
  }
  //触发函数
};
//使用的时候，记得需要bind(this)，不然this的指向会乱掉

export default Action
