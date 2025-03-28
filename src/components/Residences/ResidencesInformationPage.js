import * as React from 'react';
import FramerSlide from '../Common/FramerSlide'
import InformationPage from '../Common/InformationPage';
import { desktopStyles, mobileStyles } from '../../configuration/framer-slide-styles';

import './ResidencesInformationPage.css'

export default function ResidencesInformationPage() {

    return (
        <div className="residences-information-page">
            <FramerSlide text="Residences" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
            <InformationPage pageTitle={'Residences'}></InformationPage>
        </div>
    );
}