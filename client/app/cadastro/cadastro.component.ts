import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component'
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent();
    http: Http;
    meuForm: FormGroup;
    service : FotoService
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(service : FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router){
        this.service = service;
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {
                let id = params['id'];
                console.log("id: "+ id);
                if(id){
                    this.service.buscarPorId(id).subscribe(
                        foto => this.foto = foto,
                        erro => console.log(erro)
                    )
                }
            }
        );

        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
            , url: ['', Validators.required]
            , descricao: ['']
        })
    }

    cadastrar(event : Event){
        // previne o compormento default do javascript que é submeter o formulario, isso evitará que a página seja recarregada
        event.preventDefault();
        console.log(this.foto);

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.service.cadastra(this.foto).subscribe(()=>{
            this.foto = new FotoComponent();
            console.log('Foto salva com sucesso');
            this.router.navigate([""]);
        }, erro => {
            console.log(erro);
        })
    }
 }