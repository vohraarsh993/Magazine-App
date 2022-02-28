
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MagazineService } from './../magazine.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  p:number=1;
  t:string="";
  movieData=[{
    id:'',
    poster_path:'',
    title:'',
    release_date:'',
    overview:'',
    original_language:''
  }]
  constructor(private route:ActivatedRoute, private mservice:MagazineService) {
    this.route.params.subscribe(rec=>{
      this.t=rec['tag'];
      this.mservice.getMovies(this.t).subscribe(res=>{
        this.movieData=res.results;
      })

    })
   }

  ngOnInit(): void {
  }

}
