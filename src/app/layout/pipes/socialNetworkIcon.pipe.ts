import { Pipe, PipeTransform } from '@angular/core';
import { SocialNetwokIcon } from '@data/interfaces/social-netwok.interface';

@Pipe({
  name: 'socialNetwroPipe',
})
export class SocialNetwrokPipe implements PipeTransform {
  transform(socialNetworkIcon: SocialNetwokIcon): unknown {
    if (!socialNetworkIcon.src || socialNetworkIcon.src === '') {
      return 'assets/icons/no-image.png';
    }
    return socialNetworkIcon.src;
  }
}
