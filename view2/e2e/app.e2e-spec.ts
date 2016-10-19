import { View2Page } from './app.po';

describe('view2 App', function() {
  let page: View2Page;

  beforeEach(() => {
    page = new View2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
