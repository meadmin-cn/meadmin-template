export class PageParams {
  page = 1;
  size = 10;
}

export type PageResult<R> = {
  total: number;
  list: R[];
};
