docsearch({
  appId: '97MUPN4DMC',
	apiKey: 'a003a39f337f5186ec11f5f92bae62b3',
	indexName: 'ccknbc',
	container: '#docsearch',
	placeholder: 'CC的部落格 站内搜索',
  translations: {
    button: {
      buttonText: '搜索',
      buttonAriaLabel: '搜索',
    },
    modal: {
      searchBox: {
        resetButtonTitle: '清空',
        resetButtonAriaLabel: '清空',
        cancelButtonText: '取消',
        cancelButtonAriaLabel: '取消',
      },
      startScreen: {
        recentSearchesTitle: '最近搜索历史',
        noRecentSearchesText: '搜索历史为空',
        saveRecentSearchButtonTitle: '保存搜索记录',
        removeRecentSearchButtonTitle: '清除搜索记录',
        favoriteSearchesTitle: '收藏夹',
        removeFavoriteSearchButtonTitle: '移出收藏夹',
      },
      errorScreen: {
        titleText: '未能获取搜索结果',
        helpText: '您可能需要检查您的网络连接',
      },
      footer: {
        selectText: '选择',
        selectKeyAriaLabel: '回车键',
        navigateText: '切换',
        navigateUpKeyAriaLabel: '方向键上',
        navigateDownKeyAriaLabel: '方向键下',
        closeText: '关闭',
        closeKeyAriaLabel: 'ESC退出键',
        searchByText: '基于 DocSearch by',
      },
      noResultsScreen: {
        noResultsText: '未搜索到相关内容',
        suggestedQueryText: '您可尝试搜索',
        reportMissingResultsText: '确认搜索结果是正确的？',
        reportMissingResultsLinkText: '反馈给Algolia',
      },
    },
  },
	debug: false
})