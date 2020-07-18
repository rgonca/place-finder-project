module.exports = app => {

  // Base URLS
  app.use('/', require('./base'))
  app.use('/api', require('./auth'))
  app.use('/api/person', require('./person'))
}
