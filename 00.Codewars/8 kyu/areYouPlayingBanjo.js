function areYouPlayingBanjo(name) {
  if (name.indexOf("R") === 0 || name.indexOf("r") === 0) {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

// Alternative solution:
function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
}
