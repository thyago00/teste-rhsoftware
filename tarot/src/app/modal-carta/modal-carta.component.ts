import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-carta',
  templateUrl: './modal-carta.component.html',
  styleUrls: ['./modal-carta.component.sass']
})
export class ModalCartaComponent {
  @Input() public item: object;
  @Input() public descricao: string;
  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  close() {
    this.activeModal.close();
  }

}
