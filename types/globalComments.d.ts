declare module 'vue' {
  export interface GlobalComponents {
    LayoutMenuItem: typeof import('../src/layout/components/menu/components/menuItem.vue')['default'];
  }
}
export {};
