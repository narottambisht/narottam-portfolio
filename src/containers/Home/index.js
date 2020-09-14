import React from 'react';
import { AppBar, Toolbar, makeStyles, Slide, useScrollTrigger } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  profileImage: {
    width: "180px",
    height: "180px",
    borderRadius: "100%"
  }
}))

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined, threshold: 50 });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Home = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar position="fixed">
          <img src="images/profile.jpg"
            className={classes.profileImage}
            alt="James Lee" />
        </AppBar>
      </HideOnScroll>
      <div className={classes.offset}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sem in elementum auctor. Curabitur fermentum condimentum iaculis. Curabitur sit amet hendrerit magna. Donec euismod lorem at nisl gravida, sit amet varius augue tincidunt. Nunc et hendrerit arcu, quis rhoncus tellus. Aliquam sollicitudin dictum justo. Integer augue arcu, tincidunt at aliquet non, congue nec mauris. Integer consequat tincidunt justo, in dapibus libero. Phasellus laoreet aliquam cursus. Vivamus accumsan sed urna vitae semper. Cras egestas aliquet purus, ut molestie turpis vulputate et. Phasellus mauris nibh, interdum a blandit ac, imperdiet a elit.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sem in elementum auctor. Curabitur fermentum condimentum iaculis. Curabitur sit amet hendrerit magna. Donec euismod lorem at nisl gravida, sit amet varius augue tincidunt. Nunc et hendrerit arcu, quis rhoncus tellus. Aliquam sollicitudin dictum justo. Integer augue arcu, tincidunt at aliquet non, congue nec mauris. Integer consequat tincidunt justo, in dapibus libero. Phasellus laoreet aliquam cursus. Vivamus accumsan sed urna vitae semper. Cras egestas aliquet purus, ut molestie turpis vulputate et. Phasellus mauris nibh, interdum a blandit ac, imperdiet a elit.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sem in elementum auctor. Curabitur fermentum condimentum iaculis. Curabitur sit amet hendrerit magna. Donec euismod lorem at nisl gravida, sit amet varius augue tincidunt. Nunc et hendrerit arcu, quis rhoncus tellus. Aliquam sollicitudin dictum justo. Integer augue arcu, tincidunt at aliquet non, congue nec mauris. Integer consequat tincidunt justo, in dapibus libero. Phasellus laoreet aliquam cursus. Vivamus accumsan sed urna vitae semper. Cras egestas aliquet purus, ut molestie turpis vulputate et. Phasellus mauris nibh, interdum a blandit ac, imperdiet a elit.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sem in elementum auctor. Curabitur fermentum condimentum iaculis. Curabitur sit amet hendrerit magna. Donec euismod lorem at nisl gravida, sit amet varius augue tincidunt. Nunc et hendrerit arcu, quis rhoncus tellus. Aliquam sollicitudin dictum justo. Integer augue arcu, tincidunt at aliquet non, congue nec mauris. Integer consequat tincidunt justo, in dapibus libero. Phasellus laoreet aliquam cursus. Vivamus accumsan sed urna vitae semper. Cras egestas aliquet purus, ut molestie turpis vulputate et. Phasellus mauris nibh, interdum a blandit ac, imperdiet a elit.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sem in elementum auctor. Curabitur fermentum condimentum iaculis. Curabitur sit amet hendrerit magna. Donec euismod lorem at nisl gravida, sit amet varius augue tincidunt. Nunc et hendrerit arcu, quis rhoncus tellus. Aliquam sollicitudin dictum justo. Integer augue arcu, tincidunt at aliquet non, congue nec mauris. Integer consequat tincidunt justo, in dapibus libero. Phasellus laoreet aliquam cursus. Vivamus accumsan sed urna vitae semper. Cras egestas aliquet purus, ut molestie turpis vulputate et. Phasellus mauris nibh, interdum a blandit ac, imperdiet a elit.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sem in elementum auctor. Curabitur fermentum condimentum iaculis. Curabitur sit amet hendrerit magna. Donec euismod lorem at nisl gravida, sit amet varius augue tincidunt. Nunc et hendrerit arcu, quis rhoncus tellus. Aliquam sollicitudin dictum justo. Integer augue arcu, tincidunt at aliquet non, congue nec mauris. Integer consequat tincidunt justo, in dapibus libero. Phasellus laoreet aliquam cursus. Vivamus accumsan sed urna vitae semper. Cras egestas aliquet purus, ut molestie turpis vulputate et. Phasellus mauris nibh, interdum a blandit ac, imperdiet a elit.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sem in elementum auctor. Curabitur fermentum condimentum iaculis. Curabitur sit amet hendrerit magna. Donec euismod lorem at nisl gravida, sit amet varius augue tincidunt. Nunc et hendrerit arcu, quis rhoncus tellus. Aliquam sollicitudin dictum justo. Integer augue arcu, tincidunt at aliquet non, congue nec mauris. Integer consequat tincidunt justo, in dapibus libero. Phasellus laoreet aliquam cursus. Vivamus accumsan sed urna vitae semper. Cras egestas aliquet purus, ut molestie turpis vulputate et. Phasellus mauris nibh, interdum a blandit ac, imperdiet a elit.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sem in elementum auctor. Curabitur fermentum condimentum iaculis. Curabitur sit amet hendrerit magna. Donec euismod lorem at nisl gravida, sit amet varius augue tincidunt. Nunc et hendrerit arcu, quis rhoncus tellus. Aliquam sollicitudin dictum justo. Integer augue arcu, tincidunt at aliquet non, congue nec mauris. Integer consequat tincidunt justo, in dapibus libero. Phasellus laoreet aliquam cursus. Vivamus accumsan sed urna vitae semper. Cras egestas aliquet purus, ut molestie turpis vulputate et. Phasellus mauris nibh, interdum a blandit ac, imperdiet a elit.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sem in elementum auctor. Curabitur fermentum condimentum iaculis. Curabitur sit amet hendrerit magna. Donec euismod lorem at nisl gravida, sit amet varius augue tincidunt. Nunc et hendrerit arcu, quis rhoncus tellus. Aliquam sollicitudin dictum justo. Integer augue arcu, tincidunt at aliquet non, congue nec mauris. Integer consequat tincidunt justo, in dapibus libero. Phasellus laoreet aliquam cursus. Vivamus accumsan sed urna vitae semper. Cras egestas aliquet purus, ut molestie turpis vulputate et. Phasellus mauris nibh, interdum a blandit ac, imperdiet a elit.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sem in elementum auctor. Curabitur fermentum condimentum iaculis. Curabitur sit amet hendrerit magna. Donec euismod lorem at nisl gravida, sit amet varius augue tincidunt. Nunc et hendrerit arcu, quis rhoncus tellus. Aliquam sollicitudin dictum justo. Integer augue arcu, tincidunt at aliquet non, congue nec mauris. Integer consequat tincidunt justo, in dapibus libero. Phasellus laoreet aliquam cursus. Vivamus accumsan sed urna vitae semper. Cras egestas aliquet purus, ut molestie turpis vulputate et. Phasellus mauris nibh, interdum a blandit ac, imperdiet a elit.</p>
      </div>
    </React.Fragment>
  )
}

export default Home;