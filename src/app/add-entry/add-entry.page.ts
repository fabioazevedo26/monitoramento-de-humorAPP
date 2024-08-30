import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoodService, MoodEntry } from '../services/mood.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.page.html',
  styleUrls: ['./add-entry.page.scss'],
})
export class AddEntryPage {
  mood: string = '';
  note: string = '';

  constructor(private moodService: MoodService, private router: Router) { }

  addEntry() {
    const newEntry: MoodEntry = {
      date: new Date().toISOString(),
      mood: this.mood,
      note: this.note
    };

    this.moodService.addEntry(newEntry);
    this.router.navigate(['/home']);
  }
}

