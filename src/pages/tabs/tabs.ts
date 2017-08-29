import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ReportsPage } from '../Reports/reports';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
//import { ReportsPage } from '../reports/reports';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ReportsPage;
  constructor() {

  }
}
