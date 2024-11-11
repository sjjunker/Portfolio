
//import serveStatic from 'serve-static';

//app.use(serveStatic('public', { index: '/index.ejs' }));
//app.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');

//let createError = require('http-errors');
let express = require('express');
let path = require('path');
//let sassMiddleware = require('node-sass-middleware');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let aboutMeRouter = require('./routes/about-me');
let contactRouter = require('./routes/contact');
let projectDetailsRouter = require('./routes/project-details');
let projectsListRouter = require('./routes/projects-list');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));*/
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about-me', aboutMeRouter);
app.use('/contact', contactRouter);
app.use('/project-details', projectDetailsRouter);
app.use('/projects-list', projectsListRouter);

// catch 404 and forward to error handler
/*app.use(function (req, res, next) {
  next(createError(404));
});*/

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
