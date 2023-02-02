import { ScullyConfig } from '@scullyio/scully';

import './scully/plugins/tipSheetsRoutePlugin';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "covid-parenting-website",
  pluginDir: './scully/plugins/',
  outDir: './dist/static',
  routes: {
    '/tips/:langCode': {
      type: 'tipSheets',
      tipSheetsDir: './tip_sheets',
    },
  },
};
