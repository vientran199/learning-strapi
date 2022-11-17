'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('corlor-picker')
      .service('myService')
      .getWelcomeMessage();
  },
});
