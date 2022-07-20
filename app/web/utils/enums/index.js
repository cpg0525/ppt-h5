export const ACTIVITY_STATUS = {
  NOT_STARTED: 3, // 未开始
  IN_PROGRESS: 1, // 进行中
  COMPLETE: 4, // 已结束
  REMOVED: 5, // 已下架
  NOT_FOUND: 6, // 不存在
  NOT_ACTIVE_USER: 2, // 非目标用户 （发起人为新用户/参与人为老用户）
};
  
export const GET_COUPON_RESULT = {
  SUCC: 1,
  OLD_USER: 2, // 老用户
  NOT_STARTED: 3,// 未开始
  COMPLETE: 4, // 活动已已结束
  REMOVED: 5, // 活动已下架
  NOT_FOUND: 6, // 活动不存在
  RECEIVED: 7, // 已经参加过
  LIMITED: 8, // 人数上限
}