import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Article {
  id: number;
  type: 'big' | 'small';
  title: string;
  photoCover: string;
  description?: string;
  markdown?: string;
}

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private apiUrl = 'http://localhost:8080/api/artigos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }
}