import { Component } from '@angular/core';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home-page',
  imports: [Header], // Necessário para usar o componente de cabeçalho (header) dentro do HomePage
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  standalone: true,
})
export class HomePage {}
