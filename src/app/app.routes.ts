import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { JokesComponent } from "./jokes/jokes.component";

export const appRoutes  = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component:HomeComponent,
        data:{
            title: 'Home-Title'
        }
    },
    {
        path:'jokes',
        component:JokesComponent,
        data:{
            title: 'Jokes-Title'
        }
    },
    {
        path: '**', // 通配符匹配  ##通配符匹配必须写在组后一个
        component: HomeComponent
    }
];
