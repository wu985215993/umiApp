
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  /* routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/home', component: '../pages/index' ,
        routes:[
          {path: '/home', redirect: "/home/person"},//重定向
          {path: '/home/person', component: '../pages/person/index'},
          {path: '/home/goods', component: '../pages/goods/index'}
        ]
      },
        { path: '/login', component: '../pages/login/index' },
        { path: '/reg', component: '../pages/reg/index' }
      ]
    }
  ], */
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: {
        immer: true
      },
      dynamicImport: false,
      title: 'umiApp',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
