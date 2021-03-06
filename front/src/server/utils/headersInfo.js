const getHeadersInfo = (target, messages, context) => {
  switch (target) {
    //HOME URLS
    case '/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/',
        baseUrl: '/',
      }
    case '/ar/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/ar/',
        baseUrl: '/',
      }
    case '/bg/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/bg/',
        baseUrl: '/',
      }
    case '/cs/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/cs/',
        baseUrl: '/',
      }
    case '/de/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/de/',
        baseUrl: '/',
      }
    case '/es/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/es/',
        baseUrl: '/',
      }
    case '/fr/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/fr/',
        baseUrl: '/',
      }
    case '/hi/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/hi/',
        baseUrl: '/',
      }
    case '/id/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/id/',
        baseUrl: '/',
      }
    case '/it/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/it/',
        baseUrl: '/',
      }
    case '/ja/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/ko/',
        baseUrl: '/',
      }
    case '/ko/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/ja/',
        baseUrl: '/',
      }
    case '/nl/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/nl/',
        baseUrl: '/',
      }
    case '/no/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/no/',
        baseUrl: '/',
      }
    case '/pl/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/pl/',
        baseUrl: '/',
      }
    case '/pt/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/pt/',
        baseUrl: '/',
      }
    case '/ro/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/ro/',
        baseUrl: '/',
      }
    case '/ru/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/ru/',
        baseUrl: '/',
      }
    case '/tr/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/tr/',
        baseUrl: '/',
      }
    case '/uk/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/uk/',
        baseUrl: '/',
      }
    case '/vi/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/vi/',
        baseUrl: '/',
      }
    case '/zh/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/vi/',
        baseUrl: '/',
      }

    // END HOME URLS

    // =================== //

    //Cold Staking Urls

    case '/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/ar/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/ar/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/bg/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/bg/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/cs/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/cs/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/de/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/de/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/es/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/es/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/fr/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/fr/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/hi/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/hi/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/id/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/id/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/it/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/it/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/ja/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/ja/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/ko/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/ko/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/nl/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/nl/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/no/cold-staking/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/no/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/pl/cold-staking/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/pl/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/pt/cold-staking/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/pt/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/ro/cold-staking/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/ro/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/ru/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/ru/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/tr/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/tr/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/uk/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/uk/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/vi/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/vi/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    case '/zh/cold-staking/':
      return {
        title: messages.stakingTitle,
        description: messages.stakingDescription,
        url: 'https://callisto.network/zh/cold-staking/',
        baseUrl: '/cold-staking/',
      }
    // END COLD STAKING URLS

    // =================== //

    // Smart Contracts Urls

    case '/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/ar/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/ar/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/bg/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/bg/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/cs/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/cs/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/de/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/de/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/es/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/es/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/fr/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/fr/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/hi/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/hi/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/id/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/id/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/it/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/it/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/ja/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/ja/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/ko/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/ko/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/nl/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/nl/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/no/smart-contract-audit/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/no/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/pl/cold-staking/smart-contract-audit/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/pl/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/pt/smart-contract-audit/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/pt/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/ro/smart-contract-audit/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/ro/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/ru/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/ru/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/tr/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/tr/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/uk/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/uk/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/vi/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/vi/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }
    case '/zh/smart-contract-audit/':
      return {
        title: messages.contractsTitle,
        description: messages.contractsDescription,
        url: 'https://callisto.network/zh/smart-contract-audit/',
        baseUrl: '/smart-contract-audit/',
      }

    // END SMART CONTRACTS URLS

    // =================== //

    // FINANTIAL REPORT

    case '/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/ar/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/ar/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/bg/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/bg/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/cs/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/cs/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/de/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/de/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/es/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/es/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/fr/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/fr/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/hi/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/hi/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/id/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/id/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/it/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/it/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/ja/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/ja/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/ko/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/ko/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/nl/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/nl/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/no/financial-report/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/no/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/pl/financial-report/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/pl/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/pt/financial-report/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/pt/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/ro/financial-report/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/ro/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/ru/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/ru/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/tr/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/tr/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/uk/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/uk/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/vi/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/vi/financial-report/',
        baseUrl: '/financial-report/',
      }
    case '/zh/financial-report/':
      return {
        title: messages.financialTitle,
        description: messages.financialDescription,
        url: 'https://callisto.network/zh/financial-report/',
        baseUrl: '/financial-report/',
      }

    // END FINANTIAL REPORT

    // =================== //

    // AIRDROP

    case '/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/ar/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/ar/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/bg/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/bg/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/cs/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/cs/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/de/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/de/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/es/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/es/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/fr/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/fr/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/hi/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/hi/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/id/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/id/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/it/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/it/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/ja/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/ja/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/ko/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/ko/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/nl/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/nl/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/no/financial-report/airdrop/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/no/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/pl/airdrop/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/pl/financialairdrop/',
        baseUrl: '/airdrop/',
      }
    case '/pt/airdrop/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/pt/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/ro/airdrop/':
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: 'https://callisto.network/ro/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/ru/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/ru/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/tr/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/tr/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/uk/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/uk/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/vi/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/vi/airdrop/',
        baseUrl: '/airdrop/',
      }
    case '/zh/airdrop/':
      return {
        title: messages.airdropTitle,
        description: messages.airdropDescription,
        url: 'https://callisto.network/zh/airdrop/',
        baseUrl: '/airdrop/',
      }

    // END AIRDROP
    default:
      if (context === 'blog') {
        return {
          title: messages.title,
          description: messages.description,
          image: messages.image,
          url: messages.url,
          baseUrl: `/blog/post/${messages.slug}/`,
          fromBlog: true,
        }
      }
      if (context === 'topic') {
        return {
          title: messages.title,
          description: messages.description,
          url: messages.url,
          baseUrl: `/blog/topic/${messages.slug}/`,
        }
      }
      return {
        title: messages.homeTitle,
        description: messages.homeDescription,
        url: `https://callisto.network/${target}`,
        baseUrl: target,
      }
  }
}

export default getHeadersInfo;
