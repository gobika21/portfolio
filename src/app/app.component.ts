import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import * as portfolioData from './portfolioData.json';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatCardModule, MatButtonModule, MatChipsModule, MatProgressBarModule, MatListModule, MatIconModule, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  data: any = portfolioData;

  ngOnInit(): void {
    console.log(this.data);
  }

  onLinkedInClick(url: string): void {
    // const linkedInProfile = "https://www.linkedin.com/in/gobika-s-1818b97b/";
    window.open(url, '_blank');
  }
}
