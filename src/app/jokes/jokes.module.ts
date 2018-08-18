import { NgModule } from "@angular/core";
import { JokesComponent } from "./jokes.component";
import { RouterModule } from "@angular/router";
import { jokesRoutes } from "./jokes.routes";

@NgModule({
    declarations:[
        JokesComponent
    ],
    imports: [
        RouterModule.forChild(jokesRoutes)
    ],
    providers: [],
    bootstrap: []
})

export class JokesModule { }
