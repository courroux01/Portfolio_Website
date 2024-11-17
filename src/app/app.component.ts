import { Component } from '@angular/core';
import * as projects from '../assets/projects.json';
import * as content from '../assets/content.json';

import aboutInterface from './interfaces/aboutInterface';
import contactInterface from './interfaces/contactInterface';
import footerInterface from './interfaces/footerInterface';
import headerInterface from './interfaces/headerInterface';
import projectInterface from './interfaces/projectsInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Assignment1App';

  aboutProps: aboutInterface = content.aboutProps;
  contactProps: contactInterface = content.contactProps;
  footerProps: footerInterface = content.footerProps;
  headerProps: headerInterface = content.headerProps;
  projectsProps: projectInterface[] = (projects as any).default;

  isDarkMode = true;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}
