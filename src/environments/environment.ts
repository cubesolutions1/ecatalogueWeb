// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'https://admin.neod-distri.fr:3116/api/v1/',
  // apiUrl: 'http://192.168.137.239:3112/api/v1/',
  // apiUrl: 'https://ecatalogueapi.herokuapp.com/api/v1/',
    //apiUrl: 'http://192.168.43.11:3112/api/v1/',
  // apiUrl: 'http://catalogueadmin.gmes.fr:3114/api/v1/',
  // apiUrl: 'http://catalogueapi.netlify.app:3112/api/v1/',

  apiImg: 'https://admin.neod-distri.fr:3116/img/',
  // apiImg: 'http://192.168.137.239:3112/img/',
  // apiImg: 'https://ecatalogueapi.herokuapp.com/img/',
   //apiImg: 'http://192.168.43.11:3112/img/',
  // apiImg: 'http://catalogueadmin.gmes.fr:3114/img/',
  // apiPDF: 'http://localhost:3112/pdf/index.html?produit=',

  TOKEN: 'token',
  currentAdmin: 'currentAdmin',
  idUser: 'idUser',
  expires_at: 'expires_at'
};

