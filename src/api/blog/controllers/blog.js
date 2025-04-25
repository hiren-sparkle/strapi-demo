// "use strict";

// const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
//   // Default controller actions
//   async find(ctx) {
//     return super.find(ctx);
//   },

//   async findOne(ctx) {
//     return super.findOne(ctx);
//   },

//   async create(ctx) {
//     return super.create(ctx);
//   },

//   async update(ctx) {
//     return super.update(ctx);
//   },

//   async delete(ctx) {
//     return super.delete(ctx);
//   },

//   // Custom greet action
//   async greet(ctx) {
//     return ctx.send({ message: "Hello from Strapi" });
//   },

//   // Custom find action
//   async test(ctx) {
//     return ctx.send({ message: "This is testing of api call" });
//   },


//   // async index(ctx, next) { // called by GET /hello
//   //   ctx.body = 'Hello World!'; // we could also send a JSON
//   // },
// }));

'use strict';

/**
 * contact-us controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog');

