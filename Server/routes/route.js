import { Router } from 'express';
import payment from './payment.route.js';
import subscription from './subscription.route.js';
import checkout from './checkout.route.js';

const router = Router();

router.use('/payment', payment);
router.use('/subscription', subscription);
router.use('/checkout' , checkout);

export default router;