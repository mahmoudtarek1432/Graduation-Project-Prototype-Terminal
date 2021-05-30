import { Component } from '@angular/core';
import { settings } from './settings';
import { globlas } from './Services/Globals';
import { SettingsService } from './Services/settings.service';
import { MenuService } from './Services/menu.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TerminalPrototype';
  /**
   *
   */
   cartItems:number = 0
  settings:settings = new settings();
  constructor(private sett:SettingsService, private globals:globlas, private menuService:MenuService) {
    this.setSettings();
    this.updateSettings()

    this.globals.castCart.subscribe(result => {this.cartItems = result.length; console.log("here");});
  }

  updateSettings(){
    setInterval(this.setSettings.bind(this),5000);
    
  }
  setSettings(){
    this.sett.getSettings().subscribe(result=> {
      if(result.menuVersion > this.settings.menuVersion){
        this.menuService.getCategories().subscribe(result=> this.globals.updateCategory(result))
      }
      this.settings = result;
  })
  }

}
