const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers'); 
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const { access } = require('fs');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({helpers});
// Setting up sessions with cookies-ST
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));
app.use(express.static('views/images')); //to access images using handlebars -ST
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes); //triggering the routes with Express-ST
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'+PORT));
});