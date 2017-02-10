System.register(["@angular/core", "@angular/platform-browser", "@angular/router", "./app.component", "./components/bash.component", "./components/osc.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, router_1, app_component_1, bash_component_1, osc_component_1, appRoutes, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (bash_component_1_1) {
                bash_component_1 = bash_component_1_1;
            },
            function (osc_component_1_1) {
                osc_component_1 = osc_component_1_1;
            }
        ],
        execute: function () {
            //import { PageNotFoundComponent } from './components/notfound.component';
            appRoutes = [
                { path: 'bash', component: bash_component_1.BashComponent },
                { path: 'osc', component: osc_component_1.OscComponent },
            ];
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes)],
                    declarations: [app_component_1.AppComponent, bash_component_1.BashComponent, osc_component_1.OscComponent],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map