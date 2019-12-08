import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/Article.model';
import { BaseUrl } from '../models/BaseUrl.model';

@Injectable({
  providedIn: 'root'
})

/**
 * Cette classe est un service des articles qui nous permet de faire toutes actions
 * sur les articles
 */
export class ArticleService {

  articles: Article[];

  constructor(private httpClient: HttpClient) { }


  /**
   * retourne tous les articles un tableau d'observable d'articles
   */
  getArticles() {
    return this.httpClient.get<Article[]>(BaseUrl.url + 'articles');
  }

  /**
   * retourne seulement les articles récents dans les loumas
   */
  getArticlesRecents() {
    return this.httpClient.get<Article[]>(BaseUrl.url + 'articleLimit');
  }

  getSingleArticle() {

  }
}
