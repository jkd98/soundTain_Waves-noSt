import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutcltPageComponent } from "./pages/layoutclt-page/layoutclt-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutcltPageComponent,
        children: [
            { path:'inicio', component:HomePageComponent },
            { path:'**', redirectTo:'inicio'  }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ClientesRoutingModule {
    
}