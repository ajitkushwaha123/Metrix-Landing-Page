import { Router } from 'express';
import payment from './payment.route.js';
import subscription from './subscription.route.js';
import checkout from './checkout.route.js';
import support from './support.route.js';
import scrape from './scrape.route.js';

const router = Router();

router.use('/payment', payment);
router.use('/subscription', subscription);
router.use('/checkout' , checkout);
router.use('/support' , support);
router.use("/scrape", scrape);

export default router;