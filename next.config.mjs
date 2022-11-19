// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    future: {
        webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
        // Looks like backward compatibility approach.
    },
    /**
     * @param {{ resolve: { fallback: any; }; }} config
     */
     webpack5: true,
     webpack: (config) => {
       config.resolve.fallback = { fs: false };
   
       return config;
     },
};

export default config;



