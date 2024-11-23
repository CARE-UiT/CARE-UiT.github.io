import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'single-page-app';

  onClick(){
    window.location.href = 
        'https://www.strava.com/oauth/authorize?client_id=104584&response_type=code&redirect_uri=https://care-wsww.td.org.uit.no/exchange_token&approval_prompt=force&scope=activity:read_all,activity:read';
  }
}
