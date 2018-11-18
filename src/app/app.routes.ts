import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form.component';
import { NotFoundComponent } from './common/notfound.component';

const APP_ROUTES: Routes=[
    { path: '', component: UsersComponent },
    { path: 'users', component: UsersComponent },
    { path: 'post', component: PostsComponent },
    { path: 'users/new', component: UserFormComponent },
    { path: 'users/:id', component: UserFormComponent },
    { path: 'notfound', component: NotFoundComponent },
	{ path: '**', redirectTo: 'notfound' }
]

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);