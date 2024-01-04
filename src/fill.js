function fill(coll, value, start, end) {
  if (start >= coll.length || end < start) {
    return coll;
  }

  let startElem = 0;
  let endElem = coll.length;

  if (start > 0 && start < coll.length) {
    startElem = start;
  }

  if (end > 0 && end < coll.length) {
    endElem = end;
  }

  for (let i = startElem; i < endElem; i++) {
    coll[i] = value;
  }

  return coll;
}

export default fill;
