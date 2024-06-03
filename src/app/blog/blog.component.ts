// import { Component, OnInit } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';

// @Component({
//   selector: 'app-blog',
//   templateUrl: './blog.component.html',
//   styleUrls: ['./blog.component.scss']
// })
// export class BlogComponent implements OnInit {
//   blogs: any[] = [
//     { title: '10 Tips for Successful Online Shopping', content: 'The content for 10 Tips for Successful Online Shopping', author: 'AAA' },
//     { title: 'The Importance of Product Reviews', content: 'The content for the importance of product reviews', author: 'BBB' },
//     { title: 'How to Choose the Right Size', content: 'The content for how to choose the right size', author: 'CCC' },
//     { title: 'Top Trends in Ecommerce for 2022', content: 'The content for top trends in ecommerce for 2022', author: 'DDD' },
//     { title: 'The Future of Retail: Ecommerce vs Traditional Stores', content: 'The content for the futute of retail: ecommerce vs traditional stores', author: 'EEE' }
//   ];
//   newBlog: any = {
//     title: '',
//     content: '',
//     author: ''
//   };

//   constructor(private cookieService: CookieService) { }

//   ngOnInit(): void {
//     const savedBlogs = this.cookieService.get('submittedBlogs');
//     if (savedBlogs) {
//       this.blogs = JSON.parse(savedBlogs);
//     }
//   }

//   submitBlog() {
//     if (this.newBlog.title && this.newBlog.content && this.newBlog.author) {
//       this.blogs.push({ ...this.newBlog });
  
//       this.newBlog = { title: '', content: '', author: '' };
//       // Save to cookies
//       this.cookieService.set('submittedBlogs', JSON.stringify(this.blogs));
//     }
//   }
// }

    
 
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: any[] = [
    { title: '10 Tips for Successful Online Shopping', content: 'The content for 10 Tips for Successful Online Shopping', author: 'AAA', likes: 0 },
    { title: 'The Importance of Product Reviews', content: 'The content for the importance of product reviews', author: 'BBB', likes: 0 },
    { title: 'How to Choose the Right Size', content: 'The content for how to choose the right size', author: 'CCC', likes: 0 },
    { title: 'Top Trends in Ecommerce for 2022', content: 'The content for top trends in ecommerce for 2022', author: 'DDD', likes: 0 },
    { title: 'The Future of Retail: Ecommerce vs Traditional Stores', content: 'The content for the future of retail: ecommerce vs traditional stores', author: 'EEE', likes: 0 }
  ];
  newBlog: any = {
    title: '',
    content: '',
    author: ''
  };

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    const savedBlogs = this.cookieService.get('submittedBlogs');
    if (savedBlogs) {
      this.blogs = JSON.parse(savedBlogs);
    }
  }

  submitBlog() {
    if (this.newBlog.title && this.newBlog.content && this.newBlog.author) {
      this.blogs.push({ ...this.newBlog, likes: 0 });
  
      this.newBlog = { title: '', content: '', author: '' };
      
      this.cookieService.set('submittedBlogs', JSON.stringify(this.blogs));
    }
  }

  likeBlog(blog: any) {
    blog.likes++;
    this.cookieService.set('submittedBlogs', JSON.stringify(this.blogs));
  }

  shareBlog(blog: any) {
    
    console.log('Shared:', blog.title);
  }
}
