module.exports = [
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],  // Allow HTTPS connections
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com', 'https://*'], // Allow images from Cloudinary and any HTTPS source
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com', 'https://*'], // Allow media files from Cloudinary and any HTTPS source
          'font-src': ["'self'", 'data:'], // Allow fonts to load
          'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"], // Allow inline scripts (for preview rendering)
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::logger',
  'strapi::errors',
  'strapi::cors',  // Enable Cross-Origin Resource Sharing for external sources
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
