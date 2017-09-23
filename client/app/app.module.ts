import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
// importou o módulo que já possui um provider configurado, util para fazer chamadas rest
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map'; // usa do NgModule
import { PainelModule } from './painel/painel.module';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    /*Veja que nossa classe AppModule possui o decorator NgModule e que neste decorator importarmos o BrowserModule, 
    através da propriedade imports. Isso indica que um módulo anotado com ngModule pode importar outros módulos também anotados com ngModule. 
    No caso, BrowserModule, ao ser carregado, já disponibiliza diversos recursos padrões do Angular sem termos que importar cada recurso 
    individualmente como as diretivas ngIf e ngFor
    */
    imports: [
        BrowserModule
        , FotoModule
        , HttpModule
        , PainelModule
        , routing
        , FormsModule 
        , ReactiveFormsModule
    ],
    // Todos os componentes que fizerem parte do módulo, precisam ser registrados em declarations. 
    // quando o módulo da aplicação for carregado, precisamos indicar qual será o primeiro componente carregado, 
    // nesse caso queremos que seja o AppComponent tanto para o declaration quanto o bootstrap
    declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
    bootstrap: [AppComponent]
})
export class AppModule {}