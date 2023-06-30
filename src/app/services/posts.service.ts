import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators'
import * as firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _fire:AngularFirestore) { }

  loadFeatured(){
    return this._fire.collection('posts', ref=>ref.where('isFeatured','==',true).limit(4)).snapshotChanges().pipe(
      map( actions=>{
        return actions.map(a=>{
          const data= a.payload.doc.data();
          const id= a.payload.doc.id;
          return {id,data}
        })
      })
    )
  }

  loadLatest()
  {
    return this._fire.collection('posts', ref=>ref.orderBy('createdAt').limit(6)).snapshotChanges().pipe(
      map( actions=>{
        return actions.map(a=>{
          const data= a.payload.doc.data();
          const id= a.payload.doc.id;
          return {id,data}
        })
      })
    )
  }

  loadCategory(categoryId:any)
  {
    return this._fire.collection('posts', ref=>ref.where('category.categoryId','==',categoryId)).snapshotChanges().pipe(
      map( actions=>{
        return actions.map(a=>{
          const data= a.payload.doc.data();
          const id= a.payload.doc.id;
          return {id,data}
        })
      })
    )
  }

  loadonePost(id:any){
    return this._fire.collection('posts').doc(id).valueChanges();
  }

  loadSimilar(categoryId:any)
  {
    return this._fire.collection('posts', ref=>ref.where('category.categoryId','==',categoryId).limit(3)).snapshotChanges().pipe(
      map( actions=>{
        return actions.map(a=>{
          const data= a.payload.doc.data();
          const id= a.payload.doc.id;
          return {id,data}
        })
      })
    )
  }

  countViews(postId:any){
    const viewsCount={
      views: firebase.default.firestore.FieldValue.increment(1)
    }
    this._fire.collection('posts').doc(postId).update(viewsCount).then(()=>{
      console.log('Views Count Updated..!')
    });
  }

}
