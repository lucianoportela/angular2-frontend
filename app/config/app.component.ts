import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';
// Statics


// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Component({
    selector: 'projeto',
    templateUrl: 'app/config/template.html'
})
export class AppComponent{
    }
