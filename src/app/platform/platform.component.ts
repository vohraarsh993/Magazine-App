import { Component, OnInit } from '@angular/core';
import { MagazineService } from './../magazine.service';
@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {
platformData=[{
  id:'',
  name:'',
  image_background:'',
}]
  constructor(private mservice : MagazineService) { 
    this.mservice.getGamesInfo('platforms').subscribe(res=>{
      this.platformData=res.results;
    })
  }

  ngOnInit(): void {
  }

}
