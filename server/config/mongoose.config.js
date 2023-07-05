const mongoose = require("mongoose");

/* First arg = connection string
Second arg = options to configure */

mongoose
  .connect("mongodb://127.0.0.1:27017/jokesDb", {
    // below is needed for v5, not v6
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // "THEN-able" meaning we can connect a ".then" //
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database ", err)
  );
