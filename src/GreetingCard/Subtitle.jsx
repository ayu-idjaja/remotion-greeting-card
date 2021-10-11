import {interpolate, useCurrentFrame} from 'remotion';
import {useEffect} from 'react';
import WebFont from 'webfontloader'
import './Subtitle.css';

export const Subtitle = ({subtitleText}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Berkshire Swash']
			}
		})
	}, []);

	return (
		<div
			style={{
				fontFamily: 'Berkshire Swash',
				fontSize: 80,
				textAlign: 'center',
				position: 'absolute',
				bottom: 120,
				width: '100%',
				opacity,
				color: 'rgba(0,0,0,1)',
				animation: 'glow_thin 1s ease-in-out infinite alternate'
			}}
		>
			{subtitleText}
		</div>
	);
};
