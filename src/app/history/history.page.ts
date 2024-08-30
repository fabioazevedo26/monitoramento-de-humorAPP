import { Component, OnInit } from '@angular/core';
import { MoodService, MoodEntry } from '../services/mood.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  entries: MoodEntry[] = [];

  constructor(private moodService: MoodService) { }

  ngOnInit() {
    this.entries = this.moodService.getEntries();
  }
}
