'use strict';

/**
 * rani service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rani.rani');
