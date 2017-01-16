import { Component } from '@angular/core';
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  })
  export class UserComponent {
    title = 'User Page!';
    body = 'You can configure the index.html file using typescript version. The SystemJS transpile the TypeScript to JavaScript before running the application by using the transpiler option.If you do not transpile to JavaScript before running the application, you could see the compiler warnings and errors which are hidden in the browser.The TypeScript generates metadata for each and every class of the code when the emitDecoratorMetadata option is set. If you dont specify this option, large amount of unused metadata will be generated which affects the file size and impact on the application runtime.Angular 2 includes the packages form the app folder where files will have the .ts extension.';
  }
