export default () => {
    const now = new Date()
    const month = now.getMonth() + 1
    const date = now.getDate()
    const weekList = ["Sun.","Mon.","Tue.","Wed.", "Thu.", "Fri", "Sat."]
    const week = weekList[now.getDay()];
    const time = now.getTime()
    return {
        month,
        date,
        week,
        time
    }
}