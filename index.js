function makeid() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

class Enco {
  constructor() {
    this.members = {
      s: {
        se: {
          sel: {
            sela: "okundu",
            sele: "Kutu",
          },
          ser: {
            sert: "Demir",
            serd: {
              serda: {
                serdar: "ortaç",
              },
            },
          },
        },
      },
    };
  }

  add(key, value) {
    let current = this.members;
    //Bütün harfler için yap:
    for (let sira = 1; sira < key.length; sira++) {
      //Sonraki: 0 ile n inci karakter arası
      let next = key.substring(0, sira);
      //eğer şuanki objede bu varsa,
      if (current.hasOwnProperty(next)) {
        //devam et...
        if (sira === key.length - 1) {
          if (isObject(current[next])) {
            // current = current[1];
            console.log("bak", current[next]);
          } else {
            current = current[next];
          }
        } else {
          current = current[next];
        }

        //yoksa oluştur ve currenti oluşturduğun yap.
      } else {
        current[next] = {};
        current = current[next];
      }
    }
    current[key] = value;
    console.log(current);
  }
  find(key) {
    let current = this.members;
    for (let sira = 1; sira <= key.length; sira++) {
      let next = key.substring(0, sira);
      current = current[next];
    }
    return current;
  }
}
let ben = new Enco(5, 10, 10);
ben.add("seyahat", "mehmet");
console.log(ben);

ben.add("seya", "mehmet");
