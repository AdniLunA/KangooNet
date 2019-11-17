import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'mapRole',
})
export class MapRolePipe implements PipeTransform {
    transform(value: any): any {
        return value === 'company' ? 'Unternehmen' : 'Kandidat';
    }
}
