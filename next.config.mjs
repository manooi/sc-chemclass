/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    // https://github.com/kelektiv/node.bcrypt.js/issues/979
    webpack: (config) => {
        config.externals = [...config.externals, "bcrypt"];
        return config;
    },
};

export default nextConfig;
