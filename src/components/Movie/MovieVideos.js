import classes from './MovieVideos.module.css';
import SectionGrid from '../UI/SectionWrapper/SectionGrid';

export default function MovieVideos({ videosDetail }) {
  console.log(videosDetail);

  return (
    <SectionGrid sectionTitle={'Videos'}>
      {videosDetail.results.map(video => (
        <div
          key={video.id}
          className={classes.videos}
          style={{
            backgroundImage: `url('https://i.ytimg.com/vi/${video.key}/hqdefault.jpg')`,
          }}
        ></div>
      ))}
    </SectionGrid>
  );
}
