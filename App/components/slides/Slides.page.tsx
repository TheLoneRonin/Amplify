import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Modal, ModalOverlay, ModalContent, ModalBody, CircularProgress, Button, useToast } from '@chakra-ui/react';
import { SlidesContainer } from './Slides.styles';

export interface SlidesPageProps {
  dispatch: Dispatch;
  slideIndex: number;
}

export const SlidesPageComponent: FC<SlidesPageProps> = ({ dispatch, slideIndex }) => {
    return(
    <SlidesContainer>
      <a className="arrow arrow-left" onClick={e => dispatch({ type: 'UPDATE_SLIDE_INDEX', value: slideIndex > 0 ? slideIndex -1 : 0 })}>
        <MdKeyboardArrowLeft size="24px"/>    
      </a>
      <a className="arrow arrow-right" onClick={e => dispatch({ type: 'UPDATE_SLIDE_INDEX', value: slideIndex + 1 })}>
        <MdKeyboardArrowRight size="24px"/>    
      </a>

      <div className={`slides index-${slideIndex}`}>
        <div className="slide">
          <div className="title">
            <img src="/images/amplify.png"/>
            <h2>Amplify</h2>
          </div>
          <h3>The Distributed Economy for Arweave Gateways</h3>
        </div>
        <div className="slide">
          <h3>There are no incentives to run Arweave Gateways</h3>
          <p>Gateways are the primary way that end users interact with the permaweb</p>  
        </div>
        <div className="slide">
          <h3>Amplify pays you to operate <b>trusted</b> Arweave Gateways</h3>
          <p>Running a Gateway generates passive income through staking</p>  
        </div>
        <div className="slide">
          <h3>Amplify acts as a consensus protocol for Gateways</h3>
          <p>Gateways use proxies to identify malicious outputs from peers</p>  
        </div>  
        <div className="slide">
          <h3>How Amplify's Consensus Protocol Works</h3>
          <img src="/images/diagram.1.png"/>  
        </div>
        <div className="slide">
          <h3>How does Amplify identify malicious Gateways?</h3>
          <ul>
            <li>Gateways are required to configure IP Spoofing Proxies to query and test bad nodes</li>
            <li>Requests are made randomly between Gateways with proxies to validate data</li>
            <li>The good Gateway that identifies the malicious Gateway is rewarded their stake</li>
          </ul>
        </div>
        <div className="slide">
          <h3>Token Economics</h3>
          <ul>
            <li>1 million starting supply</li>
            <li>1 million new tokens minted every year</li>
            <li>Similar to Ethereum's Token Model</li>
            <li>New tokens are rewarded in accordance to the stakeholders value</li>  
          </ul>
        </div>
        <div className="slide">
          <h3>Have Questions?</h3>
          <p>Join the Amplify community on Discord: https://discord.gg/ephHXUJZrp</p>
        </div>  
      </div>
    </SlidesContainer>
    );
}   

export const SlidesPage = connect(
    (state: State) => ({
      slideIndex: state.slideIndex,
    })
)(SlidesPageComponent);