import { Menu,MenuItem, Typography } from '@material-ui/core';
// import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';


//  const MobMenu=(props) => {
//   return (
//     <Fragment>
//         <Menu 
//         anchorEl={props.anchorEl}
//         id="mobileMenu"
//         keepMounted
//         open={props.mobMenuOpen}
//         >
//         <MenuItem 
        
//             component = {Link}
//             to = "/about"
//             >
//                 <Typography 
//                 variant ="h6"
//                 display= 'inline'
//                 >
//                     About
//                 </Typography>
//                 </MenuItem>

//                 <MenuItem
//                 component = {Link}
//                 to = "/contact"
//                 >
//                 <Typography 
//                 variant ="h6"
//                 display= 'inline'

//                 >
//                     Contact
//                 </Typography>
//                 </MenuItem>

//                 <MenuItem
//                 component = {Link}
//                 to = "/event"
//                 >
//                 <Typography 
//                 variant ="h6"
//                 display= 'inline'

//                 >
//                     Events
//                 </Typography>
//                 </MenuItem>

//                 <MenuItem
//                 component = {Link}
//                 to = "/blog"
//                 >
//                 <Typography 
//                 variant ="h6"
//                 display= 'inline'

//                 >
//                     Blog
//                 </Typography>
//             </MenuItem>
//         </Menu>
//     </Fragment>
//   );
// }

// export default MobMenu;



















import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import  MenuIcon  from '@material-ui/icons/Menu';
import { CardTravel } from "@material-ui/icons";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const useStyle = makeStyles((theme)=>({
    mView:{
        display:"none",
        [theme.breakpoints.down("sm")]:{
            display:"block"
        }
    }
}))

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function MobMenu(props) {

    const classes=useStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(props); 

  return (
    <div className={classes.mView} >
      {/* <Button
        
      >
        Open Menu
      </Button> */}

      <IconButton  
      aria-controls="customized-menu"
      aria-haspopup="true"
      variant="contained"
      color="action"
      onClick={handleClick}
      >
                        <MenuIcon />
                    </IconButton>


      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
        <MenuItem 
        component = {Link}
        to = "/about"
        onClick={handleClose}
                    >
        <Typography 
        variant ="h6"
        display= 'inline'
        >
            About
        </Typography>
        </MenuItem>
        </StyledMenuItem>


        <StyledMenuItem>
          <MenuItem
            component = {Link}
            to = "/contact"
            onClick={handleClose}
            >
            <Typography 
            variant ="h6"
            display= 'inline'

            >
                Contact
            </Typography>
            </MenuItem>
        </StyledMenuItem>

        <StyledMenuItem>
          <MenuItem
            component = {Link}
            to = "/event"
            onClick={handleClose}
            >
            <Typography 
            variant ="h6"
            display= 'inline'

            >
                Events
            </Typography>
            </MenuItem>

        </StyledMenuItem>

        <StyledMenuItem>
        <MenuItem
            component = {Link}
            to = "/blog"
            onClick={handleClose}
            >
            <Typography 
            variant ="h6"
            display= 'inline'

            >
                Blog
            </Typography>
        </MenuItem>
        </StyledMenuItem>

        <StyledMenuItem>
            <Button
            color = "default"
            size='large'
            onClick={handleClose}
            startIcon ={<CardTravel/>}
                    component = {Link}
                    to = "/booking"
            >
                Book Now
            </Button>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
