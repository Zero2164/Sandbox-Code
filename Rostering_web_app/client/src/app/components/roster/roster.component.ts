import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  rosterActive: boolean;
  rosterName: string;
  rosterTitle = "";
  rosterIndex: any;
  isDark: boolean;
  myControl = new FormControl();
  options: string[] = ['Vicpol', 'ADF', 'Kinetic'];
  filteredOptions: Observable<string[]>;
  links = ['Q1', 'Annual Leave', 'Sick Leave'];
  calendarActive = false;
  cActive = "opacity: 0;";
  listOfWorkGroups: string[] = ['Incidents'];
  workGroupActive = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // roster mock-data array - to retrieve the data
  rosters = [
    { title: 'Vicpol', index: 0 },
    { title: 'ADF', index: 1 },
    { title: 'Kinetic', index: 2 },
  ];

  ngOnInit() {
    // retrieve roster choice on initialisation of the component
    this.getRosterLocalStorage();
    // change the roster title and style from the local browser memory
    this.rosterNameChng(this.rosterIndex, this.rosterName);

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  // import breakpointObserver for responsive Material UI
  constructor(private breakpointObserver: BreakpointObserver) { }

  // set the last chosen roster to the local browser memory
  setRosterLocalStorage() {
    localStorage.setItem('selectedRosterStyle', this.rosterIndex);
    localStorage.setItem('selectedRosterTitle', this.rosterName);
  }

  // retrieve last roster chosen from the local browser memory
  getRosterLocalStorage() {
    this.rosterIndex = Number(localStorage.getItem('selectedRosterStyle'));
    this.rosterName = localStorage.getItem('selectedRosterTitle');
  }

  // Change the roster name and style
  rosterNameChng(index: string, title: string) {
    this.rosterActive = true;
    if (this.rosterActive) {
      this.rosterIndex = index;
      this.rosterName = title;
      this.setRosterLocalStorage();
    }
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  darkMode() {
    this.isDark = !this.isDark;
  }

  addLink() {
    this.links.push(`New Tab ${this.links.length + 1}`);
  }

  workGroupVisible() {
    this.workGroupActive = !this.workGroupActive;
  }

  calendarStyleChange() {
    this.calendarActive = true;
    if(this.calendarActive) {
      this.cActive = "opacity: 1;"
    }
    else if (!this.calendarActive) {
      this.cActive = "opacity: 0;"
    }
  }
}
