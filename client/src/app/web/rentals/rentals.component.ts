import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: [
    './rentals.component.scss',
    '../index/packages/packages.component.scss'
  ]
})
export class RentalsComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.setData();
  }

  setData(){
    this.translate.get('alquiler.tab-title').subscribe((res: string) => {
      document.title = res;
    });
  }
}
