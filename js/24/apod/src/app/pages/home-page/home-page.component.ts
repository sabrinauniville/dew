import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from '../../services/nasa.service';
import { ApodResponse } from '../../models/apod.model';
import { ShortenTextPipe } from '../../pipes/shorten-text.pipe';
import {
  callbackHellDemo,
  carregarDadosComAsyncAwait,
  carregarDadosComPromise,
  criarClosure,
  criarFuncoes,
  demonstrarAssincronismo,
  explicarThis,
  mostrarSincronismo,
  usarCallback,
  usarDestructuring,
  usarJson,
  usarSpreadRest,
} from '../../examples/javascript-concepts';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ShortenTextPipe],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  photoOfTheDay: ApodResponse | null = null;
  isLoading = true;
  hasError = false;
  highlights = ['HttpClient', 'Observable', 'Interface TypeScript', 'Serviço'];
  statusMessage = signal('Aguardando resposta da API da NASA...');
  concepts: string[] = [];

  constructor(private nasaService: NasaService) {}

  async ngOnInit(): Promise<void> {
    // CONCEITO: Sincronismo
    this.concepts.push(mostrarSincronismo());

    // CONCEITO: Criar funções (Function × Arrow)
    this.concepts.push(criarFuncoes());

    // CONCEITO: Explicar this
    this.concepts.push(explicarThis());

    // CONCEITO: Closures
    this.concepts.push(criarClosure());

    // CONCEITO: Destructuring
    this.concepts.push(usarDestructuring());

    // CONCEITO: Spread/Rest
    this.concepts.push(usarSpreadRest());

    // CONCEITO: JSON
    this.concepts.push(usarJson());

    // CONCEITO: Assincronismo
    const asyncResult = await demonstrarAssincronismo();
    this.concepts.push(asyncResult);

    // CONCEITO: Callback
    this.concepts.push(usarCallback((mensagem) => `${mensagem} com sucesso`));

    // CONCEITO: Callback Hell
    const callbackHellResult = await callbackHellDemo();
    this.concepts.push(callbackHellResult);

    // CONCEITO: Promise
    const promiseResult = await carregarDadosComPromise();
    this.concepts.push(promiseResult);

    // CONCEITO: Async/Await
    const asyncAwaitResult = await carregarDadosComAsyncAwait();
    this.concepts.push(asyncAwaitResult);

    this.loadPhotoOfTheDay();
  }

  private loadPhotoOfTheDay(): void {
    // CONCEITO: Consumir a API da NASA
    this.nasaService.getPhotoOfTheDay().subscribe({
      next: (data) => {
        this.photoOfTheDay = data;
        this.isLoading = false;
        this.statusMessage.set('Imagem carregada com sucesso.');
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
        this.statusMessage.set('Não foi possível carregar a imagem no momento.');
      },
    });
  }
}
