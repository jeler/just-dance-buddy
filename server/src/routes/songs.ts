import { Router } from 'express';
import { GetSongs, GetSongsFromSearch } from '../controllers/songs';

const router = Router();

router.get('/', GetSongs);

router.get('/search', GetSongsFromSearch);

export default router;
