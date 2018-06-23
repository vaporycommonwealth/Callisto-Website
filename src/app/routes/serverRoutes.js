import Home from '../containers/Home';
import ColdStaking from '../containers/ColdStaking';
import SmartContract from '../containers/SmartContract';
import Notfound from '../containers/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/cold-staking/',
    exact: true,
    component: ColdStaking,
  },
  {
    path: '/smart-contract/',
    exact: true,
    component: SmartContract,
  },
  {
    path: '/:lang(es|en|id|ru)/',
    exact: true,
    component: Home,
  },
  {
    path: '/:lang(es|en|id|ru)/cold-staking/',
    exact: true,
    component: ColdStaking,
  },
  {
    path: '/:lang(es|en|id|ru)/smart-contract/',
    exact: true,
    component: SmartContract,
  },
  {
    name: 'notFound',
    component: Notfound,
  },
];

export default routes;
