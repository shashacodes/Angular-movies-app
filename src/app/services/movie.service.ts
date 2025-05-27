import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  year: string;
  genre: string;
  description: string;
  rating: number; // e.g. IMDb rating out of 10
  link: string; // URL to movie trailer or streaming page
}

@Injectable({ providedIn: 'root' })
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      year: '2010',
      genre: 'Sci-Fi, Thriller',
      description: 'A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
      rating: 8.8,
      link: 'https://www.youtube.com/watch?v=YoHD9XEInc0' // trailer link
    },
    {
      id: 2,
      title: 'The Dark Knight',
      year: '2008',
      genre: 'Action, Crime, Drama',
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      rating: 9.0,
      link: 'https://www.youtube.com/watch?v=EXeTwQWrcwY'
    },
    {
      id: 3,
      title: 'Interstellar',
      year: '2014',
      genre: 'Adventure, Drama, Sci-Fi',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.',
      rating: 8.6,
      link: 'https://www.youtube.com/watch?v=zSWdZVtXT7E'
    },
    {
      id: 4,
      title: 'Parasite',
      year: '2019',
      genre: 'Comedy, Drama, Thriller',
      description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
      rating: 8.6,
      link: 'https://www.youtube.com/watch?v=5xH0HfJHsaY'
    },
    {
      id: 5,
      title: 'The Shawshank Redemption',
      year: '1994',
      genre: 'Drama',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      rating: 9.3,
      link: 'https://www.youtube.com/watch?v=6hB3S9bIaco'
    },
    {
  id: 6,
  title: 'The Matrix',
  year: '1999',
  genre: 'Action, Sci-Fi',
  description: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
  rating: 8.7,
  link: 'https://www.youtube.com/watch?v=vKQi3bBA1y8'
},
{
  id: 7,
  title: 'Gladiator',
  year: '2000',
  genre: 'Action, Drama',
  description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.',
  rating: 8.5,
  link: 'https://www.youtube.com/watch?v=owK1qxDselE'
},
{
  id: 8,
  title: 'Fight Club',
  year: '1999',
  genre: 'Drama',
  description: 'An insomniac office worker and a soap maker form an underground fight club that evolves into something much more.',
  rating: 8.8,
  link: 'https://www.youtube.com/watch?v=SUXWAEX2jlg'
},
{
  id: 9,
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: '2001',
  genre: 'Adventure, Drama, Fantasy',
  description: 'A meek Hobbit sets out on a journey to destroy a powerful ring and save Middle-earth from darkness.',
  rating: 8.8,
  link: 'https://www.youtube.com/watch?v=V75dMMIW2B4'
},
{
  id: 10,
  title: 'Forrest Gump',
  year: '1994',
  genre: 'Drama, Romance',
  description: 'The life story of a simple man with a low IQ who witnesses and influences several historic events.',
  rating: 8.8,
  link: 'https://www.youtube.com/watch?v=bLvqoHBptjg'
},
{
  id: 11,
  title: 'The Social Network',
  year: '2010',
  genre: 'Biography, Drama',
  description: 'The story of the founding of Facebook and the lawsuits that followed.',
  rating: 7.7,
  link: 'https://www.youtube.com/watch?v=lB95KLmpLR4'
},
{
  id: 12,
  title: 'The Grand Budapest Hotel',
  year: '2014',
  genre: 'Adventure, Comedy, Crime',
  description: 'A concierge teams up with a lobby boy to prove his innocence after he is framed for murder.',
  rating: 8.1,
  link: 'https://www.youtube.com/watch?v=1Fg5iWmQjwk'
}

  ];

  getMovies() {
    return this.movies;
  }
}
