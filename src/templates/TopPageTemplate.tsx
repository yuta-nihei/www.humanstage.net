import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import LiveItems from '../components/liveItems';

import Layout from '../components/layout';
import SEO from '../components/seo';

import baseImg from '../images/img-base.jpg';
import campfireImg from '../images/img-campfire.jpg';

export default ({ data, pageContext }) => {
  return (
    <Layout lastSchedule={pageContext.lastSchedule}>
      <SEO title="" />

      { /* Tweet 埋め込みようの script */}
      <Helmet>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
      </Helmet>

      <TwitterCard>
        <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">ヒューマンステージからのお知らせ！ <a href="https://t.co/FLdCFA4Sdj">pic.twitter.com/FLdCFA4Sdj</a></p>&mdash; 山田さん (@HumanStage) <a href="https://twitter.com/HumanStage/status/1270614616658202624?ref_src=twsrc%5Etfw">June 10, 2020</a></blockquote>
      </TwitterCard>

      <CampfireLink>
        <a href="https://camp-fire.jp/projects/view/298923" target="_blank"><img src={campfireImg} alt="宜野湾HUMAN STAGE支援プロジェクト〜NEXT HUMAN STAGE〜" /></a>
      </CampfireLink>
      <BaseLink>
        <a href="https://humanstage.thebase.in/" target="_blank"><img src={baseImg} alt="Human Stage 応援サイト" /></a>
      </BaseLink>
      <Headline>Upcoming Events</Headline>
      <LiveItemsWrapper>
        <LiveItems data={data} />
      </LiveItemsWrapper>
      <ButtonWrapper>
        <Link to={`/schedule/${pageContext.lastSchedule}`}>
          <Button>More Schedule</Button>
        </Link>
      </ButtonWrapper>
    </Layout>
  );
};

export const query = graphql`
  query($gte: Date!) {
    allWordpressPost(
      sort: { fields: [slug], order: ASC }
      filter: { slug: { gte: $gte } }
      limit: 4
    ) {
      edges {
        node {
          id
          title
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 620, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          slug
          acf {
            date
            open
            start
            adv
            act
          }
        }
      }
    }
  }
`;

const Headline = styled.h1`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  font-feature-settings: 'palt';

  @media (min-width: 768px) {
    font-size: 1.7rem;
  }
`;

const LiveItemsWrapper = styled.div`
  @media (min-width: 768px) {
    margin: 0 auto 1rem;
    width: calc(100% - 100px);
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Button = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  font-size: 1rem;
  text-decoration: none;
  color: #188fd9;
  padding: 0.75rem 2rem;
  background-color: #fff;
  border-radius: 50px;

  &:hover {
    border-color: #ccc;
  }
`;

const BaseLink = styled.p`
　text-align: center;
  display: block;
  width: calc(100% - 30px);
  margin: 0 auto;
`;

const CampfireLink = styled.p`
  text-align: center;
  display: block;
  width: calc(100% - 30px);
  max-width: 540px;
  margin: 0 auto 1rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const TwitterCard = styled.div`
  margin: 0 auto 1.5rem;
  width: calc(100% - 30px);

  > .twitter-tweet {
    margin: 0 auto;
  }
`;
