import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
   
    webpack: (config) => {
        config.resolve.fallback = { fs: false, net: false, tls: false };
        
        return config;
      },
      async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: '/api/:path*',
          },
        ]
      },
};
 
export default withNextIntl(nextConfig);