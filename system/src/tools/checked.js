
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
    localStorage.setItem("history",location.hash);
    location.hash="http://192.168.100.133:8787/conference/#/"
  }
  let xhr=new XMLHttpRequest();
  xhr.open("get","/api/conference/page?id=1",true);
  xhr.onreadystatechange =function () {
    if(xhr.readyState === 4){
      if(xhr.status === 401){
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
  checked
}
