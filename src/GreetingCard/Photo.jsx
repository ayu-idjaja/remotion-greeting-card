import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Photo = ({photoUrl, transitionStart}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const translation = interpolate(
		spring({
			frame: frame - transitionStart,
			fps: videoConfig.fps,
			config: {
				damping: 100,
				mass: 5,
			},
		}),
		[0, 1],
		[0, -150]
	);	
	const scaleIn = spring({
		frame,
		config: {
			mass: 5,
		},
		fps: videoConfig.fps,
	});	
	const scale = frame < 50 ? scaleIn : 1;
	return (
		<div style={{
			width:700, 
			height:500, 
			backgroundImage: `url(${photoUrl})`, 
			backgroundSize: 'cover',
			marginRight: '25px',
			border: '20px solid white',
			transform: `scale(${scale}) translateY(${translation}px)`,
		}} />
	);
};
