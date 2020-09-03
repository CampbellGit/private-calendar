const mongoose = require('mongoose');


const Schema = mongoose.Schema,
  model = mongoose.model.bind(mongoose),
  ObjectId = mongoose.Schema.Types.ObjectId;

const eventSchema = new Schema({
  id: ObjectId,
  name: String,
  startDate: Date,
  endDate: Date,
  description: String,
});

const CalendarEvent = model("CalendarEvent", eventSchema);

module.exports = CalendarEvent;
