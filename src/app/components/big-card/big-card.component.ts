import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css'],
})
export class BigCardComponent {
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = 'O QUE É O PROTOCOLO MCP ?';
  @Input()
  cardDescription: string =
    'Protocolo facilita a integração da IA com sistemas externos.';
  @Input()
  Id: string = '0';
}
