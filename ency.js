class Ency {
  constructor() {
    this.members = {};
  }

  add(key, value) {
    let current = this.members;
    //Bütün harfler için yap:
    for (let sira = 1; sira < key.length + 1; sira++) {
      //Sonraki: 0 ile n inci karakter arası
      let next = key.substring(0, sira);
      //eğer şuanki objede bu varsa,
      if (current.hasOwnProperty(next)) {
        current = current[next];
        //yoksa oluştur ve currenti oluşturduğun yap.
      } else {
        current[next] = !isObject(current) ? { default: current } : {};
        current = current[next];
      }
    }
    if (isObject(current)) {
      current["default"] = value;
    }
  }
  get(key) {
    let current = this.members;
    for (let sira = 1; sira <= key.length; sira++) {
      let next = key.substring(0, sira);
      try {
        current = current[next];
      } catch (error) {
        return null;
      }
    }
    if (current.hasOwnProperty("default")) {
      return current["default"];
    } else {
      return !isObject(current) ? current : null;
    }
  }
}

//USAGE
// myEnc= new Ency();
// To Add to Encylopedia:
//myEnc.add(key,value)
// To Get from Encylopedia:
//myEnc.get(key)
