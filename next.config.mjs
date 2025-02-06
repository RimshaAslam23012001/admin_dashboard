

// Add Sanity's CDN to your Next.js project
const nextConfig= {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Ensure you are using HTTPS for better security
        hostname: 'cdn.sanity.io',
        pathname: '/**', // Allowing all paths, but you can be more specific if needed
      },
    ],
  },
};

export default nextConfig;
