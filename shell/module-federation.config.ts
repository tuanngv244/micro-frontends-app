import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'shell',
  exposes: {
    './Routes': 'shell/src/app/remote-entry/entry.routes.ts',
  },
  // remotes: ['home'],
};

export default config;
