import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

import { ParametroModel } from '../models';
import { EnviromentsConstants, HostnameConstants, ValuesClipsConstants } from '../shared/constants';
import { HttpService } from './http.service';
import { Utilities } from './utilities';

@Injectable()
export class ClipsService {
    private URL: string;
    constructor(private httpService: HttpService) {
        if (this.httpService.enviroment === EnviromentsConstants.BD) {
            this.URL = HostnameConstants.CLIPS_WEBAPI.host;
        }
    }

    public getResultEvaluation(): Observable<string> {
        this.URL = `${this.URL}`;
        var value = Math.floor(Math.random() * 3) + 1;
        var postValue = null;
        if (value == 1) {
            postValue = ValuesClipsConstants.Number1;
        }
        else if (value == 2) {
            postValue = ValuesClipsConstants.Number2;
        }
        else {
            postValue = ValuesClipsConstants.Number3;
        }
        return this.httpService.post(this.URL, postValue);
    }
}
