import { MyformeoPage } from './app.po';

describe('myformeo App', () => {
  let page: MyformeoPage;

  beforeEach(() => {
    page = new MyformeoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
