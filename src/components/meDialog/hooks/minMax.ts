//扩展 el-dailog 最大化最小化可移动
export default (el: HTMLDivElement & { fullscreen: boolean }) => {
  if (el.fullscreen !== undefined) {
    return;
  }
  //自定义尺寸变化事件
  const resizeEvent = new CustomEvent('drag-resize', { detail: '尺寸变化', bubbles: false });
  el.fullscreen = false;
  //当前宽高
  let nowWidth = el.offsetWidth;
  let nowHight = el.offsetHeight;
  //弹框可拉伸最小宽高
  const minWidth = Math.min(nowWidth, 300);
  const minHeight = Math.min(nowHight, 300);
  //当前顶部高度
  let nowMarginTop = '0';
  //获取弹框头部（这部分可双击全屏）
  const dialogHeaderEl = el.querySelector('.el-dialog__header') as HTMLDivElement;
  //弹窗
  const dragDom = el;
  let setedWidth = '';
  let setedHeight = '';
  const setWidthHeight = (width: string, height: string) => {
    dragDom.style.maxHeight = 'unset';
    if (width) {
      setedWidth = width;
      dragDom.style.width = width;
    }
    if (height) {
      setedHeight = height;
      dragDom.style.height = height;
    }
  };
  setWidthHeight(nowWidth + 'px', nowHight + 'px');
  //清除选择头部文字效果
  dialogHeaderEl.onselectstart = () => false;
  //头部加上可拖动cursor
  dialogHeaderEl.style.cursor = 'move';

  // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
  const sty = window.getComputedStyle(dragDom, null);

  //头部插入最大化最小化元素
  const fullscreenSvg =
    '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"></path></svg>';
  const cropSvg =
    '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"></path><path fill="currentColor" d="M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"></path></svg>';
  const maxMinButton = document.createElement('button');
  maxMinButton.className = 'el-dialog__headerbtn';
  maxMinButton.style.color = 'var(--el-color-info)';
  maxMinButton.onmouseover = function () {
    //设置其背景颜色为主色
    maxMinButton.style.color = 'var(--el-color-primary)';
  };
  maxMinButton.onmouseout = function () {
    //设置其背景颜色为默认色
    maxMinButton.style.color = 'var(--el-color-info)';
  };
  if (dialogHeaderEl.querySelector('.el-dialog__close')) {
    maxMinButton.style.right = dialogHeaderEl.querySelector('.el-dialog__close')!.parentElement!.clientWidth + 'px';
  }
  const maxMin = document.createElement('i');
  maxMinButton.appendChild(maxMin);
  maxMin.style.fontSize = 'inherit';
  maxMin.className = 'el-icon';
  maxMin.innerHTML = el.fullscreen ? cropSvg : fullscreenSvg;
  dialogHeaderEl.appendChild(maxMinButton);
  const moveDown = (e: MouseEvent) => {
    // 鼠标按下，计算当前元素距离可视区的距离
    const disX = e.clientX ?? 0 - dialogHeaderEl.offsetLeft;
    const disY = e.clientY ?? 0 - dialogHeaderEl.offsetTop;
    // 获取到的值带px 正则匹配替换
    let styL: number, styT: number;
    // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
    if (sty.left.includes('%')) {
      styL = +document.body.clientWidth * (+sty.left.replace(/%/g, '') / 100);
      styT = +document.body.clientHeight * (+sty.top.replace(/%/g, '') / 100);
    } else {
      styL = +sty.left.replace(/\px/g, '');
      styT = +sty.top.replace(/\px/g, '');
    }
    document.onmousemove = function (e) {
      // 通过事件委托，计算移动的距离
      const l = e.clientX - disX;
      const t = e.clientY - disY;
      // 移动当前元素
      dragDom.style.left = `${l + styL}px`;
      dragDom.style.top = `${t + styT}px`;

      //将此时的位置传出去
      //binding.value({x:e.pageX,y:e.pageY})
    };

    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };
  dialogHeaderEl.onmousedown = moveDown;
  const setMaxMin = () => {
    if (el.fullscreen) {
      maxMin.innerHTML = fullscreenSvg;
      setWidthHeight(nowWidth + 'px', nowHight + 'px');
      dragDom.style.marginTop = nowMarginTop;
      dragDom.style.position = 'relative';
      el.fullscreen = false;
      dialogHeaderEl.style.cursor = 'move';
      dialogHeaderEl.onmousedown = moveDown;
    } else {
      maxMin.innerHTML = cropSvg;
      nowHight = dragDom.clientHeight;
      nowWidth = dragDom.clientWidth;
      nowMarginTop = dragDom.style.marginTop;
      dragDom.style.left = '0';
      dragDom.style.top = '0';
      setWidthHeight('100vw', '100vh');
      dragDom.style.marginTop = '0';
      dragDom.style.position = 'fixed';
      el.fullscreen = true;
      dialogHeaderEl.style.cursor = 'initial';
      dialogHeaderEl.onmousedown = null;
    }
    maxMinButton.style.color = 'var(--el-color-info)';
    el.dispatchEvent(resizeEvent);
  };

  //点击放大缩小效果
  maxMinButton.onclick = setMaxMin;
  //双击头部效果
  dialogHeaderEl.ondblclick = setMaxMin;
  //拉伸
  const resizeEl = document.createElement('div');
  dragDom.appendChild(resizeEl);
  //在弹窗右下角加上一个10-10px的控制块
  resizeEl.style.cursor = 'se-resize';
  resizeEl.style.position = 'absolute';
  resizeEl.style.height = '10px';
  resizeEl.style.width = '10px';
  resizeEl.style.right = '0px';
  resizeEl.style.bottom = '0px';
  resizeEl.style.zIndex = '1999';

  //鼠标拉伸弹窗
  resizeEl.onmousedown = (e) => {
    // 记录初始x位置
    const clientX = e.clientX;
    // 鼠标按下，计算当前元素距离可视区的距离
    const disX = e.clientX - resizeEl.offsetLeft;
    const disY = e.clientY - resizeEl.offsetTop;
    document.onmousemove = function (e) {
      e.preventDefault(); // 移动时禁用默认事件
      // 通过事件委托，计算移动的距离
      const x = e.clientX - disX + (e.clientX - clientX); //这里 由于elementUI的dialog控制居中的，所以水平拉伸效果是双倍
      const y = e.clientY - disY;
      //比较是否小于最小宽高
      setWidthHeight(x > minWidth ? `${x}px` : minWidth + 'px', y > minHeight ? `${y}px` : minHeight + 'px');
    };
    //拉伸结束
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
      el.dispatchEvent(resizeEvent);
    };
  };
  return { resetWH: () => setWidthHeight(setedWidth, setedHeight) };
};
