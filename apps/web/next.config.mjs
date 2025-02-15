/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    {
      config.module.rules.push({
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: [['styled-components', { ssr: true }]],
          },
        },
      });
    }

    return config;
  },
};

export default nextConfig;
