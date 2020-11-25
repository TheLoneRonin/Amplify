import Link from 'next/link';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/Reducer';
import { AboutContainer } from './About.styles';

export interface AboutPageProps {
    dispatch: Dispatch;
}

export const AboutPageComponent: FC<AboutPageProps> = ({ dispatch }) => {
    return(
    <AboutContainer>
        <h2>How Amplify Works</h2>
        <Link href="/slides">
          <a className="link">Click here to view slides</a>
        </Link>
        <p>
          Amplify uses a Proof of Stake consensus mechanism to verify and validate Gateways on the network.
          On a pseudorandom sampled basis, Gateways are voted on if they are malicious or not.
          A gateway is removed from the Amplify network if majority of nodes vote that said Gateway is malicious.
          The node that identifies a potential malicious Gateway is selected as the leader of the vote. If majority
          stakeholders vote the node out. The leader node who initiated the vote receives the malicious nodes tokens.
        </p>
        <h3>How malicious Gateways are identified</h3>
        <p>
          All Gateways on Amplify must be configured with VPNs in order to test outputs from various locations.
          The way malicious Gateways are identified are by testing random queries of all Gateways on the network. On a pseudorandom basis, nodes 
          are randomly selected to be queried. If the query does not match the query of the rest of the network. That node is elected
          as malicious.
        </p>
        <h3>A diagram outlining the election process</h3>
        <div className="diagrams">
          <img src="/images/diagram.1.png"/>
        </div>
        <h3>Round Robin and Collocation Gateway Selection</h3>
        <p>
          As an end user. You can use the Amplify smart contract to select the gateway you desire. Gateways can also specify their
          geolocation coordinates so that you can pick the nearest Gateway to you for fastest response times. Amplify comes with helper
          library functions to select both via a round robin method as well as via geolocation.
        </p>
        <h3>Quantitative Easing / Token Economics</h3>
        <p>
          With a starting supply of 1 million. Every year 1 million tokens are issued to Stakeholders. Those tokens are issued
          pseudorandomly using the built in Smartweave function designed to reward stakeholders in accordance to the amount of
          tokens they've staked.
        </p>
    </AboutContainer>
    );
}   

export const AboutPage = connect(
    (state: State) => ({

    })
)(AboutPageComponent);