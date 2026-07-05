import { Component, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NasaService } from "../../services/nasa.service";
import { ApodResponse } from "../../models/apod.model";
import { ShortenTextPipe } from "../../pipes/shorten-text.pipe";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [CommonModule, ShortenTextPipe],
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  title = "APOD (Astronomy Picture of the Day)";
  photoOfTheDay: ApodResponse | null = null;
  isLoading = true;
  hasError = false;
  highlights = ["HttpClient", "Observable", "Interface TypeScript", "Serviço"];
  statusMessage = signal("Aguardando resposta da API da NASA...");

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.loadPhotoOfTheDay();
  }

  private loadPhotoOfTheDay(): void {
    this.nasaService.getPhotoOfTheDay().subscribe({
      next: (data) => {
        this.photoOfTheDay = data;
        this.isLoading = false;
        this.statusMessage.set("Imagem carregada com sucesso.");
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
        this.statusMessage.set(
          "Não foi possível carregar a imagem no momento.",
        );
      },
    });
  }
}
