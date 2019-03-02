import express from 'express';
import youtubeSearch from 'youtube-search';

const youtubeKey = process.env.YOUTUBE_KEY;
const app = express();

app.get('/videos/:game', (req, res) => {
  if (!youtubeKey) {
    return res.status(500).json({ error: 'Server error' });
  }

  youtubeSearch(
    `${req.params.game} snes`,
    { key: youtubeKey, maxResults: 3 },
    (youtubeErr, youtubeRes) => {
      if (youtubeErr) {
        return res.status(500).json({
          message: youtubeErr,
        });
      }

      const videos = youtubeRes.map(video =>
        video.link.substr(video.link.indexOf('=') + 1)
      );

      res.json(videos);
    }
  );
});

export default app;
