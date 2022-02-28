import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MagazineService } from './../magazine.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
t:string="";
p:number=1;
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
      this.t=rec['topic'];
      this.mservice.getLatestNewsByTopic(this.t).subscribe(res=>{
        this.newsData=res.articles;
        console.log(this.newsData)
      })

    })
   }
  ngOnInit(): void {
  }

}
