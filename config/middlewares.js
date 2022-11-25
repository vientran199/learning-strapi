module.exports = [
  'strapi::errors',
  // 'strapi::security',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // Enable the download of the Monaco editor
          // from cdn.jsdelivr.net.
          "script-src": ["'self'", "cdn.jsdelivr.net", "blob:"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  // {
  //   name: 'strapi::cors',
  //   config: {
  //     enabled: true,
  //     header: '*',
  //     origin: ['http://localhost','https://foo.example','http://localhost:3000/']
  //   }
  // },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  // 'strapi::body',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '10mb', // Giới hạn khi import
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
