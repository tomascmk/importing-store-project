import { Dictionary } from './models/DictionaryModel';

console.debug(`Initial process env: ${JSON.stringify(process.env)}`);

export function readEnvJSON<T>(env: Dictionary<string>, key: string): T {
  return JSON.parse(env[key] as string);
}

export function readEnvArray<T>(env: Dictionary<string>, key: string): T[] {
  const array = (env[key] as string).split(',');
  return array.map((item: any) => {
    return item as T;
  });
}

export function readEnvString(env: Dictionary<string>, key: string): string {
  return env[key] as string;
}

export function readEnvInt(env: Dictionary<string>, key: string): number {
  try {
    return parseInt(env[key] as string);
  } catch {
    throw new Error(`Configuration value for ${key} must be an integer.`);
  }
}

export function readEnvBoolean(env: Dictionary<string>, key: string): boolean {
  const value = (env[key] as string) && (env[key] as string).toLowerCase();
  if (value === 'true') {
    return true;
  } else if (value === 'false') {
    return false;
  }
  throw new Error(`Configuration value for ${key} must be true or false.`);
}

export class BaseConfigProcessor {
  processConfig(env: Dictionary<string>): AppSettingsBase {
    return {
      RapidapiAmazonHost: readEnvString(env, 'RAPIDAPI_AMAZON_HOST'),
      RapidapiAmazonKey: readEnvString(env, 'RAPIDAPI_AMAZON_KEY'),
      RapidapiAmazonUrl: readEnvString(env, 'RAPIDAPI_AMAZON_URL'),
      DefaultLookUpLanguage: readEnvString(
        env,
        'REACT_APP_DEFAULT_LOOKUP_LANGUAGE'
      ),
      Host: readEnvString(env, 'REACT_APP_HOST'),
      FileServer: readEnvString(env, 'REACT_APP_FILES_SERVER'),
    };
  }
}

export interface AppSettingsBase {
  RapidapiAmazonHost: string;
  RapidapiAmazonKey: string;
  RapidapiAmazonUrl: string;
  DefaultLookUpLanguage: string;
  Host: string;
  FileServer: string;
}

const configProcessor = new BaseConfigProcessor();
export const config = configProcessor.processConfig(process.env);
