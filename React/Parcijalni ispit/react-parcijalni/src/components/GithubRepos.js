import PropTypes from "prop-types";

function GithubRepos({ repos }) {
  if (!repos || repos.length <= 0) {
    return null;
  }

  return (
    <div>
      <p>
        <strong>REPOSITORIES: </strong>
      </p>
      <ul style={styles.ul}>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GithubRepos;

const styles = {
  ul: {
    listStyleType: "none",
  },
};

GithubRepos.propTypes = {
  repos: PropTypes.array,
};
