// module.exports = {
//   routes: [
//     // Greet route (public, no authentication required)
//     {
//       method: "GET",
//       path: "/blogs/greet",
//       handler: "blog.greet",
//       config: {
//         auth: false,  // Disable authentication for the greet route
//       },
//     },
    
//     {
//       method: "GET",
//       path: "/blogs/test",
//       handler: "blog.test",
//       config: {
//         auth: false,  // Disable authentication for test route
//       },
//     },

//     // {
//     //   method: 'GET',
//     //   path: '/hello',
//     //   handler: 'blog.index',
//     // },


//     // Default blog routes (public, no authentication required)
//     {
//       method: "GET",
//       path: "/blogs",
//       handler: "blog.find",
//       config: {
//         auth: false,  // Disable authentication for find route
//       },
//     },
//     {
//       method: "GET",
//       path: "/blogs/:id",
//       handler: "blog.findOne",
//       config: {
//         auth: false,  // Disable authentication for findOne route
//       },
//     },
//     {
//       method: "POST",
//       path: "/blogs",
//       handler: "blog.create",
//       config: {
//         auth: false,  // Disable authentication for create route
//       },
//     },
//     {
//       method: "PUT",
//       path: "/blogs/:id",
//       handler: "blog.update",
//       config: {
//         auth: false,  // Disable authentication for update route
//       },
//     },
//     {
//       method: "DELETE",
//       path: "/blogs/:id",
//       handler: "blog.delete",
//       config: {
//         auth: false,  // Disable authentication for delete route
//       },
//     },
//   ],
// };

'use strict';

/**
 * contact-us router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::blog.blog');
