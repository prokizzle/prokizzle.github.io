const person = {
  name: "Nick",
  age: 33,
  location: {
    city: "Austin",
    temp: 75,
  },
};

const { name, age } = person;
const { city, temp: temperature } = person.location;
const city = { person.age }

console.log(`${person.name} is ${person.age}. ${city} is ${temperature}`);

const address = [ '1299 S Juniper St', 'Needham', 'MA', '02492'];
const [street, city, state, zip] = address;


const reset = () => ({ type: 'RESET'});

const set = ({count = 0} = {}) => ({type: 'SET', count}); 
