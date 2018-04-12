import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoService } from './../../services/produto';

@IonicPage()

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
  providers: [
    ProdutoService    
  ]
})

export class DetalhesPage{

  p: any = {
    descricao : "",
    especificacao : ""    
  };
  
  codigo: any;

  constructor (
      public navCtrl: NavController,
      public navParams: NavParams,
      public ps: ProdutoService
    ) {
  }

  voltar() {
    this.navCtrl.goToRoot({});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
    this.codigo = this.navParams.get("codigo");
    
    this.ps.obterProduto(this.codigo).subscribe(
      dados => this.p = dados,
      erro => console.log(erro)
    );
    
  }

}
