require('dotenv').config();
const Mongoose = require(`mongoose`);

Mongoose.connect(`mongodb://localhost:27017/`, { useNewUrlParser: true, useUnifiedTopology: true });

let personSchema = new Mongoose.Schema({
  "name": {"type": String, "required": true}, 
  "age": {"type": Number},
  "favoriteFoods": {"type": [String]}
});

let Person = Mongoose.model(`Person`, personSchema);

class PersonManagement {
}

PersonManagement.find = class Find {
  static name (NAME, done) {
    Person.find({"name": NAME}, (ERR, DATA) => {
      return (ERR) ? done(ERR) : done(null, DATA);
    });
  }
}

PersonManagement.create = class Create {
  static one (done) {
    let CREATED = new Person({"name": ".", "age": 0,"favoriteFoods": []});
    CREATED.save((ERR, DATA) => {
      return (ERR) ? done(ERR) : done(null, DATA);
    });
  };

  static multiple(LIST_PEOPLE, done) {
    Person.create(LIST_PEOPLE, (ERR, DATA) => {
      return (ERR) ? done(ERR) : done(null, DATA);
    })
  }
}

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = PersonManagement.create.one;
exports.findPeopleByName = PersonManagement.find.name;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = PersonManagement.create.multiple;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
