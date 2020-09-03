const router = express.Router();

const calendarEventController =
require('../../controllers/calendarEvents')

router.get('/calendarEvents', calendarEventController.all);
router.post('/calendarEventCreate', calendarEventController.create);

module.exports = router;