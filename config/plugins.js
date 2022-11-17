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
    // ...
  }