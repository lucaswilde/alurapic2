import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent{
    //fotos : Array<Object> = [];
    // outra forma de declarar um array, esse de forma menos verbosa
    fotos : Object[] = [];
    
        // a injeção de dependencia pode ser feita de 2 formas (funciona porque estamos tipando as variaveis)
        // constructor(@Inject(Http) http) {
        // ou
        constructor(http : Http) {
    
            /* comentado para usar arrow function
    
            var that = this; // aqui o this do construtor é a instância da classe Foto
            
            // angular usa RxJS (Reactive Extensions for JavaScript)
            // O RxJS é um conjunto de bibliotecas para compor programas assíncronos e baseados em eventos, usando coleções observáveis.
            // Usamos a função subscribe para que possamos "observar" os dados que são retornados, em nosso caso, a resposta do servidor
            let stream = http.get('v1/fotos')
            stream.subscribe(function(res){
                that.fotos = res.json(); // that é a instância da classe Foto
            });
            */
    
            // arrow function ( => ) é um função anonima
            // o seu diferencial não é apenas a sintaxe enxuta: toda arrow function compartilha o mesmo this léxico de seu escopo pai.
            /*
            http.get('v1/fotos').subscribe(res => {
                this.fotos = res.json();
            });
            */
            // disponibilizarmos para a função subscribe a lista de fotos já parseada (usando a função map)
            http.get('v1/fotos')
                .map(res => res.json())     
                .subscribe(
                    fotos => {
                        this.fotos = fotos;
                        console.log(this.fotos);
                    },
                    erro => console.log(erro)
                );
        }
}