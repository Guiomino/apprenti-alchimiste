/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.cur$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/cursors/[name][ext]',
            },
        });
    return config;
    },
};

export default nextConfig;
