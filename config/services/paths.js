const path = require('path')
const ROOT_DIR = path.resolve(__dirname, '..');

module.exports = {
  src: path.join(ROOT_DIR, '../src'), 
  public: path.join(ROOT_DIR, '../public'),
  build: path.join(ROOT_DIR, '../public/js')
}
