import "./login.css";
import { React, useState, useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Server from "../../server/Server"
import LoginIcon from '@mui/icons-material/Login';
// import {  } from '@material-ui/core'

function Login() {
  let ref = useRef();
  const history = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  let name, value;

  const handaleinput = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(value, "name");
    setUser({ ...user, [name]: value });
  };

  const postdata = async (e) => {
    e.preventDefault();
    var response = await axios
      .post(Server.server.link + "login", user)
      .then((response) => {
        console.log(response.data);
        if (response.data.code === 202) {
          toast.error(response.data.message);
          history("/login");
        } else {
          localStorage.setItem("token", response.data.results.accessToken);
          localStorage.setItem("adminId", response.data.results.adminId);
          history("/Dashboard");
          toast.success(response.data.message);
        }
      });
  };
  return (
    <>
      <Card variant="outlined" style={{"paddingLeft":"100px","paddingRight":"100px","paddingTop":"30px","paddingBottom":"50px","maxWidth":"900px","position":"absolute","top":"50%","left":"50%","transform":"translate(-50%,-50%)"}}>
        <div>
            <h2>ParkNB</h2>
          <TextField id="outlined-basic" className="inputf" label="Email" variant="outlined" />
          <TextField id="outlined-basic" className="inputf" label="Password" variant="outlined" />
          <Button variant="contained" href="#contained-buttons">
              <LoginIcon/>LOGIN
          </Button>
        </div>
      </Card>
    </>
  );
}

export default Login;