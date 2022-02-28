import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MagazineService } from './../magazine.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  p:number=1;
  id:string='';
  tag:string='';
  name:string='';
  gamesData=[{
    id:'',
    name:'',
    released:'',
    background_image:''
  }]
    constructor(private route:ActivatedRoute,private mservice : MagazineService) { 
      this.route.params.subscribe(rec=>{
        this.tag=rec['tag'];
        this.id=rec['id'];
        this.name=rec['name'];
        if(this.tag=='developer'){
          this.mservice.getGamesbyDeveloper(this.id).subscribe(res=>{
            this.gamesData=res.results;
            console.log(this.gamesData)
          }) 
        }
        else if(this.tag=='genre'){
          this.mservice.getGamesbyGenre(this.id).subscribe(res=>{
            this.gamesData=res.results;
            console.log(this.gamesData)
          }) 
        }
        else if(this.tag=='platform'){
          this.mservice.getGamesbyPlatform(this.id).subscribe(res=>{
            this.gamesData=res.results;
            console.log(this.gamesData)
          }) 
        }
        else if(this.tag=='publisher'){
          this.mservice.getGamesbyPublisher(this.id).subscribe(res=>{
            this.gamesData=res.results;
            console.log(this.gamesData)
          }) 
        }
  
      })
    }
  ngOnInit(): void {
  }

}
