import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public communityIcon = '../assets/custom_icons/Community.png';
  private communityActive = '../assets/custom_icons/Community-Colored.png';
  public consultationIcon = '../assets/custom_icons/Consultation.png';
  public healthAndWellnessIcon = '../assets/custom_icons/Health-and-Wellness.png';
  public networkIcon = '../assets/custom_icons/Diary.png';
  public webinarsIcon = '../assets/custom_icons/Webinars.png';

  constructor() {}
}
