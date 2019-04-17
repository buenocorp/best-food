var express = require("express");
var conn = require("../inc/db");
var menus = require("../inc/menus");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  menus.getMenus().then(results => {
    res.render("index", {
      title: "Best Food",
      menus: results,
      isHome: true
    });
  });
});

router.get("/contacts", function(req, res, next) {
  res.render("contacts", {
    title: "Contato",
    background: "images/img_bg_3.jpg",
    h1: "Diga um oi!"
  });
});

router.get("/menus", function(req, res, next) {
  menus.getMenus().then(results => {
    res.render("menus", {
      title: "Menu",
      background: "images/img_bg_1.jpg",
      h1: "Saboreie nosso menu!",
      menus: results
    });
  });
});

router.get("/reservations", function(req, res, next) {
  res.render("reservations", {
    title: "Reservas",
    background: "images/img_bg_2.jpg",
    h1: "Reserve uma Mesa!"
  });
});

router.get("/services", function(req, res, next) {
  res.render("services", {
    title: "Serviços",
    background: "images/img_bg_1.jpg",
    h1: "É um prazer poder servir!"
  });
});

module.exports = router;
