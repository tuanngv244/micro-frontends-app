import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/module-federation/webpack';
const path = require('path');
import baseConfig from './module-federation.config';

const config = {
  ...baseConfig,
  // entry: './src/main.ts',
  // output: {
  //   filename: 'remote.mjs', // Output files with .mjs extension
  //   path: path.resolve(__dirname, 'dist'),
  //   chunkFormat: 'module', // Important for .mjs files
  //   module: true, // Enable output as ES module
  // },
};

// Nx plugins for webpack to build config object from Nx options and context.
/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config, { dts: false })
);
