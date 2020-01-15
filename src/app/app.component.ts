import { Component } from '@angular/core';
import {isBoolean} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prihlaseni';

  private jmeno = '';
  private heslo = '';
  private login = '';
  private login2 = '';
  public show = true;
  public hide = true;

  clickedButton() {

    if (this.jmeno === 'Stefan Rajilić' && this.heslo === 'borec123') {
      this.show = !this.show;
      this.hide = !this.hide;
      this.login = 'Přihlášen';
    } else {

      this.login2 = 'Špatné heslo nebo jméno';
    }
  }
}