//js
//@ significa importar de dentro do path... e o angular encontra
import { Component, Inject } from '@angular/core';

//typescript - ts
//decorator
@Component({
    // faz com q o componente procute o template relativo a sua pasta, ou seja, sem termos q informar o caminho completo do hmtl
    moduleId: module.id,
    // o selector eh o que sera usado para chamar o componte na pagina html
    selector: 'app',
    templateUrl: './app.component.html'
})

// js
export class AppComponent{ }