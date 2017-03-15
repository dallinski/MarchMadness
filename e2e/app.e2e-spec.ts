import { MarchMadnessPage } from './app.po';

describe('march-madness App', () => {
  let page: MarchMadnessPage;

  beforeEach(() => {
    page = new MarchMadnessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
