import { AboutController } from "./controllers/AboutController.js";
import { ActiveBarController } from "./controllers/ActiveBarController.js";
import { BarsController } from "./controllers/BarsController.js";
import { CommentsController } from "./controllers/CommentsController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { BarView } from "./views/BarVeiw.js";
import { HomeView } from "./views/HomeView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [BarsController],
    view: HomeView
  },
  {
    path: '#bar',
    controller: [ActiveBarController, CommentsController],
    view: BarView
  }
]




/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */