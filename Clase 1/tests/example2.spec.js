import { test, expect } from '@playwright/test';

test.describe('GRUPO 1 Adjuntar archivos', {tag: '@report'}, () => {

    test.beforeAll(async () => {
        console.log('Before tests');
    });
    test.beforeEach(async () => {
        console.log('Before tests');
    });

    test.afterAll('Teardown', async () => {
        console.log('Done with tests');
        // ...
      });
    test.afterEach(async ({ page }) => {
        console.log(`Finished ${test.info().title} with status ${test.info().status}`);
    });
    
    test.only('test report header', async ({ page }) => {
    });

    test.skip('test full report', {tag: ['@API', '@Smoke']}, async ({ page }) => {
    // ...
    });

    test.fixme('test example', async ({ page }) => {
    // ...
    });

    test.fail('test example 2', async ({ page }) => {
    // ...
    });

});

test.describe('GRUPO 2 Sin Adjuntar archivos', {tag: '@report'}, () => {

})