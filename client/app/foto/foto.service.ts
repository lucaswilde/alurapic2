import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable() // necessario para o constructor conseguir injetar o Http
export class FotoService {

    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';

    constructor(http: Http) { 

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    lista() : Observable<FotoComponent[]> {
        return this.http.get(this.url)
            .map(res => res.json());
    }

    cadastra(foto: FotoComponent) : Observable<MensagemCadastro> {
        if(foto._id){
            // atualiza
            return this.http.put(this.url + "/" + foto._id, JSON.stringify(foto), {headers: this.headers})
            .map(() => new MensagemCadastro('Foto alterada com sucesso', false));
        } else{
            // insere
            return this.http.post(this.url, JSON.stringify(foto), {headers: this.headers})
            .map(() => new MensagemCadastro('Foto incluída com sucesso', true));
            
        }
    }

    remove(foto: FotoComponent): Observable<Response>{
        return this.http.delete(this.url + "/" + foto._id, {headers: this.headers});
    }

    buscarPorId(id:string): Observable<FotoComponent>{
        return this.http.get(this.url + "/" + id).map(res => res.json());
    }

}

export class MensagemCadastro{

    // por debaixo dos panos cria das propriedades `_memsagem` e `_inclusao` como privados
    constructor(private _mensagem: string, private _inclusao: boolean) {
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }

    public get mensagem(): string {
        return this._mensagem;
    }

    public get inclusao(): boolean {
        return this._inclusao;
    }

    /*
    // _ padrao javascript para indicar atributo privado
    private _mensagem: string;
    private _inclusao: boolean;

    constructor(mensagem: string, inclusao: boolean){
        this._inclusao = inclusao;
        this._mensagem = mensagem;
    }

    getMensagem(): string{
        return this._mensagem;
    }

    isInclusao(): boolean{
        return this._inclusao;
    }
    */
}