// Learn more https://docs.expo.io/guides/customizing-metro

const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Allow Metro to load GLB 3D model files
config.resolver.assetExts.push("glb");

module.exports = withNativewind(config);
