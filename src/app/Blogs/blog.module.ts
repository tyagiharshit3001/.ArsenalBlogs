import { NgModule } from "@angular/core";
import { BlogService } from "./blog-service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@NgModule({
    declarations:[],
    imports:[FormsModule, CommonModule],
    exports:[],
    providers:[BlogService]

})

export class BlogModule{

}