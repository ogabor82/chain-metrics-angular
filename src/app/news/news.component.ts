import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  @Input() imageurl!: string;
  @Input() title!: string;
  @Input() body!: string;
}
