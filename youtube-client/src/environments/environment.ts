// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: {production: boolean,  API_URL: string, API_KEY: string} = {
  production: false,
  API_URL: 'https://www.googleapis.com/youtube/v3/',
  API_KEY: 'AIzaSyDHsHK5sktwG3T3OXXyU3kaCXEShcSWMNQ'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
