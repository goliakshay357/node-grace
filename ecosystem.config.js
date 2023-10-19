module.exports = {
    apps: [
      {
        name: "your-app-name",
        script: "index.js", // Replace with the actual entry point of your application
        instances: 1, // Adjust the number of instances as needed
        exec_mode: "cluster",
        autorestart: true,
        watch: false,
        max_memory_restart: "1G", // Set an appropriate memory limit
        env: {
          NODE_ENV: "production", // Set the desired environment
          PORT: 3000 // Set the desired port
        },
      },
    ],
  };
  