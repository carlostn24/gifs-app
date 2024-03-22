import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './gif-card.component.html',
  styleUrl: './gif-card.component.css'
})
export class GifCardComponent implements OnInit {

  @Input()
  public gif!: Gif;

  public ngOnInit(): void {
      if ( !this.gif ) throw new Error('gif property is required');
  }

}
