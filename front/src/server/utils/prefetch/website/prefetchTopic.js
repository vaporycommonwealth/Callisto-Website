import api from './utils/api';
import preparePosts from './utils/preparePosts';
import prepareMarket from './utils/prepareMarket';
import handleRender from '../../render/website/handleRender';

const getTag = (slug, tags) => {
  const filtered = tags.filter(elem => elem.slug === slug);
  return filtered.length > 0 ? filtered[0].id : false;
}

const prefetchTopic = async (req, res, next) => {
  try {
    const posts = await api.blog.getPosts(50);
    const btcStats = await api.market.getTicker(1);
    const cloStats = await api.market.getTicker(2757);
    const homeData = await api.website.getHome(req.params.lang);
    const balance = await api.market.getBalance();
    const totalSupply = await api.market.getTotalSuply();
    const audit = await api.audit.getAudits();
    const tags = await api.blog.getTags();
    const internalData = homeData.internalData;
    const messages = homeData.messages;
    const tagId = getTag(req.params.slug, tags.data);
    if (tagId) {
      const tagPosts = await api.blog.getSingleTag(tagId);
      const initialState = {
        teamMembers: internalData.teamMembers,
        miningPools: internalData.miningPools,
        blockExplorers: internalData.blockExplorers,
        wallets: internalData.wallets,
        walletsColdStacking: internalData.walletsColdStacking,
        exchanges: internalData.exchanges,
        blogPosts: posts.data && posts.data.length > 0 ? preparePosts(posts.data) : posts,
        blogTags: tags.data && tags.data.length > 0 ? tags.data : tags,
        marketStats: prepareMarket(btcStats, cloStats, totalSupply, balance),
        tagPosts: preparePosts(tagPosts.data),
        faq: [],
        singlePost: {},
        messages,
        audit,
      };

      const topicMessages = {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: `https://callisto.network/blog/topic/${req.params.slug}/`,
        slug: req.params.slug,
      }
      handleRender(req, res, initialState, topicMessages, 'topic');
    } else {
      res.redirect('/not-found/');
    }
  } catch (err) {
    next(err);
  }
}

export default prefetchTopic;
