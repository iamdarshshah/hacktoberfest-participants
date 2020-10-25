import useStyles from './Pagination.styles';
import { Container } from '@material-ui/core';
function Pagination(props) {
  const classes = useStyles();
  const isNextButtonDisabled = props.actualPage === props.pagesCount;
  const isPrevButtonDisabled = props.actualPage === 1;
  return (
    <Container className={classes.pagination} maxWidth='md'>
      <button
        className={classes.paginationButton}
        onClick={props.onPrev}
        disabled={isPrevButtonDisabled}
        style={{ opacity: isPrevButtonDisabled ? 0 : 1 }}
      >
        <span>&larr;</span> Previous
      </button>
      <span className={classes.paginationCount}>
        {`Page ${props.actualPage} of ${props.pagesCount}`}
      </span>
      <button
        className={classes.paginationButton}
        onClick={props.onNext}
        disabled={isNextButtonDisabled}
        style={{
          opacity: isNextButtonDisabled ? 0 : 1,
        }}
      >
        Next <span>&rarr;</span>
      </button>
    </Container>
  );
}

export default Pagination;
