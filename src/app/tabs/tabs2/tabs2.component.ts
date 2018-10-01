import { Component, OnInit } from '@angular/core';
import { Tab2Service } from '../../services/tab2.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-tabs2',
  templateUrl: './tabs2.component.html',
  styleUrls: ['./tabs2.component.css']
})
export class Tabs2Component implements OnInit {

  constructor(private service: Tab2Service) { }

  posts: any[];

  ngOnInit() {
    // this.service.getResponse().subscribe(response => {
    //   this.posts = response;
    // });

  //   this.service.getresponse().subscribe(response => {
  //     this.posts = response;
  //   }, error => {
  //     console.log(error);
  // });

    // this.service.getResponse().switchMap( response => {
    //   console.log(response);
    //   return this.service.getresponse()).subscribe( res => {
    //     this.posts = res;
    //   },
    //   error => {
    //     console.log(error);
    //   });

    this.service.GetResponse().subscribe(res => {
      console.log(res);
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost;
            this.posts.splice(0, 0, post);
          });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        () => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        });
  }
}


