import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

import { RegisterFirstStepModel } from '../models';
import { EnviromentsConstants, HostnameConstants } from '../shared/constants';
import { HttpService } from './http.service';
import { Utilities } from './utilities';

@Injectable()
export class SolicitudCreditoService {
    private SOLICITUDCREDITO_ENDPOINT: string = 'T_SolicitudCredito';
    private BASE_URL: string = Utilities.buildRequestURL(
        HostnameConstants.VALENTINE_WEBAPI.host);
    private REQUEST_URL: string;
    private URL: string;
    constructor(private httpService: HttpService) {
        if (this.httpService.enviroment === EnviromentsConstants.BD) {
            this.REQUEST_URL = `${this.BASE_URL}${this.SOLICITUDCREDITO_ENDPOINT}`;
        }
    }

    public registerFirstStep(model: RegisterFirstStepModel): Observable<RegisterFirstStepModel> {
        this.URL = `${this.REQUEST_URL}`;
        return this.httpService.post(this.URL, model);
    }

    public registerSecondStep(id: number, model: RegisterFirstStepModel): Observable<any> {
        this.URL = `${this.REQUEST_URL}/${id}`;
        return this.httpService.put(this.URL, model);
    }

}
