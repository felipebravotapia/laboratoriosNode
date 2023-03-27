const express = require("express");
const router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  const title = "Persons";
  var persons = [
    {
      BusinessEntityID: 1,
      PersonType: "EM",
      NameStyle: false,
      FirstName: "Ken",
      MiddleName: "J",
      LastName: "Sánchez",
      EmailPromotion: 0,
      Demographics:
        '<IndividualSurvey xmlns="http://schemas.microsoft.com/sqlserver/2004/07/adventure-works/IndividualSurvey"><TotalPurchaseYTD>0</TotalPurchaseYTD></IndividualSurvey>',
      rowguid: "92C4279F-1207-48A3-8448-4636514EB7E2",
      ModifiedDate: "2009-01-07T00:00:00",
    },
    {
      BusinessEntityID: 2,
      PersonType: "EM",
      NameStyle: false,
      FirstName: "Terri",
      MiddleName: "Lee",
      LastName: "Duffy",
      EmailPromotion: 1,
      Demographics:
        '<IndividualSurvey xmlns="http://schemas.microsoft.com/sqlserver/2004/07/adventure-works/IndividualSurvey"><TotalPurchaseYTD>0</TotalPurchaseYTD></IndividualSurvey>',
      rowguid: "D8763459-8AA8-47CC-AFF7-C9079AF79033",
      ModifiedDate: "2008-01-24T00:00:00",
    },
  ];

  try {
    res.render("person", { title, persons });
  } catch (error) {
    console.log(error);
    res.send("hola");
  }

  //
});

module.exports = router;
