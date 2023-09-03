import { Blogs } from "./Blogs";
import { blogData } from "./blog-data";


export class BlogService{
    public getAllBlogs():Blogs[]{
        return blogData;
    }
}