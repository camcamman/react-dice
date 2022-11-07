export default function Main (props) {
    const ary = []
    for (let i = 0; i < 5; i++){
        let theNum = Math.floor(Math.random() * 7);
        ary.push(theNum)
    }
    return ary
}