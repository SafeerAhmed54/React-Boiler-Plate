// @import sections
import Hero from '../pages/home/sections/hero/Hero.jsx'
import About from '../pages/home/sections/about/About.jsx'
import Tech from '../pages/home/sections/tech/Tech.jsx'
import Feature from '../pages/home/sections/featured/Featured.jsx'
import Vision from '../pages/home/sections/vision/Vision.jsx'
import Desc from '../pages/home/sections/description/Description.jsx'
import Plan from '../pages/home/sections/plans/Plan.jsx'
import Connected from '../pages/home/sections/conntected/Connected.jsx'

// Section mapping configuration
export const sectionMapping = [
  {
    id: 'hero',
    component: Hero,
    dataKey: 'hero',
    enabled: true
  },
  {
    id: 'about',
    component: About,
    dataKey: 'dawnSection',
    enabled: true
  },
  {
    id: 'tech',
    component: Tech,
    dataKey: 'capabilities',
    enabled: true
  },
  {
    id: 'feature',
    component: Feature,
    dataKey: 'featuredApp',
    enabled: true
  },
  {
    id: 'vision',
    component: Vision,
    dataKey: 'vision',
    enabled: true
  },
  {
    id: 'description',
    component: Desc,
    dataKey: 'announcement',
    enabled: true
  },
  {
    id: 'plans',
    component: Plan,
    dataKey: 'beta',
    enabled: true
  },
  {
    id: 'connected',
    component: Connected,
    dataKey: 'newsletter',
    enabled: true
  }
];

export default sectionMapping;