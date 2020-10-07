import OutlinedInput from '@material-ui/core/OutlinedInput';

import {
    withStyles,
} from '@material-ui/core/styles';

const SearchTextField = withStyles((theme) => {
    return {
        root: {
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: theme.palette.secondary.dark,
                },
                '&:hover fieldset': {
                    borderColor: theme.palette.primary.contrastText,
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.contrastText,
                },
            },
        },
    }
})(OutlinedInput);


export default SearchTextField;