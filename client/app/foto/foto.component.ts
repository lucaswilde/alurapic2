import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})
export class FotoComponent{

    // propriedades que serao lidas pelo template
    // usando o decorator input indicamos q a propriedade pode receber valores 
    @Input() titulo : string = '';
    @Input() url : string = '';
    // esta propriedade não usará o decorator Input, pois só queremos que o componente <foto></foto> receba apenas a URL e o título como parâmetros
    descricao : string = '';

}