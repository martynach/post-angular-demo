import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {

  @Input() posts: Post[] = [];


}
