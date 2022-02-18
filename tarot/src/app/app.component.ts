import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalCartaComponent } from './modal-carta/modal-carta.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tarot';
  cartas: any;
  verifica: boolean = false;
  esconderBotao: boolean = false;


constructor(
  private apiService: ApiService,
  private modalService: NgbModal,

) {}

ngOnInit(){
  this.apiService.obterCartas().subscribe(data =>{
    this.cartas = data;
    console.log(data)
  })
}

iniciar(){
  this.esconderBotao = true;
  this.cartas.cards = this.embaralhar(this.cartas.cards)
  const card = document.querySelectorAll('.card');
  for (var i = 0; i < card.length; i++){
    card[i].classList.toggle('flipCard');
    }
  }

  selecionarCarta(index: number, item: object){
    const card = document.getElementById("card" + index)
    card.classList.remove("flipCard");
    this.verifica = true;
    this.chamarModal(item)


  }

  chamarModal(item: object){
    const optionsModal: NgbModalOptions = {
      centered: false,
      size: 'sm',
      backdrop: 'static',
      keyboard: false,
      backdropClass: 'modal-backdrop',
      windowClass: 'modal-over'
    };
    const modalRef = this.modalService.open(ModalCartaComponent, optionsModal);
    modalRef.componentInstance.item = item;
    modalRef.componentInstance.descricao = "Lorem ipsum dolor sit amet, consectetur sit elit. Phasellus dui purus, a ultricies lorem commodo nec. Nullam ac commodo diam."
  }

  reiniciar(){
    this.esconderBotao = false;
    const card = document.querySelectorAll('.card');
    for (var i = 0; i < card.length; i++){
      card[i].classList.remove('flipCard');
      }
    this.verifica = false;
  }

  embaralhar(array) {
    var m = array.length, t, i;
 
    while (m) {    
     i = Math.floor(Math.random() * m--);
     t = array[m];
     array[m] = array[i];
     array[i] = t;
    }
 
   return array;
 }

}

