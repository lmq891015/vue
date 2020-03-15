// import { post } from './http';
import { post } from './http';

//最新油价
export const oilPrice = (p) => { return post('ba/queryStationOilPrice', p); };

//ban当班组数据
export const teamData = (p) => { return post('ba/queryBusinessAccountGroupReport', p); };
