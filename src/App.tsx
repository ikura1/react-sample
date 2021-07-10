import React from "react"
import Backdrop from "@material-ui/core/Backdrop"
import Alert from "@material-ui/lab/Alert"
import CircularProgress from "@material-ui/core/CircularProgress"
import IconButton from "@material-ui/core/IconButton"
import NfcIcon from "@material-ui/icons/Nfc"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

import "./App.css"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
)
function App() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(!open)
  }
  return (
    <div className="App">
      <Alert
        severity="error"
        style={{ display: !("NDEFReader" in window) ? "flex" : "none" }}
      >
        WebNFC is not Supported
      </Alert>
      <header className="App-header">
        {/* Clicked NFC Reader */}
        <IconButton
          style={{
            backgroundColor: "#4c5361",
          }}
          onClick={handleToggle}
        >
          <NfcIcon style={{ color: "white", fontSize: 200 }} />
        </IconButton>
        {/* Loading Popup (Replace or (hide and show))*/}
        <Backdrop
          className={classes.backdrop}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress size={100} color="inherit" />
        </Backdrop>
        {/* Loaded Result Popup */}
      </header>
    </div>
  )
}

export default App
