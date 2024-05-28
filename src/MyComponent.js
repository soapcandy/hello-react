const MyConponent = props => {
    return (
    <div>
        안녕하세요, 제 이름은 {props.name} 입니다<br/>
        children 값은 {props.children} 입니다
    </div>
    )
}

MyConponent.defaultProps = {
    name: "기본 이름"
}
export default MyConponent