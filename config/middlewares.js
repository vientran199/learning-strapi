module.exports = [
  'strapi::errors',
  'strapi::security',
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
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
