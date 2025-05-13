import '../css/project.css';
import mimyo from '../img/mimyo.jpg';
import kickeat from '../img/kickeat.png';
import github from '../img/github.png';
import open from '../img/open.png';

function Project() {
    return (
        <div className='project-container'>
            <ul className='project-list'>
                <li>
                    <img src={mimyo} width={300}/>
                    <ul>
                        <li><span className='project-name'>커머스 핸드메이드 쇼핑몰 [MIMYO]</span></li>
                        <li>[실시간][커뮤니케이션][편의성]을 제공하는 핸드메이드 쇼핑몰</li>
                        <li>사용언어</li>
                        <li>📆25/03/31 ~ 25/05/08</li>
                        <li className="project-links">
                            <img src={github} width={40} onClick={() => window.open("https://github.com/drumtiger/MIMYO")}/>
                            <img src={open} width={40} onClick={() => window.open("https://mimyo.my")}/>
                        </li>
                    </ul>
                </li>

                <li>
                    <img src={kickeat} width={300}/>
                    <ul>
                        <li><span className='project-name'>맛을 찾는 새로운 여행 [KickEat]</span></li>
                        <li>공공데이터를 활용한 서울시 레스토랑 추천 서비스</li>
                        <li>사용언어</li>
                        <li>📆25/03/14 ~ 25/03/25</li>
                        <li className="project-links">
                            <img src={github} width={40} onClick={() => window.open("https://github.com/drumtiger/KickEat")}/>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Project;