'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */


const isFirstRun = async () => {
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: "type",
    name: "setup",
  });
  const initHasRun = await pluginStore.get({ key: "initHasRun" });
  await pluginStore.set({ key: "initHasRun", value: true });
  return !initHasRun;
};

const setDefaultFileUploader = async () => {
  if (strapi.config.environment !== "production") {
    return;
  }
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: "plugin",
    name: "upload",
  });
  const config = await pluginStore.get({ key: "aws-s3" });
  await pluginStore.set({
    key: "aws-s3",
    value: {
      ...config,
      ...{
        provider: "aws-s3",
        name: "aws-s3",
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      },
    },
  });
};

module.exports = async () => {
  const shouldInit = await isFirstRun();
  if (shouldInit) {
    await setDefaultFileUploader();
  }
};
