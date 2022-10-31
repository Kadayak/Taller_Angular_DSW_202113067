import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { Serie } from './serie';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public series: Array<Serie> = [];
  constructor(private seriesService: SeriesService) { }
  getSeries(){
    this.seriesService.getSeries().subscribe(
      series => {this.series = series}
    );
  }
  ngOnInit() {
    this.getSeries();
  }

  onClick(serie: Serie)
  {
    const img = document.getElementById('card-img')! as HTMLImageElement
    const name = document.getElementById('card-name')!
    const desc = document.getElementById('card-desc')!
    const link = document.getElementById('card-link')!

    img.src = serie.poster
    name.innerHTML = serie.name
    desc.innerHTML = serie.description
    link.setAttribute('href', serie.webpage)

    const card = document.getElementById('card')!
    card.classList.remove('d-none')
    console.log(serie);
  }

  seasonAverage()
  {
    let average = 0;
    this.series.forEach(serie => {
      average += serie.seasons;
    })
    average /= this.series.length;
    return average;
  }
}
