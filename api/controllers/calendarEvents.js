const Model = require("../models/index");
const { CalendarEvent } = Model;

const calendarEventController = {
  all(req, res) {
    CalendarEvent.find({}).exec((err, calendarEvents) => res.json(events));
  },
  create(req, res) {
    var requestBody = req.body;
    var newEvent = new CalendarEvent({
      startDate: requestBody.startDate,
      endDate: requestBody.endDate,
      name: requestBody.name,
      description: requestBody.description,
      id: requestBody.id,
    });
    newEvent.save();
  }
};

module.exports = calendarEventController;
