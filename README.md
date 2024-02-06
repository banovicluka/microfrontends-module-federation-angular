# Microfrontends implemented by Angular Module Federation

All micro-applications that constitute the frontend application are developed using the Angular framework. The frontend application consists of three applications:

Web-shop application - **shell** application
Administrator application - **microfrontend 1** application
Customer support application - **microfrontend 2** application

Within the home shell application, microfrontend 1 and microfrontend 2 applications are loaded. The result of running this system is three applications running on three different ports: the **shell** application on port 4200, **microfrontend 1** on port 4201, and **microfrontend 2** on port 4202. The entire communication between applications is achieved using the NgRx state management framework with the use of RxJS principles. Communication is necessary for maintaining the theme and internationalization between microapplications that make up the display. Additionally, the implementation of title changes depending on user navigation on the page, where the corresponding microfrontend applications are or are not loaded, is also implemented.

<img width="399" alt="image" src="https://github.com/banovicluka/microfrontends-module-federation-angular/assets/58904845/25a42f1c-978b-4d8b-b5bb-efa372b73718">
<img width="399" alt="image" src="https://github.com/banovicluka/microfrontends-module-federation-angular/assets/58904845/6435cf6b-ed6f-4fd4-bafa-8d9bc9f6e766">
<img width="399" alt="image" src="https://github.com/banovicluka/microfrontends-module-federation-angular/assets/58904845/b15f1c2c-ebd0-4632-81f3-82a6bc2c922d">
<img width="399" alt="Screen Shot 2024-02-06 at 23 57 14" src="https://github.com/banovicluka/microfrontends-module-federation-angular/assets/58904845/d11865de-0f55-4359-8d5b-4ed9571fc63f">

