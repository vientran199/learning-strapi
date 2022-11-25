'use strict';

/**
 * `is-authenticated` policy
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In is-authenticated policy.');
    if(policyContext.state.user){
      return true
    }
    return false;
};
