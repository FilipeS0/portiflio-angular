import { Component } from '@angular/core';
import { Briefing } from './briefing/briefing';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-about',
  imports: [Briefing, Profile],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
