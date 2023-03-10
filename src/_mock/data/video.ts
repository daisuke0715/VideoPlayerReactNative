import Videos from "types/Videos";

export const video: Videos = {
  id: 6299869664001,
  title: 'タイトル',
  description: '説明',
  thumbnail_url: require('../assets/thumbnail1.png'),
  is_recommended: true,
  total_duration_ms: 1000000,
  video_chapters: [
    {
      id: 6299869664001,
      source: require('../assets/video1.mp4'),
      description: '説明',
      duration_ms: '6299869664001',
      thumbnail: require('../assets/thumbnail1.png'),
    },
    {
      id: 6299869664001,
      source: require('../assets/video2.mp4'),
      description: '説明',
      duration_ms: '6299869664001',
      thumbnail: require('../assets/thumbnail2.png'),
    },
    {
      id: 6299869664001,
      source: require('../assets/video3.mp4'),
      description: '説明',
      duration_ms: '6299869664001',
      thumbnail: require('../assets/thumbnail3.png'),
    },
    {
      id: 6299869664001,
      source: require('../assets/video4.mp4'),
      description: '説明',
      duration_ms: '6299869664001',
      thumbnail: require('../assets/thumbnail4.png'),
    },
  ],
  related_company_ids: [6299869664001, 6299869664001, 6299869664001],
  related_video_bundle_ids: [6299869664001, 6299869664001, 6299869664001],
};
