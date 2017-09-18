import express from 'express';
import youTubeSearch from 'youtube-search';
import { youTubeKey } from './helpers/keys';

const app = express();

app.get('/videos/:game', (request, response) => {
  youTubeSearch(request.params.game + ' snes',
    { key: youTubeKey, maxResults: 3 },
    (youTubeError, youTubeResponse) => {
      if (youTubeError) {
        return response
          .status(404)
          .send({
            message: youTubeError
          });
      }

      const videos = youTubeResponse.map(
        video => video.link.substr(video.link.indexOf('=') + 1)
      );

      response.send(videos);
  });
});

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
