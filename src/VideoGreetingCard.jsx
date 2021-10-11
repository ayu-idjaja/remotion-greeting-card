import {Composition} from 'remotion';
import {GreetingCard} from './GreetingCard';

export const RemotionVideo = () => {
    // Christmas color #C01B0E
    // GWS color #DA82FB
    // Valentine's color #FB5C87
	return (
		<>
			<Composition
				id="GreetingCard"
				component={GreetingCard}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: "Happy Valentine's Day!",
                    subtitleText: "Be mine, it's meow or never",
					titleColor: '#C01B0E',
                    theme: 'Valentine',
				}}
			/>
		</>
	);
};
