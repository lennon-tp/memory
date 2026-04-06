import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
  ],
})
export class HomePage implements OnInit {

  cards: Card[] = [];
  flippedCards: Card[] = [];
  moves: number = 0;
  isLocked: boolean = false;
  isGameWon: boolean = false;

  private readonly CARD_IMAGES: string[] = [
    'card1.png',
    'card2.png',
    'card3.png',
    'card4.png',
    'card5.png',
    'card6.png',
    'card7.png',
    'card8.png',
  ];

  ngOnInit(): void {
    this.initGame();
  }

  initGame(): void {
    this.moves = 0;
    this.isLocked = false;
    this.isGameWon = false;
    this.flippedCards = [];
    this.cards = this.generateShuffledCards();
  }

  private generateShuffledCards(): Card[] {
    const pairs: Card[] = [];

    this.CARD_IMAGES.forEach((image, index) => {
      for (let i = 0; i < 2; i++) {
        pairs.push({
          id: index * 2 + i,
          pairId: index,
          image,
          isFlipped: false,
          isMatched: false,
        });
      }
    });

    return this.shuffle(pairs);
  }

  private shuffle(array: Card[]): Card[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  onCardClick(card: Card): void {
    if (this.isLocked || card.isFlipped || card.isMatched) {
      return;
    }

    card.isFlipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.moves++;
      this.checkMatch();
    }
  }

  private checkMatch(): void {
    const [first, second] = this.flippedCards;

    if (first.pairId === second.pairId) {
      first.isMatched = true;
      second.isMatched = true;
      this.flippedCards = [];
      this.checkVictory();
    } else {
      this.isLocked = true;
      setTimeout(() => {
        first.isFlipped = false;
        second.isFlipped = false;
        this.flippedCards = [];
        this.isLocked = false;
      }, 1000);
    }
  }

  private checkVictory(): void {
    if (this.cards.every(card => card.isMatched)) {
      this.isGameWon = true;
    }
  }
}