const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */

// @ts-ignore:no-undef
const config = getDefaultConfig(__dirname);
config.resolver.sourceExts.push("sql");
module.exports = config;
