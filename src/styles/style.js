import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "#183d5e",
    padding: theme.spacing(6, 0, 4),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
  },
  cardMedia: {
    width: "100%",
    height: "auto",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#183d5e",
    padding: theme.spacing(3),
  },
  chipActions: {
    display: "block",
  },
  chip: {
    margin: "8px 0 3px 8px",
  },
  iconCls: {
    marginLeft: "45px",
  },
  extraMargin: {
    display: "flex",
    marginTop: "15px",
    marginBottom: "0",
  },
  avatar: {
    height: 155,
    width: 155,
  },
  btn: {
    textTransform: "none",
  },
  copyRight: {
    backgroundColor: "#183d5e",
  },
  root: {
    backgroundColor: "#183d5e",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    "& dt": {
      marginTop: theme.spacing(2),
    },
    color: "#000",
  },
  iconSocialMedia: {
    color: "#FFF",
    marginLeft: "-10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paddingCls: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  paddingClsxs: {
    padding: 0,
  },
  iconSize: {
    fontSize: "32px",
  },
  logo: {
    borderRadius: "50%",
    marginRight: "14px",
  },
}))

export { useStyles }
