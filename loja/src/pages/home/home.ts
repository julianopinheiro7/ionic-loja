import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutoService } from './../../services/produto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ProdutoService
  ]
})
export class HomePage implements OnInit {

  public title : String = 'Página inicial';
  produtos: any;

  constructor(
    public navCtrl: NavController,
    public ps : ProdutoService
  ) {
    
  }

  detalhes(codigo: number) {
    this.navCtrl.push('DetalhesPage', {codigo})
  }

  ngOnInit() {
    
    this.ps.listarProdutos().subscribe(
      dados => this.produtos = dados,
      erro => console.log(erro)
    );
    
  }

}
