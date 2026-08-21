module.exports = {
  apps: [
    {
      name: "apotheke-shop",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      max_restarts: 10,
      env: {
        NODE_ENV: "production",
        NEXT_PUBLIC_SITE_URL: "https://apotheke.zugriff.at",
      },
    },
  ],
};
