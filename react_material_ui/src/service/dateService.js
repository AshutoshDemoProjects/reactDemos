export function dateToString(dt) {
    let date = new Date(dt);
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    let dateString = (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y;
    return dateString;
}