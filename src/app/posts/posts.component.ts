import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash'; 

import { PostsServices } from './posts.services';
import { UsersServices } from '../users/users.services';
import { PaginationComponent } from '../common/pagination.component';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  users=[];
  results = [];
  isLoading = true;
  currentPost;
  commentsLoading;
  pageSize=15;
  pagedPosts = [];

  constructor(private _postServices : PostsServices, private _userService : UsersServices) { }

  ngOnInit() {
  this.loadUsers()
  this.loadPosts() 
}

  loadUsers(){
    this._userService.getUsers()
      .subscribe(users => this.users = users);
  }

  loadPosts(filter?){
    this.isLoading = true;
    this._postServices.getServices(filter)
      .subscribe(results =>{
        this.results = results,
        this.pagedPosts = _.take(this.results, this.pageSize)
      },
      null,
      () => {this.isLoading = false;}
      )
  }

  onClick(selectedData){
    this.currentPost = selectedData;
    this.commentsLoading = true;
    this._postServices.getComments(selectedData.id)
      .subscribe(data =>
        this.currentPost.comments = data,
        null,
        () => {this.commentsLoading = false;}
      )
  }
  onchange(e){
    this.currentPost = null;
    this.loadPosts(e.target.value)
  }
  onPageChanged(page) {
    var startIndex = (page - 1) * this.pageSize;
    this.pagedPosts = _.take(_.drop(this.results, startIndex), this.pageSize);
	}
}
