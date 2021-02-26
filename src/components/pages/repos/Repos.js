import Repoitem from './Repoitem';
import PropTypes from 'prop-types';

const Repos = ({ repos_ }) => {
   return repos_.map(repo_ => <Repoitem repo={repo_} key={repo_.id}/>);
}

Repos.propTypes = { 
   repos_: PropTypes.array.isRequired,
}
export default Repos;