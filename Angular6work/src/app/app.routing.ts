import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';



import { ContentListComponent } from './content-list/content-list.component';
import { ContentEditComponent } from './content-edit/content-edit.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { AddContentComponent } from './add-content/add-content.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'content-list', component: ContentListComponent },
    { path: 'content-edit', component: ContentEditComponent },
    { path: 'home', component: HomeComponent },
    { path: 'content-detail', component: ContentDetailComponent },
    { path: 'add-content', component: AddContentComponent },
    { path: 'content-list', component: ContentListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);