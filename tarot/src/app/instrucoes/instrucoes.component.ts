import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-instrucoes',
  templateUrl: './instrucoes.component.html',
  styleUrls: ['./instrucoes.component.sass']
})
export class InstrucoesComponent {

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

   close() {
    this.activeModal.close();
  }

}
