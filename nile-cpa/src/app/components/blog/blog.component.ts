import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit, OnDestroy {
  postData: Post = new Post();
  postId;
  private unsubscribe$ = new Subject<void>();
  public showLogIn: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private commentService: CommentService)
     {
    if (this.route.snapshot.params.id) {
      this.postId = this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit() {
    this.blogService.getPostbyId(this.postId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (result: Post) => {
          this.postData = result;
        }
      );
  
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
