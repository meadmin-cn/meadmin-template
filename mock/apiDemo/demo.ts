import dayjs from 'dayjs';
import { success, fail } from '../helper';
const list = [
  {
    id: 1,
    name: '张三',
    type: '1',
    bookName: '三体',
    price: 15.0,
    section: 80,
    createTime: '2022-01-02 15:45:30',
  },
  {
    id: 2,
    name: '王五',
    type: '1',
    bookName: '细说PHP',
    price: 15.0,
    section: 18,
    createTime: '2022-01-03 08:22:10',
  },
  {
    id: 3,
    name: '刘六',
    type: '3',
    bookName: '百年孤独',
    price: 15.0,
    section: 13,
    createTime: '2022-01-03 06:05:15',
  },
  {
    id: 4,
    name: '赵四',
    type: '2',
    bookName: 'c Primer Plus',
    price: 15.0,
    section: 25,
    createTime: '2022-01-04 08:09:12',
  },
  {
    id: 5,
    name: '刘娘',
    type: '3',
    bookName: 'LINUX系统编程',
    price: 15.0,
    section: 6,
    createTime: '2022-01-05 07:09:03',
  },
  {
    id: 6,
    name: '秦明',
    type: '1',
    bookName: 'JavsScript高级程序设计',
    price: 15.0,
    section: 34,
    createTime: '2022-01-06 06:57:01',
  },
  {
    id: 7,
    name: '古汉',
    type: '1',
    bookName: 'JavaScript权威指南',
    price: 15.0,
    section: 8,
    createTime: '2022-01-06 17:18:48',
  },
  {
    id: 8,
    name: '钱三',
    type: '1',
    bookName: '杀死一只知更鸟',
    price: 15.0,
    section: 16,
    createTime: '2022-01-06 08:09:40',
  },
  {
    id: 9,
    name: '秦三',
    type: '2',
    bookName: 'Linux私房菜',
    price: 15.0,
    section: 23,
    createTime: '2022-01-07 12:45:30',
  },
  {
    id: 10,
    name: '王倩',
    type: '1',
    bookName: '育儿百科',
    price: 15.0,
    section: 25,
    createTime: '2022-01-08 19:58:03',
  },
  {
    id: 11,
    name: '刘勇',
    type: '1',
    bookName: '通信原理',
    price: 15.0,
    section: 12,
    createTime: '2022-01-08 06:07:65',
  },
  {
    id: 12,
    name: '王三',
    type: '1',
    bookName: '三体',
    price: 15.0,
    section: 80,
    createTime: '2022-01-02 15:45:30',
  },
  {
    id: 13,
    name: '王五',
    type: '4',
    bookName: '细说PHP',
    price: 15.0,
    section: 18,
    createTime: '2022-01-03 08:22:10',
  },
  {
    id: 14,
    name: '刘六',
    type: '1',
    bookName: '百年孤独',
    price: 15.0,
    section: 13,
    createTime: '2022-01-03 06:05:15',
  },
  {
    id: 15,
    name: '赵四',
    type: '2',
    bookName: 'c Primer Plus',
    price: 15.0,
    section: 25,
    createTime: '2022-01-04 08:09:12',
  },
  {
    id: 16,
    name: '贾斯丁',
    type: '1',
    bookName: 'LINUX系统编程',
    price: 15.0,
    section: 6,
    createTime: '2022-01-05 07:09:03',
  },
  {
    id: 17,
    name: '徐青',
    type: '1',
    bookName: 'JavsScript高级程序设计',
    price: 15.0,
    section: 34,
    createTime: '2022-01-06 06:57:01',
  },
  {
    id: 18,
    name: '黄又宁',
    type: '3',
    bookName: 'JavaScript权威指南',
    price: 15.0,
    section: 8,
    createTime: '2022-01-06 17:18:48',
  },
  {
    id: 19,
    name: '龙飞雨',
    type: '4',
    bookName: '杀死一只知更鸟',
    price: 15.0,
    section: 16,
    createTime: '2022-01-06 08:09:40',
  },
  {
    id: 20,
    name: '支钱龙',
    type: '1',
    bookName: 'Linux私房菜',
    price: 15.0,
    section: 23,
    createTime: '2022-01-07 12:45:30',
  },
  {
    id: 21,
    name: '刘文利',
    type: '1',
    bookName: '育儿百科',
    price: 15.0,
    section: 25,
    createTime: '2022-01-08 19:58:03',
  },
  {
    id: 22,
    name: '刘勇',
    type: '4',
    bookName: '通信原理',
    price: 15.0,
    section: 12,
    createTime: '2022-01-08 06:07:65',
  },
  {
    id: 23,
    name: '张杰',
    type: '1',
    bookName: '三体',
    price: 15.0,
    section: 80,
    createTime: '2022-01-02 15:45:30',
  },
  {
    id: 24,
    name: '王五',
    type: '1',
    bookName: '细说PHP',
    price: 15.0,
    section: 18,
    createTime: '2022-01-03 08:22:10',
  },
  {
    id: 25,
    name: '顾伯',
    type: '2',
    bookName: '百年孤独',
    price: 15.0,
    section: 13,
    createTime: '2022-01-03 06:05:15',
  },
  {
    id: 26,
    name: '钱金',
    type: '4',
    bookName: 'c Primer Plus',
    price: 15.0,
    section: 25,
    createTime: '2022-01-04 08:09:12',
  },
  {
    id: 27,
    name: '苏念',
    type: '1',
    bookName: 'LINUX系统编程',
    price: 15.0,
    section: 6,
    createTime: '2022-01-05 07:09:03',
  },
  {
    id: 28,
    name: '孙目',
    type: '4',
    bookName: 'JavsScript高级程序设计',
    price: 15.0,
    section: 34,
    createTime: '2022-01-06 06:57:01',
  },
  {
    id: 29,
    name: '古汉',
    type: '1',
    bookName: 'JavaScript权威指南',
    price: 15.0,
    section: 8,
    createTime: '2022-01-06 17:18:48',
  },
  {
    id: 30,
    name: '钱三',
    type: '2',
    bookName: '杀死一只知更鸟',
    price: 15.0,
    section: 16,
    createTime: '2022-01-06 08:09:40',
  },
  {
    id: 9,
    name: '秦三',
    type: '1',
    bookName: 'Linux私房菜',
    price: 15.0,
    section: 23,
    createTime: '2022-01-07 12:45:30',
  },
  {
    id: 31,
    name: '刘倩',
    type: '1',
    bookName: '育儿百科',
    price: 15.0,
    section: 25,
    createTime: '2022-01-08 19:58:03',
  },
  {
    id: 32,
    name: '秦勇',
    type: '3',
    bookName: '通信原理',
    price: 26.02,
    section: 12,
    createTime: '2022-01-08 06:07:65',
  },
];

