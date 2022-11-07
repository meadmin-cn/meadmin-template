import { RouteRecordRaw } from 'vue-router';
export const routes: RouteRecordRaw[] = [
  {
    path: 'markdown',
    component: async () => await import('@/views/components/editor/markdwonEditor.vue'),
    meta: { title: 'Markdown' },
  },
];