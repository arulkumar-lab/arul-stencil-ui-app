import { newE2EPage } from '@stencil/core/testing';

describe('stencil-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-app></stencil-app>');

    const element = await page.find('stencil-app');
    expect(element).toHaveClass('hydrated');
  });
});
