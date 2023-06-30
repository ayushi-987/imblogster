import { Component,OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
FeaturedpostArray:any;
LatestpostArray:any;
constructor(private _posts:PostsService){}
ngOnInit(): void {
  this._posts.loadFeatured().subscribe(val=>{console.log(val,"valueee");
  this.FeaturedpostArray=val;
});
  this._posts.loadLatest().subscribe(val=>{console.log(val,"val");
  this.LatestpostArray=val;
});
}

}
