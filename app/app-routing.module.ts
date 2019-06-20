import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
   {
    path: 'configuracao',
    loadChildren: './configuracao/configuracao.module#ConfiguracaoPageModule'
  },
  {
    path: 'ajuda',
    loadChildren: './ajuda/ajuda.module#AjudaPageModule'
  },
  { path: 'cadastro', 
  loadChildren: './cadastro/cadastro.module#CadastroPageModule' 
  },
  { path: 'detalhes', 
  loadChildren: './detalhes/detalhes.module#DetalhesPageModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
