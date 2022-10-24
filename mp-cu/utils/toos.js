//生成随机数
export const getRandom = (length = 8) => {
    let val = '', chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < length; i++) {
        val += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return val;
}
