import { Component, OnInit } from '@angular/core';

import { Twimp } from '../twimp.model';
import { Author } from '../../author/author.model';

@Component({
  selector: 'tweempus-twimp-list',
  templateUrl: './twimp-list.component.html',
  styleUrl: './twimp-list.component.css',
})
export class TwimpListComponent implements OnInit {
  text: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur sodales libero, sit amet posuere arcu consecteturut. Nam volutpat ligula ac nunc consectetur vestibulum.';
  authors: Author[] = [];
  twimps: Twimp[] = [];

  ngOnInit() {
    this.authors.push(new Author('1'));
    this.twimps.push(new Twimp('1', '', this.authors[0], this.text, '2021-01-01T00:00:00.000Z'));
    this.twimps.push(new Twimp('2', '', this.authors[0], this.text, '2021-01-01T00:00:00.000Z'));
    this.twimps.push(new Twimp('3', '', this.authors[0], this.text, '2021-01-01T00:00:00.000Z'));
    this.twimps.push(new Twimp('4', '', this.authors[0], this.text, '2021-01-01T00:00:00.000Z'));
  }
}
