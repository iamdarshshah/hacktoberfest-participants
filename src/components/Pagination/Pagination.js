import useStyles from './Pagination.styles';
import { Container } from '@material-ui/core';
function Pagination(props) {
  const classes = useStyles();
  return (
    <Container className={classes.pagination} maxWidth='md'>
      <button
        className={classes.paginationButton}
        onClick={props.onPrev}
        style={{ opacity: props.actualPage === 1 ? 0 : 1 }}
      >
        <span>&larr;</span> Previous
      </button>
      <span className={classes.paginationCount}>
        {`Page ${props.actualPage} of ${props.pagesCount}`}
      </span>
      <button
        className={classes.paginationButton}
        onClick={props.onNext}
        style={{
          opacity: props.actualPage === props.pagesCount ? 0 : 1,
        }}
      >
        Next <span>&rarr;</span>
      </button>
    </Container>
  );
}

export default Pagination;
