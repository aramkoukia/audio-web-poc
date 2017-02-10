import { AudioWebPocPage } from './app.po';

describe('audio-web-poc App', function() {
  let page: AudioWebPocPage;

  beforeEach(() => {
    page = new AudioWebPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
