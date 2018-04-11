import {
  BrowserModule
} from '@angular/platform-browser';
import {
  Component
} from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  activateSmoothTransitions(e) {
   $('.with-transition').removeClass('transitions-disabled');
   alert('Transitions were applied');
  }
  deactivateSmoothTransitions(e) {
    $('.with-transition').addClass('transitions-disabled');
    alert('Transitions were removed');
  }
}
