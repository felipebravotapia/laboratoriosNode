const bcrypt = require("bcrypt");

module.exports = {
  cifrador: async (valueRaw) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt
      .hash(valueRaw, salt)
      .catch((err) => console.error(err.message));
  },
  comprarCadena: async (textplano, textohash) => {
    return await bcrypt.compare(textplano, textohash.trim()).then((result) => {
      if (result) {
        return result;
      } else {
        return false;
      }
    });
  },
};
