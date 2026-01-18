import { Component } from '@angular/core';
import { MenuHeader } from '../../components/menu-header/menu-header';
import { Presentation } from '../../components/presentation/presentation';
import { About } from '../../components/about/about';
import { Projects } from '../../components/projects/projects';

@Component({
  selector: 'app-home',
  imports: [MenuHeader, Presentation, About, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