export default [
  {
    url: '/api/demo', //
    method: 'get',
    timeout: 500 + Math.floor(Math.random() * 300),
    response: (req: { query: any }) => {
      const query = req.query;
      if (!query.page || !query.size) {
        return fail('page和size必填');
      }
      if (query.page < 1) {
        return fail('page必须大于0');
      }
      if (query.size < 1) {
        return fail('size必须大于0');
      }
      const reqList = list.filter((item) => {
        if (query.name && !item.name.includes(query.name)) {
          return false;
        }
        if (query.bookName && !item.bookName.includes(query.bookName)) {
          return false;
        }
        if (query.type && item.type !== query.type) {
          return false;
        }
        if (query.priceStart && query.priceStart > item.price) {
          return false;
        }
        if (query.priceEnd && query.priceEnd < item.price) {
          return false;
        }
        if (query.sectionStart && query.sectionStart > item.section) {
          return false;
        }
        if (query.sectionEnd && query.sectionEnd < item.section) {
          return false;
        }
        if (
          query.createTime &&
          (+dayjs(item.createTime) < +dayjs(query.createTime[0] + ' 00:00:00.000') ||
            +dayjs(item.createTime) > +dayjs(query.createTime[0] + ' 23:59:59.999'))
        ) {
          return false;
        }
        return true;
      });
      return success(
        {
          total: reqList.length,
          list: reqList.slice((query.page - 1) * query.size, query.page * query.size),
        },
        '操作成功',
      );
    },
  },
  {
    url: '/api/demo', //新增
    method: 'post',
    timeout: 500 + Math.floor(Math.random() * 300),
    response: (req: { body: any }) => {
      list.push(
        Object.assign(
          { id: (list[list.length - 1]?.id ?? 0) + 1, createTime: dayjs().format('YYYY-MM-DD HH:mm:ss') },
          req.body,
        ),
      );
      return success('删除成功');
    },
  },
  {
    url: /\/api\/demo\/[0-9]+/, //编辑
    method: 'put',
    timeout: 500 + Math.floor(Math.random() * 300),
    response: (req: { url: string; body: any }) => {
      const id = req.url.replace('/api/demo/', '');
      const index = list.findIndex((item) => item.id === +id);
      if (index < 0) {
        return fail('错误的id');
      }
      Object.assign(list[index], req.body);
      return success('编辑成功');
    },
  },
  {
    url: /\/api\/demo\/[0-9]+/, //删除
    method: 'delete',
    timeout: 500 + Math.floor(Math.random() * 300),
    response: (req: { url: string }) => {
      const id = req.url.replace('/api/demo/', '');
      const index = list.findIndex((item) => item.id === +id);
      if (index < 0) {
        return fail('错误的id');
      }
      list.splice(index, 1);
      return success('删除成功');
    },
  },
];
