import {
  Formik
} from "formik";
import * as Yup from 'yup';
import {
  useState
} from "react";
import {
  useHistory
} from "react-router-dom";
import {
  useStyles
} from "./styles.js";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import {
  BasicTextField
} from "../../components/Input";
import {
  BasicButton
} from "../../components/Button";
import {
  Link
} from 'react-router-dom';
import {
  auth,
  signInWithEmailAndPassword
} from '../../config/Firebase/Firebase.js';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email')
  .required('Required'),
  password: Yup.string()
  .required('Required') 
  .matches(/[a-zA-Z]/, 'Only use alphabets.')
  .min(8, 'Too Short! - should be 8 chars minimum.')
});

const Login = () => {
  const classes = useStyles();
  const [email,
    setEmail] = useState("");
  const [password,
    setPassword] = useState("");
  const [loading,
    setLoading] = useState(false);
  let history = useHistory();
  const login = (values) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      setLoading(false);
      alert("Logged in.");
      history.push(`/profile/${userCredential.user.uid}`);
    })
    .catch((error) => {
      setLoading(false)
      alert(error.message);
    })
  }
  return(
    <div>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5">Log in</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.mainDiv}>
        <Grid justifyContent="center" container>
          <Grid md={4} item>
            <Card className={classes.card} raised>
              <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          login(values);
        }, 400);
      }}
      >
           {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
               <BasicTextField
          error={errors.email}
          helperText={errors.email}
          label="Email"
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange('email')}
          onBlur={handleBlur('email')} />
               <BasicTextField
          error={errors.password}
          helperText={errors.password}
          label="Password"
          type="text"
          name="password"
          value={values.password}
          onChange={handleChange('password')}
          onBlur={handleBlur('password')} />
               <BasicButton
          label={isSubmitting ? "Loading...": "Login"}
          type="submit" />
        </form>
      )}
        </Formik>
              <div className={classes.linkDiv}>
                <Link className={classes.link} to="/signup">Click here to sign up.</Link>
    </div>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  )
}

export {
  Login
};