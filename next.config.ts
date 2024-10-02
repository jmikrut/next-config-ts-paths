import { NextConfig } from "next";

// This import works just fine
import { hello } from '@hello-works'

// However,
// tsconfig paths that have '.' in the name
// dont work in next config.

// they work outside of next config just fine tho

// import { hello } from '@hello-broken'

console.log(hello)

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
