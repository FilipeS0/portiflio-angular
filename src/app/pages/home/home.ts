import { Component } from '@angular/core';
import { MenuHeader } from '../../components/menu-header/menu-header';
import { Presentation } from '../../components/presentation/presentation';

@Component({
  selector: 'app-home',
  imports: [MenuHeader, Presentation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
