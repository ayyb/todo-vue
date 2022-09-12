export default () => {
    const now = new Date()
    const month = now.getMonth() + 1
    const date = now.getDate()
    const weekList = ["Sun.","Mon.","Tue.","Wed.", "Thu.", "Fri", "Sat."]
    const week = weekList[now.getDay()];
    const time = now.getTime()
    const hour = now.getHours()
    const minute = now.getMinutes()

    let daytime //초기화는 하지말고 선언만 해서 쓸수있게 처리.
    if(hour <12){
        daytime = 'morning';
    }else if(hour < 18){
        daytime = 'afternoon'
    }else{
        daytime = 'evening';
    }

    return {
        month,
        date,
        week,
        time,
        hour,
        minute,
        daytime
    }
}