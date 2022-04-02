module.exports = {
  publicPath: '/labb4/',
  pwa: {
    manifestOptions: {
      background_color: '#238f29'
    },
    name: 'Labb 4',
    themeColor: '#73bb77',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://api.sampleapis.com/coffee'
        }
      ]
    }
  }
}
