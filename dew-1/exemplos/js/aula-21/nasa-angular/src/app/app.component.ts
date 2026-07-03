import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="cabecalho">
      <h1>Aprendendo Angular com a NASA</h1>
      <nav>
        <a routerLink="/">Inicio</a>
        <a routerLink="/sobre">Sobre</a>
      </nav>
    </header>

    <main class="conteudo">
      <router-outlet />
    </main>
  `,
  styles: [
    `
      :host { display: block; font-family: Arial, sans-serif; }
      .cabecalho { background: #0f172a; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
      .cabecalho nav a { color: white; margin-left: 1rem; text-decoration: none; }
      .conteudo { padding: 2rem; }
    `,
  ],
})
export class AppComponent {}
