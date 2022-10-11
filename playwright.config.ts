import { type PlaywrightTestConfig, devices  } from "@playwright/test";
import { m } from "framer-motion";

const config : PlaywrightTestConfig = {
    projects: [
        {
            name: 'chromium-desktop-test',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox-desktop-test',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'safari-desktop-test',
            use: { ...devices['Desktop Safari'] },
        }
    ],
    webServer:{
        command: 'npm run build && npm run start',
        port: 3000,
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI
    },
    use: {
        headless: false,
        viewport: {width: 1280, height: 720},
        ignoreHTTPSErrors: true,
        video: 'on-first-retry',
        
    }
}

export default config;