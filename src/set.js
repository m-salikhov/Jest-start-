import _ from "lodash";

const data = { a: [{ b: { c: 3 } }] };
let dataCopy = { a: [{ b: { c: 3 } }] };

_.set(data, "a[0].b.c", true);
dataCopy.a[0].b.c = true;
