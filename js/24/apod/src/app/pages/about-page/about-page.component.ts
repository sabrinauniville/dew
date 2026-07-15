import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-about-page",
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="contact-page">
      <h2>Fale conosco</h2>
      <p>
        Preencha o formulário abaixo. Esta versão é somente front-end, então a
        mensagem não será enviada para nenhum servidor.
      </p>

      <form [formGroup]="contactForm" (ngSubmit)="submitForm()" novalidate>
        <label for="name">Nome</label>
        <input
          id="name"
          type="text"
          formControlName="name"
          placeholder="Seu nome"
        />
        @if (
          contactForm.get("name")?.touched && contactForm.get("name")?.invalid
        ) {
          <small class="error"
            >Informe um nome com pelo menos 3 caracteres.</small
          >
        }

        <label for="email">E-mail</label>
        <input
          id="email"
          type="email"
          formControlName="email"
          placeholder="seu@email.com"
        />
        @if (
          contactForm.get("email")?.touched && contactForm.get("email")?.invalid
        ) {
          <small class="error">Informe um e-mail válido.</small>
        }

        <label for="subject">Assunto</label>
        <input
          id="subject"
          type="text"
          formControlName="subject"
          placeholder="Assunto da mensagem"
        />
        @if (
          contactForm.get("subject")?.touched &&
          contactForm.get("subject")?.invalid
        ) {
          <small class="error">O assunto é obrigatório.</small>
        }

        <label for="message">Mensagem</label>
        <textarea
          id="message"
          rows="5"
          formControlName="message"
          placeholder="Escreva sua mensagem"
        ></textarea>
        @if (
          contactForm.get("message")?.touched &&
          contactForm.get("message")?.invalid
        ) {
          <small class="error"
            >A mensagem deve ter pelo menos 10 caracteres.</small
          >
        }

        <button type="submit" [disabled]="contactForm.invalid">Enviar</button>
      </form>

      @if (submitted) {
        <p class="success">
          Mensagem enviada com sucesso! (simulação front-end)
        </p>
      }
    </section>
  `,
  styles: [
    `
      .contact-page {
        max-width: 480px;
        margin: 0 auto;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
      }
      label {
        font-weight: 600;
      }
      input,
      textarea {
        padding: 0.7rem;
        border: 1px solid #cbd5e1;
        border-radius: 8px;
        font: inherit;
      }
      button {
        width: fit-content;
        padding: 0.7rem 1rem;
        border: 0;
        border-radius: 8px;
        background: #0f172a;
        color: white;
        cursor: pointer;
      }
      button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .error {
        color: #b91c1c;
        display: block;
      }
      .success {
        margin-top: 1rem;
        color: #166534;
        font-weight: 600;
      }
    `,
  ],
})
export class AboutPageComponent {
  submitted = false;

  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    subject: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
    ]),
    message: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  submitForm(): void {
    if (this.contactForm.valid) {
      this.submitted = true;
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
