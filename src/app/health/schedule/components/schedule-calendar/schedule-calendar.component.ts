import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-schedule-calendar',
  styleUrls: ['schedule-calendar.component.scss'],
  templateUrl: './schedule-calendar.component.html'
})
export class ScheduleCalendarComponent {

  selectedDay: Date;

  @Input()
  set date(date: Date) {
    this.selectedDay = new Date(date.getTime());
  }

  @Output()
  change = new EventEmitter<Date>();

  constructor() {}

  onChange(weekOffset: number) {
    const startOfWeek = this.getStartOfWeek(new Date());
    const startDate = (
      new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate())
    );
    startDate.setDate(startDate.getDate() + (weekOffset * 7));
    this.change.emit(startDate);
  }

  private getStartOfWeek(date: Date) {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

}
