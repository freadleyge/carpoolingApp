import { Routes } from "@angular/router";
import { HomeComponent } from "./static/home/home.component";
import { AboutComponent } from "./static/about/about.component";
import { ContactComponent } from "./static/contact/contact.component";

export const appRoutes : Routes= [
    {
        path: '', component : HomeComponent 
    },
    {
        path: 'home', component : HomeComponent 
    },
    {
        path: 'about', component : AboutComponent
    },
    {
        path: 'contact', component : ContactComponent
    },

    {
        path: 'user', 
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    },
]