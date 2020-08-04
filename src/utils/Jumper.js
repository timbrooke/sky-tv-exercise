const uris = {
  Home: "/",
  LastNight: "/",
  Apparatus: "/",
  Beast: "/monster",
};

class Jumper {
  locations = new Map();
  static instance = null;
  static getInstance = () => {
    if (!Jumper.instance) {
      Jumper.instance = new Jumper();
    }
    return Jumper.instance;
  };
  jumpTo(locName, history) {
    const info = this.locations.get(locName);
    if (!info) {
      const uri = uris[locName];
      if (uri) {
        history.push(uri);
      }

    } else {
      if (locName) {
        history.push(info.uri);
        info.ref.current.scrollIntoView({behavior: "smooth"});
      }
    }
  }
  registerLoc(locName, uri, ref) {
    this.locations.set(locName, { uri, ref });
  }
}

export default Jumper;
