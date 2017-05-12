import api from "../common/API"
let serverD=api().serverAdress;
function isEmpty(value) {
  return value === null || value === undefined || value=== '';
}
// 手机号验证
function mobileValidate(mobile) {
  return /^1[34578][0-9]{9}$/.test(mobile);
}
//邮箱验证
function emailValidate(email) {
  return /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/ .test(email);
}

function flashChecker() {
  let hasFlash = 0;　　　　 //是否安装了flash
  let flashVersion = 0;　　 //flash版本
  if(document.all) {
    let swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
    if(swf) {
      hasFlash = 1;
      VSwf = swf.GetVariable("$version");
      flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
    }
  } else {
    if(navigator.plugins && navigator.plugins.length > 0) {
      let swf = navigator.plugins["Shockwave Flash"];
      if(swf) {
        hasFlash = 1;
        let words = swf.description.split(" ");
        for(let i = 0; i < words.length; ++i) {
          if(isNaN(parseInt(words[i]))) continue;
          flashVersion = parseInt(words[i]);
        }
      }
    }
  }
  return !!hasFlash
}
function Calculation(a,b){//a 是开会时间，b是当前时间
  let date1 = new Date(a);
  let date2 = new Date(b);
  let s1 = date1.getTime(),s2 = date2.getTime();
  let total = (s1 - s2)/1000;
  let day = parseInt(total / (24*60*60));//计算整数天数
  let afterDay = total - day*24*60*60;//取得算出天数后剩余的秒数
  let hour = parseInt(afterDay/(60*60));//计算整数小时数
  let afterHour = total - day*24*60*60 - hour*60*60;//取得算出小时数后剩余的秒数
  let min = parseInt(afterHour/60);//计算整数分
  if(day>=0&&afterDay>=0&&hour>=0&&afterHour>=0&&min>=10){
    return false
  }else{
    return true
  }
}

//验证身份证

function cardValidate(card)
{
  let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(card)
}
function FormatDate(strTime) {
  if(isEmpty(strTime)){
    return;
  }
  var date = new Date(strTime);
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

function checked(){
  if(!localStorage.getItem("robertUserName")){
    localStorage.setItem("history",location.href);
    location.href=serverD+"/conference/#/"
  }
  let xhr=new XMLHttpRequest();
  xhr.open("get","/api/conference/page?id=1",true);
  xhr.onreadystatechange =function () {
    if(xhr.readyState === 4){
      if(xhr.status === 401){
        localStorage.removeItem("history");
        localStorage.setItem("history",location.href);
        location.href=serverD+"/conference/#/"
      }
    }
  };
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded UTF-8");
  xhr.setRequestHeader("Authorization","Bearer "+localStorage.getItem("robertUserName"));
  xhr.send()
}

export default {
  mobileValidate,
  isEmpty,
  cardValidate,
  emailValidate,
  FormatDate,
  checked,
  Calculation
}
