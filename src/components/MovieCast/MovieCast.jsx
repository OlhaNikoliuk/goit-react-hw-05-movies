import { Gallery, Actor, ActorImg, Name, Character } from './MovieCats.styled';
import noimage from '../../images/noimage.jpg';

console.log(noimage);

function MovieCast({ actors }) {
  return (
    <Gallery>
      {actors.map((actor) => {
        return (
          <Actor key={actor.id}>
            <ActorImg
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : noimage
              }
              alt={actor.name}
              
            ></ActorImg>
            <Name>{actor.name}</Name>

            <Character>
              {actor.character ? `Character: ${actor.character}` : ''}
            </Character>
          </Actor>
        );
      })}
    </Gallery>
  );
}

export default MovieCast;
