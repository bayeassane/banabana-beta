import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/Article.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  articlesRecents: Article[];
  ngOnInit() {
    this.articleService.getArticlesRecents().subscribe(
      (articles: Article[]) => {
        this.articlesRecents = articles;
        console.log(this.articlesRecents);
      }
    );
  }

}
