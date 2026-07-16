import { FullConfig }  from '@playwright/test';
import { exec} from  'child_process';

export default async function globalTeardown(config: FullConfig) {
    // cleanup code here
    console.log(`[INFO] : starting global teardown...`);

    if (process.env.RUNNER?.toUpperCase() ==="LOCAL"){
        console.log(">>  Local  run dected -starting allure report server...");
        exec('allure  serve', (error, stdout, stderr) => {
            if (error) {
                console.error(`[ERROR] : Starting Allure serve: ${error}`);
            } else {
                console.log(`[INFO] : Global Teardown - Cleanup script executed successfully.`);
            }
        });
    }
}