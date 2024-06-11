import { Router } from 'express';
// import { GetTrack, GetTracksBySongId } from '../controllers/tracks';
import { GetTrack } from '../controllers/tracks';

const router = Router();

// router.get('/:song_id', GetTracksBySongId);

router.get('/:track_id', GetTrack);

export default router;
