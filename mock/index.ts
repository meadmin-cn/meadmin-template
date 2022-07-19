import mock from 'mockjs';
const modules = import.meta.glob('./apiDemo/*.ts', {
    import: 'default',
    eager: true
});
Object.entries(modules).forEach(([key,module]:any)=>{
    module.forEach((item:any)=>{
        mock.mock(item.url,item.type,item.response);
    })
    
});