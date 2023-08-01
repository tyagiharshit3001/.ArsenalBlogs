import { Component, OnInit } from '@angular/core';
import { Blogs } from '../Blogs/Blogs';
import { blogData } from '../Blogs/blog-data';
@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
    blogArr:Blogs[] = blogData;

    
    ngOnInit():void{
        console.log("Init Done")
        
    }
}
