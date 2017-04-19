
function isEmpty(value) {
  return value === null || value === undefined || value=== '';
}
// 手机号验证
function mobileValidate(mobile) {
  return /^1[34578][0-9]{9}$/.test(mobile);
}
//邮箱验证
function emailValidate(email) {
  return /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(email);
}

function Calculation(a,b){//a 是开会时间，b是当前时间
  console.log(a,b)
  let date1 = new Date(a.split("-").join("/"));
  let date2 = new Date(b.split("-").join("/"));
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
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
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
    location.href="http://192.168.100.133:8787/conference/#/"
  }
  let xhr=new XMLHttpRequest();
  xhr.open("get","/api/conference/page?id=1",true);
  xhr.onreadystatechange =function () {
    if(xhr.readyState === 4){
      if(xhr.status === 401){
        localStorage.removeItem("history");
        localStorage.setItem("history",location.href);
        location.href="http://192.168.100.133:8787/conference/#/"
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
