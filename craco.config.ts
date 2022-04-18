import CracoLessPlugin from "craco-less";

const plugins = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "primary-color": "rgb(47, 192, 206)",
              "link-color": "rgb(47, 192, 206)",
              "font-family": "Open Sans, sans-serif",
              "border-radius-base": "5px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

export default plugins;
