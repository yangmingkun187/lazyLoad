;(function() {
  var scrollTop,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', // 确定窗口变化或是移动端横竖屏
      imgArray = document.getElementsByTagName('img'); // 获取页面图片
  function winScroll(e){
    scrollTop = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
    for(var i = 0, domImg; domImg = imgArray[i++];) {
      if(domImg.offsetTop <= getViewSizeWithScrollbar().height + scrollTop) {
          domImg.setAttribute('src',domImg.getAttribute('data-src'));
      }
    }
  }
  function getViewSizeWithScrollbar(){ //包含滚动条
    if(window.innerWidth){
      return {
        width : window.innerWidth,
        height: window.innerHeight
      }
    } else if (document.documentElement.offsetWidth == document.documentElement.clientWidth){
      return {
        width : document.documentElement.offsetWidth,
        height: document.documentElement.offsetHeight
      }
    } else {
      return {
        width : document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    }
  }
  document.addEventListener('scroll', winScroll, false); // 监听滚动事件
  window.addEventListener(resizeEvt, winScroll, false); // 监听窗口变化
})();
