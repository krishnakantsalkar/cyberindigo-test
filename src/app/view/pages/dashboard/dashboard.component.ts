import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public date!: Date;

  public daysOfTheWeek: any[] = [
    {
      day: 'Mon',
      color_one: 'progress_color--four',
      color_two: 'progress_color--two',
      color_three: 'progress_color--one',
      value_one: '0%',
      value_two: '0%',
      value_three: '0%',
    },

    {
      day: 'Tue',
      color_one: 'progress_color--three',
      color_two: 'progress_color--two',
      color_three: 'null',
      value_one: '0%',
      value_two: '0%',
      value_three: '0%',
    },
    {
      day: 'Wed',
      color_one: 'progress_color--four',
      color_two: 'progress_color--one',
      color_three: 'progress_color--three',
      value_one: '0%',
      value_two: '0%',
      value_three: '0%',
    },
    {
      day: 'Thu',
      color_one: 'null',
      color_two: 'progress_color--two',
      color_three: 'progress_color--three',
      value_one: '0%',
      value_two: '0%',
      value_three: '0%',
    },
    {
      day: 'Fri',
      color_one: 'null',
      color_two: 'progress_color--two',
      color_three: 'progress_color--four',
      value_one: '0%',
      value_two: '0%',
      value_three: '0%',
    },
    {
      day: 'Sat',
      color_one: 'null',
      color_two: 'progress_color--one',
      color_three: 'progress_color--three',
      value_one: '0%',
      value_two: '0%',
      value_three: '0%',
    },
    {
      day: 'Sun',
      color_one: 'progress_color--two',
      color_two: 'progress_color--one',
      color_three: 'progress_color--three',
      value_one: '0%',
      value_two: '0%',
      value_three: '0%',
    },
  ];
  public timeProgressHeight: string = '0';
  public latestProgressHeight: string = '0';

  public unitsArr: any[] = [
    {
      unitNo: 'Unit 5',
      unitName: 'Technology',
      unitValue: '25%',
      color: 'progress_color--two',
    },
    {
      unitNo: 'Unit 12',
      unitName: 'Ecology',
      unitValue: '44%',
      color: 'progress_color--three',
    },
    {
      unitNo: 'Unit 9',
      unitName: 'Real estate',
      unitValue: '40%',
      color: 'progress_color--three',
    },
    {
      unitNo: 'Unit 8',
      unitName: 'Education',
      unitValue: '15%',
      color: 'progress_color--two',
    },
    {
      unitNo: 'Unit 16',
      unitName: 'Job market',
      unitValue: '76%',
      color: 'progress_color--three',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.date = new Date();

    setTimeout(() => {
      this.daysOfTheWeek = [
        {
          day: 'Mon',
          color_one: 'progress_color--four',
          color_two: 'progress_color--two',
          color_three: 'progress_color--one',
          value_one: '30%',
          value_two: '20%',
          value_three: '50%',
        },

        {
          day: 'Tue',
          color_one: 'null',
          color_two: 'progress_color--two',
          color_three: 'progress_color--three',
          value_one: '0',
          value_two: '10%',
          value_three: '90%',
        },
        {
          day: 'Wed',
          color_one: 'progress_color--four',
          color_two: 'progress_color--one',
          color_three: 'progress_color--three',
          value_one: '10%',
          value_two: '50%',
          value_three: '40%',
        },
        {
          day: 'Thu',
          color_one: 'null',
          color_two: 'progress_color--two',
          color_three: 'progress_color--three',
          value_one: '0',
          value_two: '40%',
          value_three: '60%',
        },
        {
          day: 'Fri',
          color_one: 'null',
          color_two: 'progress_color--two',
          color_three: 'progress_color--four',
          value_one: '0',
          value_two: '20%',
          value_three: '80%',
        },
        {
          day: 'Sat',
          color_one: 'null',
          color_two: 'progress_color--one',
          color_three: 'progress_color--three',
          value_one: '0',
          value_two: '60%',
          value_three: '40%',
        },
        {
          day: 'Sun',
          color_one: 'progress_color--two',
          color_two: 'progress_color--one',
          color_three: 'progress_color--three',
          value_one: '10%',
          value_two: '50%',
          value_three: '40%',
        },
      ];
      this.timeProgressHeight = '250px';
      this.latestProgressHeight = '100%';
    }, 500);
  }
}
