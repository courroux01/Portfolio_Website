import { Component, Input, OnInit } from '@angular/core';
import aboutInterface from '../../interfaces/aboutInterface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  @Input() aboutProps!: aboutInterface;
  @Input() isDarkMode!: boolean;
  mainText!: string;
  description!: string[];

  ngOnInit(): void {
    this.mainText = this.aboutProps.mainText;
    this.description = this.aboutProps.description;
  }
}
