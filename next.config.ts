import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [{ protocol: 'https', hostname: '*' }],
	},
	allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};
export default nextConfig;
