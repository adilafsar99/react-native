import {
  useState,
  useEffect
} from "react";
import {
  AppBar,
  Avatar,
  Toolbar,
  Container,
  Grid,
  Card,
  Divider
} from '@material-ui/core';
import ImageCard from '../../components/Card';
import {RiMoreLine, RiHeart3Line} from 'react-icons/ri';
import {FaRegComment, FaRetweet} from 'react-icons/fa';
import {MdOutlineFileUpload} from 'react-icons/md';
import {useContext} from 'react';
import Theme from '../../context';
import './css/index.css';

const Post = () => {
  const theme = useContext(Theme);
  const fontColor = theme === "light" ? "#000" : "#fff";
  const backgroundColor = theme === "light" ? "#fff" : "#000";
  const borderColor = theme === "light" ? "transparent" : "#c7c7c7"
  const postStyles = {
    color: fontColor,
    backgroundColor: backgroundColor,
    paddingTop: "10px",
    paddingRight: "8px",
    paddingLeft: "8px",
    marginTop: "65px",
    border: `1px solid ${borderColor}`,
    borderRadius: "5px"
  }
  return(
    <div>
      <Grid style={postStyles} justifyContent="center" container>
        <Grid xs={12} md={10} container item>
          <Grid xs={12} container item>
            <div className="posterAndMore">
            <div className="poster" >
            <div>
              <Avatar>WD</Avatar>
            </div>
            <div 
            style={{
              display: "block",
              marginBottom: "20px"}} >
              <div>
                <p style={{margin: "0"}} >
                  Web Developer
                </p>
              </div>
              <div>
                <p style={{
                  margin: "0",
                  color: "#8f8f8f"
               }} >
                  @TheWebDeveloper 
                </p>
              </div>
            </div>
            </div>
            <div>
            <div>
              <RiMoreLine size={25} />
            </div>
            </div>
            </div>
          </Grid>
          <Grid item>
            <p style={{
              marginTop: "0",
              marginBottom: "18px"
            }} >
              Some words explaining this random post. I'm half heartedly trying to make this description as big as possible, and it seems that this is as long I'll be able to make it right now.
            </p>
            <p>
              #WebDevsCommunity
            </p>
          </Grid>
          <Grid item>
            <ImageCard fontColor={fontColor} backgroundColor={backgroundColor} borderColor={borderColor} />
          </Grid>
          <Grid container item>
            <p style={{
              marginBottom: "8px",
            }} >
              2:21 PM • Oct 17, 2021
            </p>
          <Divider />
        </Grid>
        <Grid item>
            <p style={{
              marginTop: "0",
            }} >
              <b>3</b> Retweets <b>20</b>Likes
            </p>
          </Grid>
          <Grid>
            <div style={{
              display: "flex",
              justifyContent: "spaceAround"
            }}>
              <FaRegComment />
              <FaRetweet />
              <RiHeart3Line />
              <MdOutlineFileUpload />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Post;