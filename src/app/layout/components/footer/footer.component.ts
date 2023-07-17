import { Component, OnInit, signal } from '@angular/core';
import { SocialNetwokIcon } from '@data/interfaces/social-netwok.interface';
import { FooterService } from '@data/services/layout-services/footer.service';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent implements OnInit {
  public socialNetworkIconList = signal<SocialNetwokIcon[]>([]);
  constructor(private footerService: FooterService) {}
  ngOnInit(): void {
    this.socialNetworkIconList = signal(
      this.footerService.getSocialNetworkIconList()
    );
  }
}
