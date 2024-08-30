import { Injectable } from '@angular/core';

export interface MoodEntry {
  date: string;
  mood: string;
  note: string;
}

@Injectable({
  providedIn: 'root'
})
export class MoodService {
  private entries: MoodEntry[] = [];

  constructor() { }

  addEntry(entry: MoodEntry) {
    this.entries.push(entry);
  }

  getEntries(): MoodEntry[] {
    return this.entries;
  }
}
