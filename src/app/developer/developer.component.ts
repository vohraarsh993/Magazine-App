import { Component, OnInit } from '@angular/core';
import { MagazineService } from './../magazine.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  p:number=1;
  developerData=[{
    id:'',
    name:'',
    image_background:'',
  }]
    constructor(private mservice : MagazineService) { 
      this.mservice.getGamesInfo('developers').subscribe(res=>{
        this.developerData=res.results;
      })
   }
  ngOnInit(): void {
  }

}