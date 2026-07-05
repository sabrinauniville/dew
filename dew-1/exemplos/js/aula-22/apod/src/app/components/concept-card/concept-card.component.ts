import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-concept-card',
  standalone: true,
  template: `
    <article class="card">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </article>
  `,
  styles: [
    `
      .card { border: 1px solid #cbd5e1; border-radius: 12px; padding: 1rem; background: #f8fafc; }
      h3 { margin-top: 0; }
    `,
  ],
})
export class ConceptCardComponent {
  @Input() title = 'Conceito';
  @Input() description = 'Explicação básica';
}
