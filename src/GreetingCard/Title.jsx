import WebFont from 'webfontloader';
import {useEffect} from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import './Title.css';

export const Title = ({titleText, titleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const text = titleText.split(' ').map((t) => ` ${t} `);

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Pacifico']
			}
		})
	}, []);

	return (
		<h1
			style={{
				fontFamily: 'Pacifico',
				fontWeight: 'bold',
				fontSize: 100,
				textAlign: 'center',
				position: 'absolute',
				bottom: 160,
				width: '100%',
				animation: 'glow_white 1s ease-in-out infinite alternate'
			}}
		>
			{text.map((t, i) => {
				return (
					<span
						key={t}
						style={{
							color: titleColor,
							marginLeft: 10,
							marginRight: 10,
							transform: `scale(${spring({
								fps: videoConfig.fps,
								frame: frame - i * 5,
								config: {
									damping: 100,
									stiffness: 200,
									mass: 0.5,
								},
							})})`,
							display: 'inline-block',
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
