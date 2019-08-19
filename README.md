# WebsocketPoc

## Backend - Spring Boot - [Link](https://github.com/Bsd15/poc-spring-boot-websocket)

Requires @type/node package and **add 'node' in types in tsconfig.app.json**

To run SockJs and StompJs in node environment - 'net' is required. [Reference](https://github.com/jmesnil/stomp-websocket/issues/119#issuecomment-271087443)

After installing the module we will get an error **'global is not defined'**. To resolve it see [this](https://github.com/sockjs/sockjs-client/issues/439#issuecomment-398032809).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

References for WebSocket - Unicast:

[Send Notification to specific user in spring boot websocket](https://stackoverflow.com/questions/49748468/send-notification-to-specific-user-in-spring-boot-websocket)

[https://www.baeldung.com/spring-websockets-send-message-to-user](https://www.baeldung.com/spring-websockets-send-message-to-user)

[How to send websocket message to concrete user?](https://stackoverflow.com/questions/50044077/how-to-send-websocket-message-to-concrete-user)

[Sending message to specific user on Spring Websocket](https://stackoverflow.com/questions/22367223/sending-message-to-specific-user-on-spring-websocket?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)

[Where “user” comes from in convertAndSendToUser works in SockJS+Spring Websocket?](https://stackoverflow.com/questions/37853727/where-user-comes-from-in-convertandsendtouser-works-in-sockjsspring-websocket)

[Spring Docs - Websockets](https://docs.spring.io/spring-framework/docs/4.3.x/spring-framework-reference/html/websocket.html)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
