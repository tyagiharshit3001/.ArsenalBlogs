import { Component, EventEmitter, Output } from '@angular/core';
import { BlogService } from '../Blogs/blog-service';
import { Blogs } from '../Blogs/Blogs';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent {

  @Output()
  addBlogEvent:EventEmitter<Blogs> = new EventEmitter<Blogs>();
  blog:Blogs = new Blogs("","");

  public addBlogs(t:string, b:string){
    this.addBlogEvent.emit(new Blogs(t, b));
    //this.blogArr.push(blog);
  }
}

/*  blogArr:Blogs[] = [];

  constructor(private blogService:BlogService){
    this.blogArr = blogService.getAllBlogs();
  }
  */