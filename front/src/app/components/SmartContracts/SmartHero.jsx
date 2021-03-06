import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

const SmartHero = ({ intl, openModal }) => (
  <div className='SmartHero'>
    <div className='SmartHero-content container'>
      <div className='SmartHero-content-left'>
        <h1
          className='SmartHero-content-left-title'
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({
              id: 'NewSmartContractTitle',
              defaultMessage: 'Free Security Audits for Smart Contracts',
            })
          }}
        />
        <p className='SmartHero-content-left-description'>
          <FormattedMessage
            id='NewSmartHeroDescription2'
            defaultMessage={`
              Callisto Network deploys treasury funds to pay security auditors for their work, 
              thus security audits are free-of-charge for smart-contract developers or development 
              teams and the benefit for this is to reduce risk/flaw in smart contract and improve 
              the adoption of programmable blockchains for the whole crypto industry.
            `}
          />
        </p>
        <div className='SmartHero-btns'>
          <a
            onClick={openModal}
            target='_blank'
            className='btn btn-green'
          >
            <FormattedMessage id='SmartHeroAudit' />
          </a>
          <a
            href='https://github.com/EthereumCommonwealth/Proposals/issues/2/'
            target='_blank'
            className='btn btn-transparent-green'
          >
            <FormattedMessage id='SmartHeroBecomeAuditor' />
          </a>
        </div>
      </div>
      <div className='SmartHero-content-right'>
        <figure className='SmartHero-content-right-figure'>
          <img src='/image/smart-contracts/new-hero.svg' alt='SmartHero Art'/>
        </figure>
      </div>
    </div>
  </div>
);

SmartHero.propTypes = {
  intl: PropTypes.object,
  openModal: PropTypes.func,
};

export default injectIntl(SmartHero);
