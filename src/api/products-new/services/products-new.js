'use strict';

/**
 * products-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::products-new.products-new');
