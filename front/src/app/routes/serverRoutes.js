import Home from '../containers/Home';
import About from '../containers/About';
import ColdStaking from '../containers/ColdStaking';
import SmartContract from '../containers/SmartContract';
import FinantialReport from '../containers/FinantialReport';
import Blog from '../containers/Blog';
import Tag from '../containers/Tag';
import Airdrop from '../containers/Airdrop';
import Faq from '../containers/Faq';
// import Buy from '../containers/Buy';
import CommunityGuidlines from '../containers/CommunityGuidlines';
import Post from '../containers/Post';
import AuditAdmin from '../containers/AuditAdmin';
import AuditDetail from '../containers/AuditDetail';
import Notfound from '../containers/NotFound';
import { langs } from '../constants/';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about/',
    exact: true,
    component: About,
  },
  {
    path: '/faq/',
    exact: true,
    component: Faq,
  },
  // {
  //   path: '/buy/',
  //   exact: true,
  //   component: Buy,
  // },
  {
    path: '/cold-staking/',
    exact: true,
    component: ColdStaking,
  },
  {
    path: '/smart-contract-audit/',
    exact: true,
    component: SmartContract,
  },
  {
    path: '/financial-report/',
    exact: true,
    component: FinantialReport,
  },
  {
    path: '/blog/',
    exact: true,
    component: Blog,
  },
  {
    path: '/blog/post/:slug/',
    exact: true,
    component: Post,
  },
  {
    path: '/blog/topic/:slug/',
    exact: true,
    component: Tag,
  },
  {
    path: '/airdrop/',
    exact: true,
    component: Airdrop,
  },
  {
    path: '/community-guidelines/',
    exact: true,
    component: CommunityGuidlines,
  },
  {
    path: `/:lang${langs}/`,
    exact: true,
    component: Home,
  },
  {
    path: `/:lang${langs}/about/`,
    exact: true,
    component: About,
  },
  {
    path: `/:lang${langs}/faq/`,
    exact: true,
    component: Faq,
  },
  // {
  //   path: `/:lang${langs}/buy/`,
  //   exact: true,
  //   component: Buy,
  // },
  {
    path: `/:lang${langs}/cold-staking/`,
    exact: true,
    component: ColdStaking,
  },
  {
    path: `/:lang${langs}/smart-contract-audit/`,
    exact: true,
    component: SmartContract,
  },
  {
    path: `/:lang${langs}/financial-report/`,
    exact: true,
    component: FinantialReport,
  },
  {
    path: `/:lang${langs}/blog/`,
    exact: true,
    component: Blog,
  },
  {
    path: `/:lang${langs}/blog/post/:slug/`,
    exact: true,
    component: Post,
  },
  {
    path: `/:lang${langs}/blog/topic/:slug/`,
    exact: true,
    component: Tag,
  },
  {
    path: `/:lang${langs}/airdrop/`,
    exact: true,
    component: Airdrop,
  },
  {
    path: `/:lang${langs}/community-guidelines/`,
    exact: true,
    component: CommunityGuidlines,
  },
  {
    path: '/audits/',
    exact: true,
    component: AuditAdmin,
  },
  {
    path: '/audits/id-:slug/',
    exact: true,
    component: AuditDetail,
  },
  {
    path: '/platform/',
    exact: true,
    component: AuditAdmin,
  },
  {
    path: '/platform/id-:slug/',
    exact: true,
    component: AuditDetail,
  },
  {
    name: 'notFound',
    component: Notfound,
  },
];

export default routes;
