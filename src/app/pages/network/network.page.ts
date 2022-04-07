import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {

  constructor() { }
  
  ionViewDidLoad() {
    this.greeting();
  } 

  greeting() {
  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;

  if (hrs < 12)
      greet = 'Good Morning';
  else if (hrs >= 12 && hrs <= 17)
      greet = 'Good Afternoon';
  else if (hrs >= 17 && hrs <= 24)
      greet = 'Good Evening';

  if (greet == 'Good Morning' || greet == 'Good Afternoon') {
    document.getElementById('lblGreetings').innerHTML =
      '<b>' + greet + '!    </b>' + '<span><img src="/assets/custom_icons/Sun.png" class="time" style="height: 22px;"</span>';
  } else {
    document.getElementById('lblGreetings').innerHTML =
      '<b>' + greet + '!    </b>' + '<span><img src="/assets/custom_icons/Moon.png" class="time" style="height: 22px;"</span>';
  }

  }

  ngOnInit() {
  }

}
