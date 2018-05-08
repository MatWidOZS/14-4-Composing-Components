var movies = [
	{
		id: 1,
		title: 'Scarface',
		desc: 'In Miami in 1980, a determined Cuban immigrant Tony Montana takes over a drug cartel and succumbs to greed.',
		poster: 'https://ia.media-imdb.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
	},
	{
		id: 2,
		title: 'Inception',
		desc: 'A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
		poster: 'https://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
	},
	{
		id: 3,
		title: 'Whiplash',
		desc: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential',
		poster: 'https://ia.media-imdb.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX675_CR0,0,675,999_AL_.jpg'
	},
	{
		id: 4,
		title: 'Star Wars: Episode V - The Empire Strikes Back',
		desc: 'After the rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.',
		poster: 'https://ia.media-imdb.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg'
	},
	{
		id: 5,
		title: 'Three Billboards Outside Ebbing, Missouri',
		desc: 'A mother personally challenges the local authorities to solve her daughter\'s murder when they fail to catch the culprit.',
		poster: 'https://ia.media-imdb.com/images/M/MV5BMjMxNzgwMDUyMl5BMl5BanBnXkFtZTgwMTQ0NTIyNDM@._V1_.jpg'
	},
	{
		id: 6,
		title: 'Shutter Island',
		desc: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.',
		poster: 'https://ia.media-imdb.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
	}
];

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},

	render: function() {
		return (
			React.createElement('h2', {}, this.props.title)
		)
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},

	render: function() {
		return (
			React.createElement('p', {}, this.props.desc)
		)
	}
});

var MoviePoster = React.createClass({
	propTypes: {
		poster: React.PropTypes.string.isRequired,
	},

	render: function() {
		React.createElement('img', {src: this.props.poster})
	}
});

var Movie = React.createClass({
	propTypes: {
		movies: React.PropTypes.object.isRequired,
	},

	render: function() {
		React.createElement('li', {}, 
			React.createElement(MovieTitle, {title: this.props.movies.title}),
			React.createElement(MovieDescription, {desc: this.props.movies.desc}),
			React.createElement(MoviePoster, {poster: this.props.movies.poster})
		)
	}

});

var MoviesList = React.createClass({
	propTypes: {
		movies: React.PropTypes.array.isRequired,
	},

	render: function() {
		var moviesElements = this.props.movies.map(function(movie) {
			return (React.createElement(Movie, {key: movie.id, movies: movie})
			)
		})
		return (
			React.createElement('ul', {}, moviesElements)
		);
	}
});

var element = React.createElement('div', {},
				React.createElement('h1', {}, 'List of movies'),
				React.createElement(MoviesList, {})
			);

ReactDOM.render(element, document.getElementById('app'));
