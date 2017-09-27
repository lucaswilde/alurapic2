import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit{
    
    @Input() titulo: string;

    // ciclo de vida dos compoentes
    // é sempre chamado quando o componente é instanciado
    constructor(){

    }

    // OnInit é sempre executado quando um valor de entrada ou saida acontece
    // ou seja, temos a garantia que os parâmetros do nosso componente já foram passados
    ngOnInit(){
        this.titulo = this.titulo.length > 7
                    ? this.titulo.substr(0, 7) + '...'
                    : this.titulo;
    }

    // também temos outros métodos como OnDestroy, que é executado quando o componente é destruído 
}