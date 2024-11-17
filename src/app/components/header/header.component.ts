import { Component, Input, OnInit } from '@angular/core';
import headerInterface from '../../interfaces/headerInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  @Input() headerProps!: headerInterface;
  @Input() isDarkMode!: boolean;
  name!: string;
  role!: string;
  motto!: string;

  ngOnInit(): void {
    this.name = this.headerProps.name;
    this.role = this.headerProps.role;
    this.motto = this.headerProps.motto;
  }
}
