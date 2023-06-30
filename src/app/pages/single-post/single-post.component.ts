import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  postsArray:any;
  categoryObj:any;
  similarArray:any;
constructor(private _route:ActivatedRoute, private _post:PostsService){}

ngOnInit(): void {
  this._route.params.subscribe(val=>{console.log(val['id']);
  this._post.countViews(val['id']);
  this.categoryObj=val;
  this._post.loadonePost(val['id']).subscribe(post=>{
    this.postsArray=post;
    this.loadSimilarPost(this.postsArray.category.categoryId);
    console.log("arrayypoosttt", this.postsArray)
  })})
}
loadSimilarPost(postId:any){
  this._post.loadSimilar(postId).subscribe(val=>{this.similarArray=val;})
}
}
