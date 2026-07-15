import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-concept-chip',
  standalone: true,
  template: `
    <button type="button" (click)="onClick()">
      {{ label }}
    </button>
  `,
  styles: [`
    button {
      border: 0;
      border-radius: 999px;
      padding: 0.5rem 0.9rem;
      background: #0f172a;
      color: white;
      cursor: pointer;
    }
  `],
})
export class ConceptChipComponent {
  @Input() label = 'Conceito';
  @Output() selected = new EventEmitter<string>();

  onClick(): void {
    this.selected.emit(this.label);
  }
}
