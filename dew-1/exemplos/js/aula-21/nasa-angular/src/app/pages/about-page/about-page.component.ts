import { Component } from '@angular/core';
import { ConceptCardComponent } from '../../components/concept-card/concept-card.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [ConceptCardComponent],
  template: `
    <section>
      <h2>Conceitos básicos do Angular</h2>
      <p>Este app mostra, de forma direta, ideias importantes para iniciantes.</p>

      <!-- ANGULAR-CONCEITO: componente -->
      <div class="grade">
        <app-concept-card title="Componente" description="Um componente é uma peça reutilizável da interface." />
        <!-- ANGULAR-CONCEITO: template -->
        <app-concept-card title="Template" description="O template é a parte visual escrita com HTML." />
        <!-- ANGULAR-CONCEITO: servico -->
        <app-concept-card title="Serviço" description="O serviço guarda lógica e comunicação com APIs." />
        <!-- ANGULAR-CONCEITO: rota -->
        <app-concept-card title="Rota" description="A rota define qual página aparece em cada endereço." />
      </div>
    </section>
  `,
  styles: [
    `
      .grade { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; }
    `,
  ],
})
export class AboutPageComponent {}
