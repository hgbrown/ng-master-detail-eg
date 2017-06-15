import { MasterDetailExamplePage } from './app.po';

describe('master-detail-example App', () => {
  let page: MasterDetailExamplePage;

  beforeEach(() => {
    page = new MasterDetailExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
