// bringing in mongoose
const mongoose = require("mongoose");

// create variable - instantiation of Schema Class
const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "Setup is required"],
    minlength: [10, "Setup must be at least 10 characters long"],
  },
  punchline: {
    type: String,
    required: [true, "Punchline is required"],
    minlength: [3, "Punchline must be at least 3 characters long"],
  },
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
// ^^^ ??? In the jokes.model file create a JokeSchema and export the mongoose.model("joke", JokeSchema)
