module.exports = {
    // Otras configuraciones de Webpack
    resolve: {
      fallback: {
        "buffer": require.resolve("buffer/"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "timers": require.resolve("timers-browserify"),
        "util": require.resolve("util/")
      }
    }
  };
