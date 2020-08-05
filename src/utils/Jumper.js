const uris = {
  Home: { uri: "/", scroll: 0, label: "Hone" },
  LastNight: { uri: "/", scroll: 975, label: "LasyNight" },
  Apparatus: { uri: "/", scroll: 1700, label: "Apparatus" },
  Beast: { uri: "/monster", scroll: 0, label: "Beast" },
  Between: { uri: "/between", scroll: 0, label: "Between" },
  Technology: { uri: "/technology", scroll: 0, label: "Technology" },
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
  jumpTo(locName, history, dispatch) {
    const info = uris[locName];
    if (!info) return;
    history.push(info.uri);
    setTimeout(() => {
      window.scrollTo({ top: info.scroll, behavior: "smooth" });
    }, 100);
    const label = info.label;
    if (dispatch && label) {
      dispatch({ type: "menuUpdate", payload: { menu: label } });
    }
  }
  registerLoc(locName, uri, ref) {
    this.locations.set(locName, { uri, ref });
  }
}

export default Jumper;
