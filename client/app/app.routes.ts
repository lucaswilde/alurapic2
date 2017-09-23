import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const appRoutes: Routes = [
    // http://localhost:3000/
    { path: '', component: ListagemComponent },
    // http://localhost:3000/cadastro
    { path: 'cadastro', component: CadastroComponent },
    // redireciona para o padrão caso não encontre o path, ex.: http://localhost:3000/abcde
    { path: '**', redirectTo: ''}
];

// "compila" as rotas para o angular
// Sendo um módulo do ES2015, ele precisa exportar as rotas compiladas através do módulo RouterModule. 
export const routing = RouterModule.forRoot(appRoutes);