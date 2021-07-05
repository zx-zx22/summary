module.exports = {
  base:'/summary/',
  title: '小张的笔记',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/1.jpg',
    sidebarDepth: 2,
    nav: [
      { text: 'Guide', link: '/guide/' },
      {
        text: '分类记录',
        items: [
          { text: 'html', link: '/record/one' },
          { text: 'css', link: '/record/css' },
          { text:'react',link:'/record/react' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [{
        title: 'guide',
				collapsable: false, 
				path:'/guide/'
      }],
      '/record/one': [{
        title: 'html',
        collapsable: false,
        path:'/record/one'
      }],
      '/record/css': [{
        title: 'css',
        collapsable: false,
        path:'/record/css'
      }],
      '/record/react':[{
        title:'react',
        collapsable:false,
        path:'/record/react'
      }],
      sidebarDepth: 2,
    }
  },
  plugins: {
    '@vuepress/active-header-links':{
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    }
  }
}
