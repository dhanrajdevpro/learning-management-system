const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AcyYg5DfzYdjZkAK_SrhhrgLU9ymrhXePYbcj0Jj-npX94Kme0tj6P6QLek3_n0x_vRvdNsK7zquDFHV",
  client_secret:
    "EFDOxWMwtp4y2CI46mtoYI8ostrLNTeP4jZKeH5lNhheI_zjWvPu07nvQSrafLDpFHDG-u3ueiMjA4tK",
});

module.exports = paypal;
