import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit{
  postsArray:any;
  categoryObj:any;
  constructor( private _route:ActivatedRoute, private _post : PostsService){}

ngOnInit(): void {
  this._route.params.subscribe(val=>{console.log(val['id']);
  this.categoryObj=val;
  this._post.loadCategory(val['id']).subscribe(post=>{
    this.postsArray=post;
  })})
}
}
