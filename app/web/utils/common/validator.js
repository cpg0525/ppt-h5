const Regs = {
  phoneReg: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
  codeReg: /^[0-9]{6}$/,
};

export default {
  isPhone: (value) => !!Regs.phoneReg.test(value), // 手机号
  isNumberCode: (value) => !!Regs.codeReg.test(value), // 短信验证码
};
