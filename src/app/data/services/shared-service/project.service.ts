import { Injectable } from '@angular/core';
import { Project } from '@data/interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public projectList: Project[] = [];

  constructor() {}

  getProjetList(): Project[] {
    this.projectList = [
      {
        title: 'App sorteo',
        image: 'appSorteo.jpg',
        description:
          'Interactive web application that allows users to explore a map of a country and select geographic zones. After selecting a zone, users can participate in drawings for vehicles or gasoline coupons. Prizes are adjusted according to the number of customers in the zone, ensuring an equitable distribution. This unique solution merges geographic interaction with personalized sweepstakes, encouraging user participation and engagement. An effective tool for geographically tailored promotions and customer rewards.',
      },
      {
        title: 'App GIFS',
        image: 'appGifts.jpg',
        description:
          'Web app focused on GIFs. With an intuitive search bar, you can browse the most popular GIFs. Simply enter the desired name and enjoy an instant selection of 20 unique GIFs. This nimble app, built in Angular, leverages the API of Giphy, a trusted and popular source. Immerse yourself in visual creativity and share the joy of GIFs with this online experience.',
      },
      {
        title: 'App PIPES',
        image: 'appPipe.jpg',
        description:
          'Angular web application where, we showcase the full functionality of Angular pipes. Explore each property of this enriching feature of the framework while navigating through the application. Developed entirely in Angular, this platform offers an immersive educational experience on the capabilities of pipes. Discover how they enhance data presentation and add value to your web projects.',
      },
      {
        title: 'App COUNTRIES',
        image: 'appCountries.jpg',
        description:
          'Web application with multiple search menus by capital, city or region, finding countries has never been easier. Whether you search by city or other criteria, our intuitive interface allows you to enter the details and discover the corresponding countries. The results are displayed in clear and concise tables, providing you with relevant information quickly and efficiently.',
      },
    ];
    return [...this.projectList];
  }
}
