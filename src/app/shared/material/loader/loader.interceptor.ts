import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http'
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable()
export class LoaderInterceptor {

    constructor(private _loaderService: LoaderService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._loaderService.show();
        return next.handle(req).pipe(
            finalize( () => this._loaderService.hide())
        )
    }
}
