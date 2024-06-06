import { Router } from 'express';
import { GetSongs } from '../controllers/songs';

const router = Router();

router.get('/', GetSongs);

export default router;
