import { readdirSync } from 'fs';
import { HandledRoute, registerPlugin } from '@scullyio/scully';

const tipSheetsPlugin = async (route: string, config = {}): Promise<HandledRoute[]> => {
  const dir = config['tipSheetsDir']

  return Promise.resolve(
    readdirSync(dir)
      .filter(filename => filename.length < 5)
      .map(code => {
        return { route: route.split(':langCode').join(code) };
    })
  );
};

const validator = async () => [];

registerPlugin('router', 'tipSheets', tipSheetsPlugin, validator);
