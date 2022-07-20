import '@/asset/css/normalize.css';
import '@/asset/css/app.css';

import createLayout from './layout';

export default createLayout('Layout', {}, '<div id="app" data-server-rendered="true"><slot></slot></div>');