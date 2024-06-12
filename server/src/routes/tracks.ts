import { Router } from 'express';
import { GetTrackByTrackID, GetTracksBySongId } from '../controllers/tracks';

const router = Router();

router.get('/song/:song_id', GetTracksBySongId);

router.get('/:track_id', GetTrackByTrackID);

export default router;
