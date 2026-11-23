import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  experimental: {
    optimizePackageImports: ['@tabler/icons-react', 'lucide-react', 'motion/react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ hostname: '*', protocol: 'https' }],
  },
};

export default nextConfig;
