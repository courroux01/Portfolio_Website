import { Component, Input, OnInit } from '@angular/core';
import contactInterface from '../../interfaces/contactInterface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  @Input() contactProps!: contactInterface;
  @Input() isDarkMode!: boolean;
  mainText!: string;
  links!: { [key: string]: string };
  linkKVArray!: [string, string][];

  ngOnInit(): void {
    this.mainText = this.contactProps.mainText;
    this.links = this.contactProps.links;
    this.linkKVArray = Object.entries(this.links);
  }
}
