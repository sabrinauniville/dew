import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from '../../services/nasa.service';
import { ApodResponse } from '../../models/apod.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  photoOfTheDay: ApodResponse | null = null;
  isLoading = true;
  hasError = false;

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.loadPhotoOfTheDay();
  }

  private loadPhotoOfTheDay(): void {
    this.nasaService.getPhotoOfTheDay().subscribe({
      next: (data) => {
        this.photoOfTheDay = data;
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      },
    });
  }
}
