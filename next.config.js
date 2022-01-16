/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    // experimental: {
    //     reactRoot: true,
    //     concurrentFeatures: true,
    // serverComponents: true,
    // },
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer(nextConfig);
