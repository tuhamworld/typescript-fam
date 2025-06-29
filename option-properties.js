var WordPress = {
    name: "WordPress",
    language: "PHP",
    developers: "Community contributors and WordPress Foundation",
    year: 2003
};
var Drupal = {
    name: "Drupal",
    language: "PHP, JavaScript",
    developers: "Drupal community",
};
var displayInfo = function (CMS) {
    console.log("".concat(CMS.name, " is developed by ").concat(CMS.developers, " in ").concat(CMS.language, " language in ").concat(CMS.year));
};
displayInfo(WordPress);
displayInfo(Drupal);
