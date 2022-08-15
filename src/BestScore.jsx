import { useState, useEffect, React } from "react";
import {
  query,
  getFirestore,
  collection,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Paper,
  TableContainer,
} from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BestScore() {
  const [open] = useState(true);
  const [competitors, setCompetitors] = useState([]);
  useEffect(() => {
    const myData = query(
      collection(getFirestore(), "scores"),
      orderBy("timing", "asc"),
      limit(10)
    );
    onSnapshot(myData, (snapshot) => {
      setCompetitors(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);
  const reload = () => {
    window.location.reload();
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Best Players:"}</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Player Names</TableCell>
                  <TableCell align="right">Seconds</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {competitors.map((comp) => (
                  <TableRow
                    key={comp.timing}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {comp.name}
                    </TableCell>
                    <TableCell align="right">{comp.timing}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={reload}>Retry</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
