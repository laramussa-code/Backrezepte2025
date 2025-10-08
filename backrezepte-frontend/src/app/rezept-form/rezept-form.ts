import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RezepteService, Rezept } from '../service/rezepte.service';

@Component({
  selector: 'app-rezept-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rezept-form.html',
  styleUrls: ['./rezept-form.css']
})
export class RezeptForm implements OnInit {
rezept: Rezept = {
  id: 0,
  titel: '',
  beschreibung: '',
  zutaten: '',
  zubereitung: '',
  bild: '',

};
isEditMode = false;
constructor(
  private route: ActivatedRoute,
  private router: Router,
  private rezepteService: RezepteService
){}

  ngOnInit(): void {
const id = this.route.snapshot.paramMap.get('id');
if(id) {
  this.isEditMode = true;
  this.rezepteService.getRezeptById(+id).subscribe((data)  => {
    this.rezept = data;
  }
);

}
  }
onSubmit() {
  if (this.isEditMode) {
    //  Rezept aktualisieren
    this.rezepteService.updateRezept(this.rezept.id, this.rezept).subscribe(() => {
      this.router.navigate(['/rezepte']);
    });
  } else {
    //  Neues Rezept hinzufügen
    this.rezepteService.createrezept(this.rezept).subscribe(() => {
      this.router.navigate(['/rezepte']);
    });
  }
}
}
