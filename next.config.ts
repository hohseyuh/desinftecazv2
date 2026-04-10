import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/kur',
        destination: 'https://drive.google.com/drive/folders/17TfpskOvoC72RQOdNqErDNqDaUDxMuw8',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
