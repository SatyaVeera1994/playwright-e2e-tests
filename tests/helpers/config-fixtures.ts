import { test as base } from '@playwright/test';

export type EnvConfig = {
  envName: string,
  appUrl: string,
  nopeCommereceweburl: string,
  portalUrl:string,
  dbConfig:{}
};

export const test = base.extend<EnvConfig>({
  // Define an option and provide a default value.
  // We can later override it in the config.
  envName: ['test', { option: true }],
  appUrl: ['url', { option: true }],
  nopeCommereceweburl: ['url', { option: true }],
  portalUrl:['url',{option:true}],
  dbConfig: ['{}', { option: true }],
 
});