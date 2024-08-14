import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactRoot: true,
        concurrentFeatures: true,
      },
    webpack: (config) => {
        config.resolve.fallback = { fs: false, net: false, tls: false };
        
        return config;
      },
};
 
export default withNextIntl(nextConfig);