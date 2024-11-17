import { Component, Input, OnInit } from '@angular/core';
import projectInterface from '../../interfaces/projectsInterface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  @Input() projectsProps!: projectInterface[];
  @Input() isDarkMode!: boolean;
  projects!: projectInterface[];
  currentProjects!: projectInterface[];
  currentSearch: string = 'all';

  renderChange(): void {
    console.log(this.currentSearch);
    if (this.currentSearch == 'all' || !this.currentSearch) {
      this.currentProjects = this.projectsProps;
    } else {
      this.currentProjects = this.projectsProps.filter(
        (project) => project.title === this.currentSearch,
      );
    }
  }
  ngOnInit(): void {
    this.projects = this.projectsProps;
    this.currentProjects = this.projectsProps;
    console.log(this.projectsProps);
  }
}
