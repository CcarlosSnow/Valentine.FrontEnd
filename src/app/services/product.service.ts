import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

import { ProductModel } from '../models';
import { EnviromentsConstants, HostnameConstants } from '../shared/constants';
import { HttpService } from './http.service';
import { Utilities } from './utilities';

@Injectable()
export class ProductService {
    private PRODUCT_ENDPOINT: string = 'Products';
    private PRODUCTXML_ENDPOINT: string = 'ProductsXML';
    private BASE_URL: string = Utilities.buildRequestURL(
        HostnameConstants.MULTIPLICA_WEBAPI.host);
    private REQUEST_URL: string;
    private URL: string;
    constructor(private httpService: HttpService) {
        if (this.httpService.enviroment === EnviromentsConstants.BD) {
            this.REQUEST_URL = `${this.BASE_URL}${this.PRODUCT_ENDPOINT}`;
        } else {
            this.REQUEST_URL = `${this.BASE_URL}${this.PRODUCTXML_ENDPOINT}`;
        }
    }

    public getAll(): Observable<ProductModel[]> {
        this.URL = `${this.REQUEST_URL}`;
        return this.httpService.get(this.URL);
    }

    public getById(id: number): Observable<ProductModel> {
        this.URL = `${this.REQUEST_URL}/${id}`;
        return this.httpService.get(this.URL);
    }

    public add(product: ProductModel): Observable<ProductModel> {
        this.URL = `${this.REQUEST_URL}`;
        return this.httpService.post(this.URL, product);
    }

    public update(id: number, product: ProductModel): Observable<any> {
        this.URL = `${this.REQUEST_URL}/${id}`;
        return this.httpService.put(this.URL, product);
    }

    public delete(id: number): Observable<any> {
        this.URL = `${this.REQUEST_URL}/${id}`;
        return this.httpService.delete(this.URL);
    }
}
