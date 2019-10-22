import React, { memo } from 'react';
import useToggleState from 'hooks/useToggleState';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopyOverlay from 'components/palette/colors/CopyOverlay'
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/ColorBox';

function ColorBox(props) {
	const { classes } = props;
  const [ copying, toggleCopying, setCopying ] = useToggleState();
  
	const handleCopy = () => {
		toggleCopying();
		setTimeout(() => setCopying(false), 1500);
  };
  
	const color = props[props.format];
	return (
		<div className={classes.colorBox}>
      <CopyOverlay open={copying} color={color} />
			<span className={classes.colorName}>{props.name}</span>
			<CopyToClipboard text={color} onCopy={handleCopy}>
				<button className={`${classes.button} copyButton`}>copy</button>
			</CopyToClipboard>
			{!props.singleColorPalette && (
        <Link to={`${props.paletteId}/${props.id}`}>
					<span className={classes.seeMore}>more</span>
				</Link>
			)}
		</div>
	);
}

export default memo(withStyles(styles)(ColorBox));
