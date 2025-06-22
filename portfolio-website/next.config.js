/** @type {import('next').NextConfig} */

const repo = "personal-website2026";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
    output: 'export',
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
        unoptimized: true
    }
};

module.exports = nextConfig;