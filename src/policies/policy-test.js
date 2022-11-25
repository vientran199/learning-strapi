'use strict';

/**
 * `policy-test` policy
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In policy-test policy.');

    const canDoSomething = true;

    if (canDoSomething) {
      return true;
    }

    return false;
};
