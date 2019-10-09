import { Component, OnInit } from '@angular/core';
import { CrankAngularComponentsService } from './crank-angular-components.service';

@Component({
  selector: 'crank-crank-angular-components',
  template: `
    <p>
      crank-angular-components works!
    </p>
  `,
  styles: [],
  providers: [CrankAngularComponentsService]
})
export class CrankAngularComponentsComponent implements OnInit {

  constructor(private crankAngularComponentsService: CrankAngularComponentsService) { }

  ngOnInit() {
  }

}
