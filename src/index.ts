import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express';
import { AppDataSource } from './data-source';
import { errorMiddleware } from './middlewares/error';
import routes from './routes';

AppDataSource.initialize().then(() => { //
  // express
  const app = express() 
 // json
  app.use(express.json()) 
  //Calling the routes
  app.use(routes) // class route

  // An exemplo 
  app.get('/', (req, res) => {
    return res.json("tudo certo")
  })

  //ERRORS
  app.use(errorMiddleware) // class error

  //PORT OF API
  return app.listen(process.env.PORT)
})