import { Component, OnInit, Input } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {
  @Input() recoil: string = '';

  constructor() { }

  ngOnInit(): void {
    ScrollReveal().reveal('.scroll-reveal-300', { delay: 300, easing: 'ease-in' });
    ScrollReveal().reveal('.scroll-reveal-100', { delay: 100, easing: 'ease-in'  });
  }

}
