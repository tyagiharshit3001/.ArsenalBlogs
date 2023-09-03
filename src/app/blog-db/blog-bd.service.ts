import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Blogs } from "./Blogs";

@Injectable()
export class BlogDbService{
    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }

    public getAllBlogs(): Observable<any>{
        return this.httpClient.get("http://localhost:8089/arsenal/");
    }

    public getBlogById(blog_Id:number) :Observable<any>{
        return this.httpClient.get("http://localhost:8089/arsenal/"+blog_Id);
    }

    public insertBlog(b:Blogs): Observable<any>{
        return this.httpClient.get("http://localhost:8089/arsenal/insert/" + b)
    }
}