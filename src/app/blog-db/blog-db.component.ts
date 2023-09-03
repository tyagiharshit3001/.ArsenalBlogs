import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogDbService } from './blog-bd.service';

@Component({
  selector: 'app-blog-db',
  templateUrl: './blog-db.component.html',
  styleUrls: ['./blog-db.component.css'],
  providers: []
})
export class BlogDbComponent implements OnInit {
    blogArr:any[] = [];

    constructor(private blogDbService:BlogDbService, private router:Router, private activeRoute:ActivatedRoute){}

    ngOnInit(): void {
      this.blogDbService.getAllBlogs().subscribe((data)=> this.blogArr = data);
    }

}
