
const path = require("path");

module.exports = {                         // we can do this changes not neccessery to do this  , we can dist is default     
    entry : "./src/index.js",               //webpack read this file 1st and generate bundle , this path also change according to from where we want to change
                                    //here we are not going to change entry point
    output :{                          // "." represent current directory
        path: path.resolve(".", "build"), //path is where u want to generate, want to generate in build folder
        filename : "bundle.js", //with filename bundle.js
    },
    mode : "development",
    module: {
        rules: [
            { test: /\.txt$/, use: ["style-loader", "css-loader"] }
         ],
      },
};