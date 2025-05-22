import { FC } from 'react';
import CommunityTabs_section from '../../app/community/CommunityTabs_section';
import CommunityCTA_section from '../../app/community/CommunityCTA_section';
import { CommunityHero_section } from '../../app/community/communityHero_section';

const CommunityPage: FC = () => {
  return (
    <div>
      <CommunityHero_section />
      <CommunityTabs_section />
      <CommunityCTA_section />
    </div>
  );
};

export default CommunityPage; 