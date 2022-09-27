import { ElImageViewer } from 'element-plus';
import { createVNode, render } from 'vue';
//函数组件只能以服务的方式调用
export function createImageViewer(props: ComponentProps<typeof ElImageViewer>) {
  const container = document.createElement('div');
  const vnode = createVNode(
    ElImageViewer,
    Object.assign(
      {
        onClose: function () {
          render(null, container);
          if (typeof props.onClose === 'function') {
            props.onClose.call(this);
          }
        },
      },
      props,
    ),
  );
  render(vnode, container);
  // instances will remove this item when close function gets called. So we do not need to worry about it.
  document.body.appendChild(container.firstElementChild!);
  return vnode;
}
