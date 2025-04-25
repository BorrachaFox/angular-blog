import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { dataFake } from '../../data/dataFake';

interface Article {
  id: number;
  title: string;
  photoCover: string;
  description?: string;
  markdown?: string;
}

@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css'],
})
export class HomeComponent {
  articles: Article[] = dataFake;
  

  groupedArticles: { big: Article; smalls: Article[] }[] = [];

  ngOnInit() {
    this.groupArticles();
  }

  private groupArticles() {
    for (let i = 0; i < this.articles.length; i += 4) {
      const group: { big: Article; smalls: Article[] } = {
        big: this.articles[i],
        smalls: [
          this.articles[i + 1],
          this.articles[i + 2],
          this.articles[i + 3]
        ].filter(Boolean) // para evitar undefined se faltar artigos
      };
      this.groupedArticles.push(group);
    }
  }
}
