import { Router } from 'express';
import { GetChoreographers } from '../controllers/people';

const router = Router();

router.get('/', GetChoreographers);

export default router;
