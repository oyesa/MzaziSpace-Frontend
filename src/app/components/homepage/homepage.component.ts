import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HomepageComponent implements OnInit {

  
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig, private authService:AuthServiceService) {
    // 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }


  ngOnInit(): void {
    this.authService.getUser().subscribe((response:any)=>{
      console.log(response)
    })
  }

}
