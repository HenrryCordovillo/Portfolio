import { Component, OnInit, inject, signal } from '@angular/core';
import { SocialNetwokIcon } from '@data/interfaces/social-netwok.interface';
import { FooterService } from '@data/services/layout-services/footer.service';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent implements OnInit {
  private readonly footerService = inject(FooterService);
  public socialNetworkIconList = signal<SocialNetwokIcon[]>([]);
  constructor() {}
  ngOnInit(): void {
    this.socialNetworkIconList.update((value) =>
      this.footerService.getSocialNetworkIconList()
    );
    /*    this.socialNetworkIconList.set(
      this.footerService.getSocialNetworkIconList()
    ); */
  }
}
