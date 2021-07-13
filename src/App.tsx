import React from "react"
import Backdrop from "@material-ui/core/Backdrop"
import Alert from "@material-ui/lab/Alert"
import CircularProgress from "@material-ui/core/CircularProgress"
import IconButton from "@material-ui/core/IconButton"
import NfcIcon from "@material-ui/icons/Nfc"
import ErrorIcon from "@material-ui/icons/Error"
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

  if (!("NDEFReader" in window)) {
    return (
      <div className="App">
        <Alert severity="error" style={{ display: "flex" }}>
          WebNFC is not Supported
        </Alert>
        <header className="App-header">
          <ErrorIcon style={{ color: "white", fontSize: 200 }} />
        </header>
      </div>
    )
  }
  const ndef = new NDEFReader()
  let controller: any = null

  const cancelNfc = () => {
    if (controller) {
      controller.abort()
      controller = null
    }
    setOpen(false)
  }

  const readNfc = async () => {
    setOpen(!open)
    controller = new AbortController()
    await ndef.scan({ signal: controller.signal })
    ndef.onreading = ({ message }) => {
      alert(`Message read from a NFC tag: ${message}`)
      cancelNfc()
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* Clicked NFC Reader */}
        <IconButton
          style={{
            backgroundColor: "#4c5361",
          }}
          onClick={readNfc}
        >
          <NfcIcon style={{ color: "white", fontSize: 200 }} />
        </IconButton>
        {/* Loading Popup (Replace or (hide and show))*/}
        <Backdrop className={classes.backdrop} open={open} onClick={cancelNfc}>
          <CircularProgress size={100} color="inherit" />
        </Backdrop>
        {/* Loaded Result Popup */}
      </header>
    </div>
  )
}

export default App
