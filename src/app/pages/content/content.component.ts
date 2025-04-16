import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  photoCover: string ='';
  contentTitle: string = '';
  contentDesciption: string = '';
  private id: string | null = "0";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.find((item) => item.id === id);

    if (!result) return;

    this.contentTitle = result.title;
    this.contentDesciption = result.description;
    this.photoCover = result.photo;
  }
}
