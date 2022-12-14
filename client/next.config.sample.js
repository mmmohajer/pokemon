module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },

  publicRuntimeConfig: {
    PRODUCTION: false,
    WITHOUT_DOCKER: 0
  },

  env: {
    APP_DOMAIN: 'localhost',
    GOOGLE_AUTH_CLIENT_ID_DEVELOPMENT: 'GOOGLE_AUTH_CLIENT_ID_DEVELOPMENT',
    GOOGLE_AUTH_CLIENT_ID_PRODUCTION: 'GOOGLE_AUTH_CLIENT_ID_PRODUCTION',
    MICROSOFT_AUTH_CLIENT_ID_DEVELOPMENT: 'MICROSOFT_AUTH_CLIENT_ID_DEVELOPMENT',
    MICROSOFT_AUTH_CLIENT_ID_PRODUCTION: 'MICROSOFT_AUTH_CLIENT_ID_PRODUCTION',
    FACEBOOK_AUTH_CLIENT_ID_DEVELOPMENT: 'FACEBOOK_AUTH_CLIENT_ID_DEVELOPMENT',
    FACEBOOK_AUTH_CLIENT_ID_PRODUCTION: 'FACEBOOK_AUTH_CLIENT_ID_PRODUCTION'
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },

  images: {
    domains: ['picsum.photos', 'img.icons8.com']
  }
};
