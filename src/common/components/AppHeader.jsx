import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    toolbar: {
        padding: 0,
    }
});

const AppHeader = ({ classes, open, handleDrawerOpen }) => (
    <AppBar
        position="fixed"
    >
        <Toolbar className={classes.toolbar}>
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleDrawerOpen}
                className={classNames(classes.menuButton)}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
                Peninsula Diagnostic Imaging
            </Typography>
        </Toolbar>
    </AppBar>
);

AppHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppHeader);