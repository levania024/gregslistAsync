import { AccountController } from "./controllers/AccountController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HousesController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController],
    view: /*html*/`
    <div class="bg-white p-3">
      <div class="card-body">
        <p>Gregslist</p>
        <a href="#/cars">
          <button class="btn btn-outline-dark" title="Go to the cars page">🚗</button>
          </a>
          <a href="#/houses">
          <button class="btn btn-outline-dark" title="Go to the house page">House</button>
          </a>
      </div>
    </div>
    `
  },
  {
    path: '#/cars',
    controllers: [CarsController],
    view: 'app/views/CarsView.html'
  },
  {
    path: '#/houses',
    controllers: [HousesController],
    view: 'app/views/HousesView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




