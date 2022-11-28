import { Component } from '@angular/core';
enum Page {
  CALENDAR,
  DAY,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  page = Page.CALENDAR;
  Page = Page;
  images = [
    'assets/advent_01.gif',
    'assets/advent_02.gif',
    'assets/advent_03.gif',
    'assets/advent_04.gif',
    'assets/advent_05.gif',
    'assets/advent_06.gif',
    'assets/advent_07.gif',
    'assets/advent_08.gif',
    'assets/advent_09.gif',
    'assets/advent_10.gif',
    'assets/advent_11.gif',
    'assets/advent_12.gif',
    'assets/advent_13.gif',
    'assets/advent_14.gif',
    'assets/advent_15.gif',
    'assets/advent_16.gif',
    'assets/advent_17.gif',
    'assets/advent_18.gif',
    'assets/advent_19.gif',
    'assets/advent_20.gif',
    'assets/advent_21.gif',
    'assets/advent_22.gif',
    'assets/advent_23.gif',
    'assets/advent_24.gif',
    'assets/advent_25.jpg',
  ];
  colors = [
    '#aed1d3', // blau
    '#fbd3c9', // rosa
    '#ffffff',
    '#e6e6e6',
    '#ffffff',
    '#f8efe8',
    '#ffffff',
    '#e6e6e6',
    '#ffffff',
    '#fbd3c9', // rosa
    '#ffffff',
    '#f8efe8',
    '#fbd3c9', // rosa
    '#aed1d3', // blau
    '#ffffff',
    '#fbd3c9', // rosa
    '#ffffff',
    '#f8efe8',
    '#ffffff',
    '#aed1d3', // blau
    '#aed1d3', // blau
    '#f8efe8',
    '#ffffff',
    '#e6e6e6',
    '#f8efe8',
  ];
  selectedDay = 2;

  selectDay(i: number) {
    this.selectedDay = i;
    this.page = Page.DAY;
  }
}
