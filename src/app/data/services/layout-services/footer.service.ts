import { Injectable } from '@angular/core';
import { SocialNetwokIcon } from '@data/interfaces/social-netwok.interface';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  private socialNetworkList: SocialNetwokIcon[] = [];

  constructor() {}

  getSocialNetworkIconList(): SocialNetwokIcon[] {
    this.socialNetworkList = [
      {
        url: 'https://www.linkedin.com/in/henrry-cordovillo-3b807a97/',
        src: 'assets/icons/linkedin_icon.svg',
        alt: 'link de comunicaion para linkedin',
      },
      {
        url: 'https://github.com/HenrryCordovillo',
        src: 'assets/icons/github_icon.svg',
        alt: 'link de comunicaion para github',
      },
      {
        url: '',
        src: 'assets/icons/whatsapp_icon.svg',
        alt: 'link de comunicaion para whatsapp',
      },
      {
        url: '',
        src: 'assets/icons/mail_icon.svg',
        alt: 'link de comunicaion para mail',
      },
      {
        url: '',
        src: 'assets/icons/telegram_icon.svg',
        alt: 'link de comunicaion para telegram',
      },
    ];
    return [...this.socialNetworkList];
  }
}
