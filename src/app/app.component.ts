import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'maktabty';

  constructor(private translate: TranslateService) {
  }
  ngOnInit() {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');
    const dom: any = document.querySelector('body');
    /* dom.classList.toggle('rtl'); */
 }

}
