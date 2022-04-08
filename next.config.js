/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // white listed image domains. Whitelisted means trusted.
  images:{
    domains:['placekitten.com']
  }
}

module.exports = nextConfig
