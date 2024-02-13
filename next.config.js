/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
 
};

module.exports = nextConfig

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  compiler: {
    styledComponents: true,
  },
};
