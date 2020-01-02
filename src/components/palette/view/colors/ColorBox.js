import React, { memo } from 'react';
import useToggleState from 'hooks/useToggleState';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopyOverlay from 'components/palette/view/colors/CopyOverlay'
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/ColorBox';
import clsx from 'clsx';

function ColorBox(props) {
	const { classes } = props;
  const [ copying, toggleCopying ] = useToggleState();
  
	const handleCopy = () => {
		toggleCopying();
		setTimeout(toggleCopying, 1500);
  };
  
	const color = props[props.format];
	return (
		<div className={classes.colorBox}>
      <CopyOverlay open={copying} color={color} />
			<span className={clsx(classes.colorName, classes.text)}>{props.name}</span>
			<CopyToClipboard text={color} onCopy={handleCopy}>
				<button className={clsx('copyButton', classes.button, classes.text)}>copy</button>
			</CopyToClipboard>
			{!props.singleColorShades && (
        <Link to={`${props.paletteId}/${props.id}`}>
					<span className={clsx(classes.seeMore, classes.text)}>more</span>
				</Link>
			)}
		</div>
	);
}

export default memo(withStyles(styles)(ColorBox));
