import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from "@angular/forms";
import { ReactiveFormsModule }    from '@angular/forms';
import { fakeBackendProvider } from './_helpers';
import { routing }  from './app.routing';

import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { AlertComponent } from './_directives';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentEditComponent } from './content-edit/content-edit.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { AddContentComponent } from './add-content/add-content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { AddContent2Component } from './add-content2/add-content2.component';
import { ContentList2Component } from './content-list2/content-list2.component';
import { DatasxDetailComponent } from './datasx-detail/datasx-detail.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    ContentListComponent,
    ContentEditComponent,
    ContentDetailComponent,
    AddContentComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    PagenotfoundComponent,
    ContentComponent,
    AddContent2Component,
    ContentList2Component,
    DatasxDetailComponent,
   
    
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
