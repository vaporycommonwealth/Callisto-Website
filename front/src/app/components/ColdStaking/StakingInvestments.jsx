import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl, FormattedMessage } from 'react-intl';
import SectionHeading from '../commons/SectionHeading';

class StakingInvestments extends Component {
  constructor(props) {
    super(props);
    this.line = React.createRef();
  }

  state = {
    percent: ((this.props.marketStats.stakingBalance * 100) / this.props.marketStats.totalSupply).toFixed(2),
    stakingDeposit: 10000,
  };

  calculatePercent = (totalSuply) => {
    return (this.state.percent * totalSuply) / 100;
  }

  calculateStaking = (rewardPool, month, totalSuply) => {
    const { stakingDeposit } = this.state;
    return (rewardPool * ((stakingDeposit * month) / this.calculatePercent(totalSuply))).toFixed(2)
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ stakingDeposit: event.target.value });
  }

  handleRangeChange = event => {
    event.preventDefault();
    this.setState({ percent: event.target.value });
  }

  render() {
    const { intl } = this.props;
    const { percent, stakingDeposit } = this.state;
    return (
      <div className='StakingInvestments'>
        <div className='StakingInvestments-holder container'>
          <div />
          <div className='StakingInvestments-content'>
            <SectionHeading
              title={intl.formatMessage({ id: 'StakingInvestmentsTitle' })}
              description={intl.formatMessage({ id: 'StakingInvestmentsDescription' })}
            />
            <div className='StakingInvestments-percent'>
              <div className='StakingInvestments-percent-title'>
                <FormattedMessage id='StakingInvestmentsPercent' />
              </div>
              <div className='StakingInvestments-percent-text'>
                <span className='StakingInvestments-percent-text-detail'>
                  {percent}
                </span> %
              </div>
              <div className='StakingInvestments-percent-holder'>
                <span className='StakingInvestments-percent-holder-text'>
                  0
                </span>
                <input
                  type='range'
                  min={1}
                  value={percent}
                  onChange={this.handleRangeChange}
                  step={1}
                  className='StakingInvestments-percent-holder-input'
                />
                <span className='StakingInvestments-percent-holder-text'>
                  100%
                </span>
              </div>
            </div>
            <div className='StakingInvestments-deposit'>
              <span className='StakingInvestments-deposit-title'>
                <FormattedMessage id='StakingInvestmentsDepositTitle' />
              </span>
              <input
                className='StakingInvestments-deposit-input'
                type='number'
                onChange={this.handleChange}
                value={stakingDeposit}
                min={1}
              />
            </div>
            <div className='StakingInvestments-table'>
              <div className='StakingInvestments-table-row is-head'>
                <div className='StakingInvestments-table-tow-text'>
                  <FormattedMessage id='Period' />
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  <FormattedMessage id='Reward' /> (Claiming)
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  <FormattedMessage id='Reward' />
                </div>
                <div className='StakingInvestments-table-tow-text'>ROI</div>
              </div>
              <div className='StakingInvestments-table-row'>
                <div className='StakingInvestments-table-tow-text'>
                  <FormattedMessage id='FirstMonth' />
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {this.calculateStaking(20736000, 1, 1136800000)}
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {this.calculateStaking(20736000, 2, 1136800000)}
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {((this.calculateStaking(20736000, 2, 1136800000) * 100) / stakingDeposit).toFixed(2)}%
                </div>
              </div>
              <div className='StakingInvestments-table-row'>
                <div className='StakingInvestments-table-tow-text'>
                  <FormattedMessage id='SecondMonth' />
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {this.calculateStaking(20736000, 1, 1240480000)}
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {this.calculateStaking(20736000, 2, 1240480000)}
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {((this.calculateStaking(20736000, 3, 1240480000) * 100) / stakingDeposit).toFixed(2)}%
                </div>
              </div>
              <div className='StakingInvestments-table-row'>
                <div className='StakingInvestments-table-tow-text'>
                  <FormattedMessage id='ThirdMonth' />
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {this.calculateStaking(20736000, 1, 1344160000)}
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {this.calculateStaking(20736000, 3, 1344160000)}
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {((this.calculateStaking(20736000, 4, 1344160000) * 100) / stakingDeposit).toFixed(2)}%
                </div>
              </div>
              <div className='StakingInvestments-table-row'>
                <div className='StakingInvestments-table-tow-text'>
                  <FormattedMessage id='FourthMonth' />
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {this.calculateStaking(20736000, 1, 1444160000)}
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {this.calculateStaking(20736000, 4, 1444160000)}
                </div>
                <div className='StakingInvestments-table-tow-text'>
                  {((this.calculateStaking(20736000, 4, 1444160000) * 100) / stakingDeposit).toFixed(2)}%
                </div>
              </div>
            </div>
            <p className='StakingInvestments-description'>
              <FormattedMessage id='StakingInvestmentsBottomText'/>
            </p>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    marketStats: state.marketStats,
  };
}

StakingInvestments.propTypes = {
  marketStats: PropTypes.object,
};

export default injectIntl(connect(mapStateTopProps)(StakingInvestments));
