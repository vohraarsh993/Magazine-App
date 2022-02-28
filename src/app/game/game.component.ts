import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MagazineService } from './../magazine.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
id:string='';
gameData={
  id:'',
  name:'',
  released:'',
  description:'',
  background_image:'',
  background_image_additional:'',
  website:''
}
  constructor(private route:ActivatedRoute,private mservice : MagazineService) { 
    this.route.params.subscribe(rec=>{
      this.id=rec['id'];
      this.mservice.getGame(this.id).subscribe(res=>{
        this.gameData=res;
      })

    })
  }

  ngOnInit(): void {
  }

}
