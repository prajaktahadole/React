
module.exports = {                         
    
    mode : "development",
    module: {
        rules: [
            { test: /\.txt$/, use: ["style-loader", "css-loader"] }
         ],
      },
};