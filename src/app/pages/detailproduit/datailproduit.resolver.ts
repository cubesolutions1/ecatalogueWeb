import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { CatalogueService } from "../../shared/services/catalogues.service";

@Injectable()
export class ProductDetailsResolver implements Resolve<any>
{
    /**
     * Constructor
     *
     *
     */
    constructor(
        private catalogueService :CatalogueService
    )
    {
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @returns {Promise<any>}
     */
    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any
    {
        return this.catalogueService.getproduitById(route.paramMap.get('idproduit'))

    }
}
