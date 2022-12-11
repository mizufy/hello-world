import express, { Application, Request, Response } from 'express';

const app: express.Express = express();

app.use(express.json({
    limit: '50mb'
}));

app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}));

app.post('/', (req: Request, res: Response) => {
    res.status(200).send('Hello, world!');
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;