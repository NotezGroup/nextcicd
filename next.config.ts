import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'export', // Detta skapar en 'out' mapp vid build
	images: { unoptimized: true }, // Krävs ofta vid static export
}

export default nextConfig
