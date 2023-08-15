require('dotenv').config();

exports.findAll = (req, res) => {
 const apiKey = process.env.API_KEY;
 const searchQuery = 'programming';
 const maxResults = 10;

 fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&maxResults=${maxResults}&q=${searchQuery}`)
  .then((response) => response.json())
  .then(async (data) => {
   const videos = await Promise.all(
    data.items.map(async (item) => {
     // Fetch channel information for each video
     const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${item.snippet.channelId}&part=snippet,statistics`
     );
     const channelData = await channelResponse.json();

     return {
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
      channelTitle: item.snippet.channelTitle,
      videoId: item.id.videoId,
      channelThumbnail: channelData.items[0].snippet.thumbnails.default.url,
     };
    })
   );

   const responseData = {
    status: 'success',
    data: videos,
   };

   res.json(responseData);
  })
  .catch((error) => {
   console.error('Error fetching data:', error);
   res.status(500).json({ status: 'Failed to get data', error: 'Internal Server Error' });
  });
};

exports.findOne = (req, res) => {
 const apiKey = process.env.API_KEY;
 const videoId = req.params.videoId;

 fetch(`https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&id=${videoId}`)
  .then((response) => response.json())
  .then((data) => {
   console.log(data);
   if (data.items.length > 0) {
    const videoInfo = {
     title: data.items[0].snippet.title,
     description: data.items[0].snippet.description,
     thumbnail: data.items[0].snippet.thumbnails.high.url,
     publishedAt: data.items[0].snippet.publishedAt,
     channelTitle: data.items[0].snippet.channelTitle,
     videoId: data.items[0].id,
    };

    fetch(`https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${data.items[0].snippet.channelId}&part=snippet,statistics`)
     .then((channelResponse) => channelResponse.json())
     .then((channelData) => {
      if (channelData.items.length > 0) {
       const channelInfo = {
        channelDescription: channelData.items[0].snippet.description,
        channelThumbnail: channelData.items[0].snippet.thumbnails.default.url,
        subscriberCount: channelData.items[0].statistics.subscriberCount,
        videoCount: channelData.items[0].statistics.videoCount,
        viewCount: channelData.items[0].statistics.viewCount,
       };

       const responseData = {
        status: 'success',
        data: {
         videoInfo: videoInfo,
         channelInfo: channelInfo,
        },
       };

       res.json(responseData);
      } else {
       res.status(404).json({ error: 'Channel not found' });
      }
     })
     .catch((channelError) => {
      console.error('Error fetching channel data:', channelError);
      res.status(500).json({ error: 'Internal Server Error' });
     });
   } else {
    res.status(404).json({ error: 'Video not found' });
   }
  })
  .catch((error) => {
   console.error('Error fetching video data:', error);
   res.status(500).json({ error: 'Internal Server Error' });
  });
};
