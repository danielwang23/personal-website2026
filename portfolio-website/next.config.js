/** @type {import('next').NextConfig} */

const repo = "personal-website2026";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
    output: 'export',
    basePath: '/personal-website2026',
    assetPrefix: '/personal-website2026/',
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'a2bef6ba-ec2c-4592-96eb-30819429ced7',
    },
};

module.exports = nextConfig;