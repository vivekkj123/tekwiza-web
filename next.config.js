/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");
const nextConfig = {
  reactStrictMode: true,
  images: {
    // unoptimized: true,
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 128, 256],
    deviceSizes: [640, 828, 1080, 1200, 1920],
  },
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: 75,
    nextImageExportOptimizer_storePicturesInWEBP: true,
  },
  trailingSlash: true,
};

module.exports = withVideos(nextConfig);
