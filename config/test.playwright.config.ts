import {baseConfig} from '../playwright.config.ts';
import { defineConfig ,devices} from '@playwright/test';
import { EnvConfig} from '../tests/helpers/config-fixtures.ts'
import path from 'path';




export default defineConfig< EnvConfig>({
    ...baseConfig,
testDir: path.resolve(process.cwd(), "tests"),

    use: {

        ...baseConfig.use,
        envName: 'test',
        appUrl: 'https://katalon-demo-cura.herokuapp.com/',
        nopeCommereceweburl:"https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F",
        portalUrl:"https://portal.yotta-int.yottacloud.net/login",
        dbConfig: {
            
        }
    }
})