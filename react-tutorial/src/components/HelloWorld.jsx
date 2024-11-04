import './HelloWorld.css';

function HelloWorld() {
    const styleObj = {
        display : "flex", justifyContent: 'center'   ,   flexDirection: 'column' 
        //ex) font-size => fontSize

    }
    return (
        <div style={styleObj}>
            <div style={{display: "flex", justifyContent: 'center', alignItems: "center", fontWeight: "bold"}}>
                {/* 객체로전달 */}
            <p >Hello,World! </p> 
            
            
            </div>
            <div style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                <p>This is my first React Application</p>
            </div>
        </div>
    )
}
//css 적용하는 법
//1. inline으로 적용하기
// Html => style='text-align:center;' display:flex;'
// react => style 태그 적용을 js객체로 (CamelCase)
//2. css파일로 작성하기 
export function HelloWorld2(){
    return (
        <div className='hello-world'> 
            <p>djis</p>
        </div>
    )
}

export const sampleVar = {
    greeting: "Hi"
}

export default  HelloWorld;

// export const 