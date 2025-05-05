export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/find/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: true,
  }
})
