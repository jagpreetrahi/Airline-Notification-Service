const CrudRepository = require('./crud_repository');
const {Email}  = require('../models')
class EmailRepository extends CrudRepository{
   
    constructor(){
      super(Email)
    }
}

module.exports = EmailRepository