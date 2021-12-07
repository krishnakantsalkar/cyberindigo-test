import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public sidenavOpen: boolean = true;

  public reminders: any[] = [
    {
      icon: 'error',
      content: 'Eng - Vocabulary test',
      date: '27 Sep 2019, Friday',
    },
    {
      icon: 'email',
      content: 'Eng - Send grammar homework',
      date: '24 Sep 2019, Friday',
    },
    {
      icon: 'email',
      content: 'Spanish - Send essay ',
      date: '05 Oct 2019, Monday',
    },
    {
      icon: 'email',
      content: 'Eng - Vocabulary test',
      date: '09 Oct 2019, Friday',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  public sidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }
}
