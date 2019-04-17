var express = require("express");
var path = require("path");

var app = express();
var PORT = 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());



var tables = [
    {
        routeName:"table1",
        name: "Table1",
        phoneNumber: 0
        
        
    },
    {
        routeName:"table2",
        name: "Table2",
        phoneNumber: 0
    },
    {
        routeName:"table3",
        name: "Table3",
        phoneNumber: 0
    
    },
    {
        routeName:"table4",
        name: "Table4",
        phoneNumber: 0
    },
    {
        routeName:"table5",
        name: "Table5",
        phoneNumber: 0
    },

];

var waitlist = [
    {
        routeName:"wai1tlist",
        name: "Waitlist1",
        phoneNumber: 0
        
        
    },
    {
        routeName:"waitlist2",
        name: "Waitlist2",
        phoneNumber: 0
    },
    {
        routeName:"waitlist3",
        name: "Waitlist3",
        phoneNumber: 0
    
    },
    {
        routeName:"waitlist4",
        name: "Waitlist4",
        phoneNumber: 0
    },
    {
        routeName:"waitlist5",
        name: "Waitlist5",
        phoneNumber: 0
    },

];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "form.html"));
  });
  
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
app.get("api/form", function(req, res) {
    return res.json(waitlist);
});


// app.get("/api/form", function(req, res) {
//     var chosen = req.params.table;
  
//     console.log(chosen);
  
//     for (var i = 0; i < table.length; i++) {
//       if (chosen === table[0].routeName) {
//         return res.json(table[i]);

//       }
//     }
  
//     return res.json(false);
//   });

  app.post("/api/form", function(req, res) {
     var newwaitlist = req.body;
  
  
    newwaitlist.routeName = newwailist.name.replace(/\s+/g, "").toLowerCase();

    newwaitlist.routeName = newwaitlist.phoneNumber.replace;

  
    console.log(newwaitlist);
  
    tables.push(newwaitlist);
  
    res.json(newwaitlist);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });