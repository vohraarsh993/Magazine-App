import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MagazineService } from './../magazine.service';
@Component({
  selector: 'app-snews',
  templateUrl: './snews.component.html',
  styleUrls: ['./snews.component.css']
})
export class SnewsComponent implements OnInit {
  t:string="";
  newsData=[
    {
      title:'',
      image:'',
      content:'',
      description:'',
      url:'',
      publishedAt:'',
      source:{name:'',url:''}
    }
  ];
  
    constructor(private route:ActivatedRoute,private mservice : MagazineService) {
      this.route.params.subscribe(rec=>{
        this.t=rec['query'];
        this.mservice.getNews(this.t).subscribe(res=>{
          this.newsData=res.articles;
          console.log(this.newsData)
        })
  
      })
     }
    ngOnInit(): void {
    }

}
