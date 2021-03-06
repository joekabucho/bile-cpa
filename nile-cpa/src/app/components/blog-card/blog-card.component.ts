import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/models/post';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from 'src/app/models/appuser';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';
import {EventEmitterService} from '../../services/event-emitter.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit, OnDestroy {
  blogPost: Post[] = [];
  private unsubscribes$ = new Subject<void>();
  config: any;
  pageSizeOptions = [];
  appUser: AppUser;
  // public showLogIn: boolean = false;

  // tslint:disable-next-line: max-line-length
  constructor(
    private eventEmitterService: EventEmitterService,
    private blogService: BlogService,
    private snackBarService: SnackbarService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private commentService: CommentService) {
      // localStorage.setItem('logIn','true');
      //  console.log('logIn')
      // this.showLogIn = true;
    this.pageSizeOptions = [10, 20, 30, 40, 50, 100];
    const pageSize = localStorage.getItem('pageSize');
    this.config = {
      currentPage: 1,
      itemsPerPage: pageSize ? +pageSize : this.pageSizeOptions[0]
    };
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.config.currentPage = +params.pagenum;
        this.getBlogPosts();
      }
    );

    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
 this.firstComponentFunction();
  }

  firstComponentFunction(){
    this.eventEmitterService.onFirstComponentButtonClick();
  }
  ngOnDestroy() {
    this.unsubscribes$.next();
    this.unsubscribes$.complete();
  }

  getBlogPosts() {
    this.blogService.getAllPosts().pipe(takeUntil(this.unsubscribes$)).subscribe(result => {
      this.blogPost = result;
    });
  }

  delete(postId: string) {
    if (confirm('Are you sure')) {
      this.blogService.deletePost(postId).then(
        () => {
          this.commentService.deleteAllCommentForBlog(postId);
          this.snackBarService.showSnackBar('Blog post deleted successfully');
        }
      );
    }
  }
  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
