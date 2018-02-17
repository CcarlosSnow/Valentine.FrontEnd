import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

import { CategoryModel } from '../models';
import { EnviromentsConstants, HostnameConstants } from '../shared/constants';
import { HttpService } from './http.service';
import { Utilities } from './utilities';

@Injectable()
export class CategoryService {
    private CATEGORY_ENDPOINT: string = 'Categories';
    private CATEGORYXML_ENDPOINT: string = 'CategoriesXML';
    private BASE_URL: string = Utilities.buildRequestURL(
        HostnameConstants.MULTIPLICA_WEBAPI.host);
    private REQUEST_URL: string;
    private URL: string;
    constructor(private httpService: HttpService) {
        if (this.httpService.enviroment === EnviromentsConstants.BD) {
            this.REQUEST_URL = `${this.BASE_URL}${this.CATEGORY_ENDPOINT}`;
        } else {
            this.REQUEST_URL = `${this.BASE_URL}${this.CATEGORYXML_ENDPOINT}`;
        }
    }

    public getAll(): Observable<CategoryModel[]> {
        this.URL = `${this.REQUEST_URL}`;
        return this.httpService.get(this.URL);
    }
}
