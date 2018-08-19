
let NODE_ENV = "developpement"
let AdminMail = "tim@hellozack.fr"
module.exports = {
  NODE_ENV: NODE_ENV,
  AdminMail: NODE_ENV=="production"?AdminMail:"etienne.m.laval@gmail.com"
}