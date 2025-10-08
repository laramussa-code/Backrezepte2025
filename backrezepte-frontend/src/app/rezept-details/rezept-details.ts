import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



// Struktur 
interface Rezept {
  id: number;
  titel: string;
  beschreibung: string;
  bild: string;
  zutaten: string;
  zubereitung: string;
}

@Component({
  selector: 'app-rezept-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rezept-details.html',
  styleUrls: ['./rezept-details.css']

})
export class RezeptDetails implements OnInit {
rezept?: Rezept;   //einzelne Rezept welches angezeigt wird 

rezepte: Rezept[ ] = [
  {
    id: 1,
    titel: 'Schokokuchen',
    beschreibung: 'Saftiger Schokokuchen',
    bild: 'assets/schokokuchen.jpg',
    zutaten: 'Mehl, Zucker, Eier, Butter, Milch; Backpulver, Kakao',
    zubereitung: 'Alles zusammen mixen und bei 180grad ca. 4oMinuten backen'
  },
  {
    id: 2,
    titel: 'Apfelkuchen',
    beschreibung: 'aüfelkuchen mit Zimt',
    bild: 'assets/apfelkuchen.jpg',
    zutaten: 'Mehl, Butter, Zucker, Ei, Backpulver, Äpfel',
    zubereitung: 'Teig zubereiten, Äpfel drauflegen, bei 176grad backen'
  },
  {
    id: 3,
    titel: 'Erdbeer-Sahne-Torte',
    beschreibung: 'Fruchtige Erdbeer-Sahen-Torte',
    bild: 'assets/erdbeersahnetorte.jpg',
    zutaten: 'Biskuit, Erdbeeren, Sahne',
    zubereitung: 'Biskuit backen, Sahne schlagen, Erdbeeren schichten.'
  }
];
constructor( private route: ActivatedRoute, private router: Router) {}

ngOnInit(): void {
  this.loadRezept();

}
loadRezept() {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.rezept = this.rezepte.find( r => r.id === id);

  if(!this.rezept) {
    this.router.navigate(['/rezepte']);

  }
}

goHome() {
  this.router.navigate(['/']);
}

}
