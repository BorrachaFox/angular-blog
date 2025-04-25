import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-content',
  imports: [RouterLink, MarkdownModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.component.markdown.css'],
})
export class ContentComponent {
  photoCover: string ='';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: number | null = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.setValuesToComponent(this.id);
    });
  }
  

  setValuesToComponent(id: number | null) {
    const result = dataFake.find((item) => item.id === id);

    if (!result) return console.error('Article not found!');

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
