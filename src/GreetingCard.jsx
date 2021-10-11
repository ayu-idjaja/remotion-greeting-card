import {Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Subtitle} from './GreetingCard/Subtitle';
import {Title} from './GreetingCard/Title';
import {Photo} from './GreetingCard/Photo';

import Christmas from './assets/bg_christmas.jpg';
import Valentine from './assets/bg_valentine.jpg';
import GetWellSoon from './assets/bg_getwellsoon.jpg';
import FamilyChristmas from './assets/family_christmas.jpg';
import DoctorDog from './assets/doctor_dog.jpeg';
import CatValentine from './assets/cat_valentine.jpeg';


export const GreetingCard = ({titleText, titleColor, subtitleText, theme}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const transitionStart = 25;
    let bg = null;
    let photoUrl = null;
    switch (theme) {
        case 'Christmas':
            bg = Christmas;
            photoUrl = FamilyChristmas;
            break;
        case 'Valentine':
            bg = Valentine;
            photoUrl = CatValentine;
            break;
        case 'Get Well Soon':
            bg = GetWellSoon;
            photoUrl = DoctorDog;
            break;
    }
	return (
		<div style={{flex: 1, background: `url(${bg})`, backgroundSize: 'cover'}}>
			<div>
				<Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					<div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Photo photoUrl={photoUrl} transitionStart={transitionStart}></Photo>
                    </div>
				</Sequence>
				<Sequence from={transitionStart + 10} >
                    <Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
				<Sequence from={transitionStart + 50} >
                    <Subtitle subtitleText={subtitleText} />
				</Sequence>
			</div>
		</div>
	);
};
