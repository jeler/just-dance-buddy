import { Router } from 'express';
import { GetTracksBySongId } from '../controllers/tracks';

const router = Router();

router.get('/:song_id', GetTracksBySongId);

export default router;
