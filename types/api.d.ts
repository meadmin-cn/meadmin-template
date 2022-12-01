declare global {
  type BasePageParams<P extends Record<string, any> = unknown> = {
    page: number;
    size: number;
  } & P;

  type BasePageResult<R> = {
    page: number;
    size: number;
    count: number;
    list: R[];
  };
}

export {};
