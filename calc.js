function Rectangle(width, height) {
  var w = Number(width),
      h = Number(height);
  this.area = function() {
    return w * h;
  };
  this.perimeter = function() {
    return 2 * (w + h);
  };
}
function valid(data){  //将验证模块化
  var result={
    isOk:false,
    reason:''
  };
  if(data===''){//字段级校验
    result.reason='不能为空！';
    return result;
  }
  if(Number(data)<0){
    result.reason='不能为负';
    return result;
  }
  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data)){
    result.reason='不是合法数字！';
    return result;
  }
  result.isOk=true;
  return result;
}

