const { CalendarEvent } = Model;

const eventController = {
  all(req, res) {
    CalendarEvent.find({}).exec((err, events) => res.json(events));
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
  },
};

module.exports = claendarEventController;
