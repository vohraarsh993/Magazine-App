import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  topics=['breaking-news', 'business', 'technology', 'entertainment', 'sports', 'science','health'];

  constructor(private router: Router) { 

  }

  ngOnInit(): void {
  }
onSubmit(formData:any){
  let q=formData.query;
  this.router.navigate(['/snews/',q]);
}
}
