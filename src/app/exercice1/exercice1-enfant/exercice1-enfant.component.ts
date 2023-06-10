import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  public compteur: number = 0;
  @Output() public transmettreCompteur: EventEmitter<number> =
    new EventEmitter<number>();

  @Input() public inputCompteur: number;

  ngOnInit() {}

  augmenter(): void {
    this.compteur++;
    this.transmettreCompteur.emit(this.compteur);
  }
  reduire(): void {
    this.compteur--;
    this.transmettreCompteur.emit(this.compteur);
  }
}
