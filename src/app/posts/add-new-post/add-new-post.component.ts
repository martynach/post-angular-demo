import {Component, EventEmitter, Output} from '@angular/core';
import {Post} from '../post.model';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent {
  postTitle = '';
  postContent = '';

  @Output() postCreated: EventEmitter<Post> = new EventEmitter<Post>();


  onNewPostSaved() {
    this.postCreated.emit({title: this.postTitle, content: this.postContent});
  }



}
