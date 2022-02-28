import { Component, OnInit } from '@angular/core';
import { MagazineService } from './../magazine.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  publisherData=[{
    id:'',
    name:'',
    image_background:'',
  }]
    constructor(private mservice : MagazineService) { 
      this.mservice.getGamesInfo('publishers').subscribe(res=>{
        this.publisherData=res.results;
      })
    }
  ngOnInit(): void {
  }

}
