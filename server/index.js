import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import youtubeSearch from 'youtube-search';

// App
const app = express();

// Security
app.use(helmet());

// Compress responses
app.use(compression());

// YouTube API key
const youtubeKey = process.env.YOUTUBE_KEY;

// YouTube route
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
