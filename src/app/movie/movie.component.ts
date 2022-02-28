import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MagazineService } from './../magazine.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id:string="";
  imdb_id:string="";
  movie={
    id:'',
    poster_path:'',
    title:'',
    release_date:'',
    overview:'',
    original_language:'',
    backdrop_path:'',
    budget:'',
    imdb_id:'',
    production_companies:[{logo_path:'',name:'',origin_country:''}],
    genres:[{name:''}],
    popularity:''
  }
  cast={
    year:'',
    actors:[{name:'',image:'',asCharacter:''}],
    directors:{items:[{name:''}] },
    writers:{items:[{name:''}] },
    others:[{items:[{name:''}]}]
  }
  constructor(private route:ActivatedRoute, private mservice:MagazineService) {
    this.route.params.subscribe(rec=>{
      this.id=rec['id'];
      this.mservice.getMovie(this.id).subscribe(res=>{
        this.movie=res;
        this.imdb_id=res.imdb_id;
        this.mservice.getCast(this.imdb_id).subscribe(cast=>{
          this.cast=cast;
        })
      })

    })
   }
  ngOnInit(): void {
  }
}