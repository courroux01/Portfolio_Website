import { Component, Input, OnInit } from '@angular/core';
import footerInterface from '../../interfaces/footerInterface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  @Input() footerProps!: footerInterface;
  @Input() isDarkMode!: boolean;
  mainText!: string;
  listLabel!: string;
  technologies!: string[];

  ngOnInit(): void {
    this.mainText = this.footerProps.mainText;
    this.listLabel = this.footerProps.listLabel;
    this.technologies = this.footerProps.technologies;
  }
}
