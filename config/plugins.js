module.exports = {
    // ...
    'corlor-picker': {
      enabled: true,
      resolve: './src/plugins/corlor-picker'
    },
    'users-permissions': {
      config: {
        jwt: {
          expiresIn: '7d',
        },
      },
    },
    'todo': {
      enabled: true,
      resolve: './src/plugins/todo'
    },
    'import-export-entries': {
      enabled: true,
      config: {
        /**
         * Public hostname of the server.
         *
         * If you use the local provider to persist medias,
         * `serverPublicHostname` should be set to properly export media urls.
         */
        serverPublicHostname: 'https://yoga.com', // default: "".
      },
    },
    // ...
  }