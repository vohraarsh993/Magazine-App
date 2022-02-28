import { Component, OnInit } from '@angular/core';
import { MagazineService } from './../magazine.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  p:number=1;
  genreData=[{
    id:'',
    name:'',
    image_background:'',
  }]
    constructor(private mservice : MagazineService) { 
      this.mservice.getGamesInfo('genres').subscribe(res=>{
        this.genreData=res.results;

      })
    }
  ngOnInit(): void {
  }

}
