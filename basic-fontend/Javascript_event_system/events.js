/**
 * Author: Frank Zhang
 * Date: 2015.9.25
 */


//todo: this对象的丢失，怎么使用外侧对象

;function Events(){}


Events.prototype.on = function(element,type,handler){
  if(element.addEventListener){
    element.addEventListener(type, handler, false)
  }else if(element.attachEvent){
    element.attachEvent("on" + type, handler)
  }
}

Events.prototype.off = function(element, type) {
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false)
  } else if (element.detachEvent) {
    element.detachEvent("on" + type, handler)
  }
}

Events.prototype.preventDefault = function(e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

Events.prototype.stopPropagation = function(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  } else {
    e.cancelBubble = true;
  }
}



