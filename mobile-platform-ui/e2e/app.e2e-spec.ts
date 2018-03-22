import { AppPage } from './app.po';

describe('mobile-platform-ui App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app name', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Mahindra Comviva Mobile Platform UI');
  });
});
