import { Ng2CalenderHackathonPage } from './app.po';

describe('ng2-calender-hackathon App', function() {
  let page: Ng2CalenderHackathonPage;

  beforeEach(() => {
    page = new Ng2CalenderHackathonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
