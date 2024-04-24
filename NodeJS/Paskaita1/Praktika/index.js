import casual from "casual";

const city = casual.city;

const rng = Math.floor(Math.random() * 10 + 1);

const something = casual.phone;

const rng2 = Math.floor(casual.random * 10 + 1);

console.log(city, rng, something, rng2);

console.log(casual.name_suffix, casual.first_name, casual.last_name);
